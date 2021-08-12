import React, { useCallback, useEffect, useState } from "react";
import PartnerActions from "./PartnerActions";
import PartnerEditMode from "./PartnerEditMode";
import axios from "../../axios";
import { useDispatch, useSelector } from "react-redux";
import { setUpdate } from "../../slices/companySlice";
import Pagination from "../../components/Pagination/Pagination";

const PartnerList = () => {
  const [companies, setCompanies] = useState([]);
  const [action, setAction] = useState({ id: 0, editMode: false });
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const update = useSelector(state => state.company.update);

  const [pages, setPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)
  const [first, setFirst] = useState(false)
  const [last, setLast] = useState(false)

  const fetchData = useCallback(async () => {
    if(update)
      setCurrentPage(0)
    axios.get(`/companies?page=${currentPage}`).then((response) => {
      let cmpy = response.data.content.map(data => {
        return { data: {...data}, id: data.id }
      });
      
      setPages(response.data.totalPages)
      setCurrentPage(response.data.number)
      setFirst(response.data.first)
      setLast(response.data.last)
      setCompanies(cmpy)
      setLoading(false)
    })
  }, [currentPage, update])

  useEffect(() => {
    setLoading(true)
    fetchData();
    dispatch(setUpdate(false))
  }, [update, dispatch, currentPage, fetchData]);
  
  const nextPage = (page) => {
    if(page <= pages || page >= 0) {
      setCurrentPage(page)
    }
  }

  return (
    <>
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Logo</th>
          <th>Name</th>
          <th>Website</th>
          <th className="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {companies.length > 0 ? companies.map(({ data, id }, index) => {
          return (
            <tr className="align-middle" key={id}>
              <td>{index + 1}</td>
              {action.editMode && action.id === id ? (
                <PartnerEditMode data={data} setAction={setAction} id={id} />
              ) : (
                <PartnerActions
                  propValues={{ data, id }}
                  setAction={setAction}
                  action={action}
                />
              )}
            </tr>
          );
        }) : loading ? (
          <tr className="text-center">
            <td colSpan="5"><i className="fa fa-spinner fa-spin"></i> Loading</td>
          </tr>
        ) : (
          <tr className="danger text-center">
            <td colSpan="5">No records found.</td>
          </tr>
        )}
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
  );
};

export default PartnerList;
