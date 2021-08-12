import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ServiceActions from "../ServiceActions";
import axios from '../../../axios'
import ServiceEditMode from "../ServiceEditMode";
import { setServiceUpdate } from "../../../slices/serviceSlice";

const ServiceList = ({ id }) => {
  
  const [services, setServices] = useState([]);
  const [action, setAction] = useState({ id: 0, editMode: false });
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const update = useSelector(state => state.service.update);

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      axios.get(`/companies/${id}/services`).then((response) => {
        let list = response.data.content.map(data => {
          return { ...data }
        });
        setServices(list)
        setLoading(false)
      })
    };
    fetchData();
    dispatch(setServiceUpdate(false))
  }, [id, update, dispatch]);

  return (
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
  );
};

export default ServiceList;
