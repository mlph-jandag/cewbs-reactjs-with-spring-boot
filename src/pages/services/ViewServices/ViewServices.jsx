import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import DefaultLayout from "../../../components/Layouts/DefaultLayout";
import { setSearch } from "../../../slices/serviceSlice";
import ServiceForm from "../ServiceForm/ServiceForm";
import ServiceList from "../ServiceList/ServiceList";

const ViewServices = () => {
  const history = useHistory();
  const { uid } = useParams();

  const dispatch = useDispatch();
  const search = useSelector(state => state.service.search)

  const goBack = useCallback(() => {
    history.goBack();
  }, [history]);

  useEffect(() => {
    dispatch(setSearch(''))
  }, [dispatch])

  const onSearchHandler = (e) => {
    dispatch(setSearch(e.target.value))
  }

  return (
    <DefaultLayout>
      <button className="btn btn-custom mb-2" onClick={goBack}>
        <i className="fa fa-arrow-left"></i> Go Back
      </button>
      <div className="mb-4">
        <span className="h3"><span className="fa fa-list-alt fa-fw"></span> Partner</span>
        <div className="pull-right">
          <div className="input-group">
              <input className="form-control py-2 border-right-0 border" type="search" value={search} onChange={onSearchHandler} id="search"/>
              <span className="input-group-append">
                  <div className="input-group-text bg-transparent"><i className="fa fa-search"></i></div>
              </span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <ServiceForm id={uid}/>
        </div>
        <div className="col">
          <ServiceList id={uid}/>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ViewServices;
