import React, { useEffect, useState} from 'react'
import RequestActions from './RequestActions';
import RequestEditMode from './RequestEditMode';
import axios from "../../axios";
import { useDispatch, useSelector } from "react-redux";
import { setUpdate } from "../../slices/hrRequestSlice";
import Pagination from "../../components/Pagination/Pagination";
import { useAlert } from "react-alert";

const RequestList = () => {
  const alertUi = useAlert();
  const [status, setStatus] = useState([]);
  const [action, setAction] = useState({id: 0, editMode: false});
  const dispatch = useDispatch();
  const update = useSelector(state => state.hrRequest.update);
  const search = useSelector(state => state.hrRequest.search);

  const [loading, setLoading] = useState(true);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [first, setFirst] = useState(false);
  const [last, setLast] = useState(false);

  useEffect(() => {
        const fetchData = async () => {
              if (update) setCurrentPage(0);
              axios.get(`/reports?page=${currentPage}`).then((response) => {
                  let status = response.data.content.map(data => {
                    return { data: {...data}, id: data.id }
                  });
                  setPages(response.data.totalPages);
                  setCurrentPage(response.data.number);
                  setFirst(response.data.first);
                  setLast(response.data.last);
                  setLoading(false);
                  setStatus(status)
              })
              .catch((err) => {
                      setLoading(false);
                      if (err.response) alertUi.error(err.response.data.message);
                      else alertUi.error(err.message);
              })
              }
        setLoading(true);
        fetchData();
        dispatch(setUpdate(false))
    }, [currentPage, alertUi, search, update, dispatch]);

  const nextPage = (page) => {
    if (page <= pages || page >= 0) {
      setCurrentPage(page);
    }
  };

  return (
        <>
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Requestor</th>
                  <th>Department</th>
                  <th>Classification</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                  {
                    status.length > 0 ? status.map(({ data, id}, index) => {
                      return (
                        <tr key={ id }>
                          <td>{ index + 1 }</td>
                          {
                            action.editMode && action.id == id
                            ?
                              <RequestEditMode
                                data={ data }
                                setAction={ setAction }
                                id={ id }
                              />
                            :
                              <RequestActions
                                propValues={{ data, id }}
                                setAction={ setAction }
                                action={ action }
                              />
                          }
                        </tr>
                      );
                    }) : loading ? (
                       <tr className="text-center">
                         <td colSpan="6">
                           <i className="fa fa-spinner fa-spin"></i> Loading
                         </td>
                       </tr>
                     ): (
                      <tr className="danger text-center">
                         <td colSpan="6">No records found.</td>
                      </tr>
                    )
                  }
                </tbody>
            </table>
            <Pagination
                totalPages={pages}
                first={first}
                last={last}
                currentPage={currentPage}
                navigate={nextPage}
            />
        </>
  )
}

export default RequestList
