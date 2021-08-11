import React, { useEffect, useState } from "react";
import { firestore } from "../../firebase.config";
import PartnerActions from "./PartnerActions";
import PartnerEditMode from "./PartnerEditMode";
import axios from "../../axios";
import { useDispatch, useSelector } from "react-redux";
import { setUpdate } from "../../slices/companySlice";

const PartnerList = () => {
  const [companies, setCompanies] = useState([]);
  const [action, setAction] = useState({ id: 0, editMode: false });
  const dispatch = useDispatch();
  const update = useSelector(state => state.company.update);

  useEffect(() => {
    const fetchData = async () => {
      axios.get("/companies").then((response) => {
          let cmpy = response.data.content.map(data => {
            return { data: {...data}, id: data.id }
          });
          setCompanies(cmpy)
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
        {companies.map(({ data, id }, index) => {
          return (
            <tr key={id}>
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
        })}
      </tbody>
    </table>
  );
};

export default PartnerList;
