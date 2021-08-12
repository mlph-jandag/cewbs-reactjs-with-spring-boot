import React, { useEffect, useState } from "react";
import PartnerActions from "./PartnerActions";
import PartnerEditMode from "./PartnerEditMode";
import axios from "../../axios";
import { useDispatch, useSelector } from "react-redux";
import { setUpdate } from "../../slices/companySlice";

const PartnerList = () => {
  const [companies, setCompanies] = useState([]);
  const [action, setAction] = useState({ id: 0, editMode: false });
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const update = useSelector(state => state.company.update);

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      axios.get("/companies").then((response) => {
        let cmpy = response.data.content.map(data => {
          return { data: {...data}, id: data.id }
        });
        setCompanies(cmpy)
        setLoading(false)
      })
    }
    fetchData();
    dispatch(setUpdate(false))
  }, [update, dispatch]);
  
  return (
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
  );
};

export default PartnerList;
