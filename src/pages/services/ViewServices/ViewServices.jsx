import React from "react";
import { useParams } from "react-router";
import DefaultLayout from "../../../components/Layouts/DefaultLayout";

const ViewServices = () => {
  const { uid } = useParams();
  return <DefaultLayout>View services</DefaultLayout>;
};

export default ViewServices;
