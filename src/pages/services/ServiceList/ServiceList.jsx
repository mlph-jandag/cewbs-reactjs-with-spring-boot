import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ServiceActions from "../ServiceActions";
import axios from '../../../axios'
import ServiceEditMode from "../ServiceEditMode";
import { setServiceUpdate } from "../../../slices/serviceSlice";
import Pagination from "../../../components/Pagination/Pagination";

const ServiceList = ({ id }) => {
  
  const [services, setServices] = useState([]);
  const [action, setAction] = useState({ id: 0, editMode: false });
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const update = useSelector(state => state.service.update);

  const [pages, setPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)
  const [first, setFirst] = useState(false)
  const [last, setLast] = useState(false)

  const fetchData = useCallback(async () => {
    if(update)
      setCurrentPage(0)
    axios.get(`/companies/${id}/services?page=${currentPage}`).then((response) => {
      let list = response.data.content.map(data => {
        return { ...data }
      });
      
      setPages(response.data.totalPages)
      setCurrentPage(response.data.number)
      setFirst(response.data.first)
      setLast(response.data.last)
      setServices(list)
      setLoading(false)
    })
  }, [currentPage, id, update]);

  useEffect(() => {
    setLoading(true)
    fetchData();
    dispatch(setServiceUpdate(false))
  }, [id, update, dispatch, pages, currentPage, fetchData]);

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
            <th>Service</th>
            <th>Access Link</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.length > 0 ? services.map((service, index) => {
            return (
              <tr className="align-middle" key={service.id}>
                <td>{index + 1}</td>
                {action.editMode && action.id === service.id ? (
                  <ServiceEditMode data={service} setAction={setAction} id={id} />
                ) : (
                  <ServiceActions
                    propValues={{ service, id }}
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

export default ServiceList;
