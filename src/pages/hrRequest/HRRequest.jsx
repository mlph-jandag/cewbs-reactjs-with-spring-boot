import React, { useEffect } from 'react';
import DefaultLayout from '../../components/Layouts/DefaultLayout';
import GenerateReport from './GenerateRequestReport'
import RequestList from './RequestList'
import { setSearch } from "../../slices/hrRequestSlice";
import { useDispatch, useSelector } from "react-redux";

const HRRequest = () => {

    const dispatch = useDispatch();
    const search = useSelector(state => state.hrRequest.search)

    useEffect(() => {
      dispatch(setSearch(''))
    }, [dispatch])

    const onSearchHandler = (e) => {
      dispatch(setSearch(e.target.value))
    }

    return (
        <DefaultLayout>
            <h3 className="mb-4">
                <span className="fa fa-list-alt fa-fw"></span> HR Requests
                <div className="pull-right">
                  <div className="input-group">
                      <input className="form-control py-2 border-right-0 border" type="search" value={search} onChange={onSearchHandler} id="search"/>
                      <span className="input-group-append">
                          <div className="input-group-text bg-transparent"><i className="fa fa-search"></i></div>
                      </span>
                  </div>
                </div>
            </h3>
            <div className="row">
                <div className="col-md-4">
                    <GenerateReport />
                </div>
                <div className="col">
                    <RequestList />
                </div>
            </div>
        </DefaultLayout>
    )
}

export default HRRequest;