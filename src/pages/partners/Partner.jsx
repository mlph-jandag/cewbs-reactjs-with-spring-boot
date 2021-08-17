import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DefaultLayout from "../../components/Layouts/DefaultLayout";
import { setSearch } from "../../slices/companySlice";
import PartnerForm from "./PartnerForm";
import PartnerList from "./PartnerList";

const Partner = () => {
  const dispatch = useDispatch();
  const search = useSelector(state => state.company.search)

  useEffect(() => {
    dispatch(setSearch(''))
  }, [dispatch])
  
  const onSearchHandler = (e) => {
    dispatch(setSearch(e.target.value))
  }

  return (
    <DefaultLayout>
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
      <div className="clearfix"></div>
      <div className="row">
        <div className="col-md-4">
          <PartnerForm />
        </div>
        <div className="col">
          <PartnerList />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Partner;
