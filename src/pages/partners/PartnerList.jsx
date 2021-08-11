import React, { useEffect, useState } from "react";
import { firestore } from "../../firebase.config";
import PartnerActions from "./PartnerActions";
import PartnerEditMode from "./PartnerEditMode";
import axios from "../../axios";

const PartnerList = () => {
  const [companies, setCompanies] = useState([]);
  const [action, setAction] = useState({ id: 0, editMode: false });

  useEffect(() => {
    // const unsubscribe = firestore
    //   .collection("companies")
    //   .onSnapshot((documentSnapshot) => {
    //     let cmpy = documentSnapshot.docs.map((data) => {
    //       return { uid: data.id, data: data.data() };
    //     });
    //     setCompanies(cmpy);
    //   });
    // return unsubscribe;
    const fetchData = async () => {
      axios.get("/companies", {
        headers: {
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }
      }).then((response) => {
          console.log(response.data)
      })
    }
    fetchData();
  }, []);

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
        {companies.map(({ data, uid }, index) => {
          return (
            <tr key={uid}>
              <td>{index + 1}</td>
              {action.editMode && action.id === uid ? (
                <PartnerEditMode data={data} setAction={setAction} id={uid} />
              ) : (
                <PartnerActions
                  propValues={{ data, uid }}
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
