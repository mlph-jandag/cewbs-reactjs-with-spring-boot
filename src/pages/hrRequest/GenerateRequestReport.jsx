import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import axios from "../../axios";
import { base64ToArrayBuffer, saveByteArray } from "../../utils/reportUtils";

const GenerateReport = () => {
    const [department, setDepartment] = useState('');
    const [classification, setClassification] = useState('');
    const [type, setType] = useState('');
    const [status, setStatus] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [btnDisabled, setBtnDisabled] = useState(false);
    const [loading, setLoading] = useState(false);

    const onGenerateHandler = () => {
      let data = {
        startDate,
        endDate,
        department,
        classification,
        type,
        status
      }
      setLoading(true)
      axios.post('/reports/generate', data).then(response => {
        const dataByte = response.data;
        var sampleArr = base64ToArrayBuffer(dataByte);
        saveByteArray("Report", sampleArr);
      }).catch(err => {
        console.log(err)
      }).finally(() => {
        setLoading(false)
      })
    }

    return (
            <div className="card">
                <div className="card-header">Generate Report</div>
                <div className="card-body mb-2">
                  <label>Start Date</label>
                  <Form.Control type="date" name='startDate' value={startDate} onChange={(e) => setStartDate(e.target.value)}/>
                  <label>End Date</label>
                  <Form.Control type="date" name='endDate' min={startDate} value={endDate > startDate ? endDate : startDate} onChange={(e) => setEndDate(e.target.value)} />
                  <label>Department</label>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownDepartmentButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {department !== "" ? department : "Select all"}
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownCategoryButton">
                          <button
                            onClick={() => setDepartment("")}
                            className="dropdown-item"
                          >
                            All
                          </button>
                          <button
                            onClick={() => setDepartment("Operations")}
                            className="dropdown-item"
                          >
                            Operations
                          </button>
                          <button
                            onClick={() => setDepartment("Support")}
                            className="dropdown-item"
                          >
                            Support
                          </button>
                    </div>
                  </div>
                  <label>Classification</label>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownClassificationButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {classification !== "" ? classification : "Select all"}
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownCategoryButton">
                          <button
                            onClick={() => setClassification("")}
                            className="dropdown-item"
                          >
                          All
                          </button>
                          <button
                            onClick={() => setClassification("Document")}
                            className="dropdown-item"
                          >
                            Document
                          </button>
                          <button
                            onClick={() => setClassification("HRMS-Related")}
                            className="dropdown-item"
                          >
                            HRMS-Related
                          </button>
                          <button
                            onClick={() => setClassification("Government Mandated Benefits-Related")}
                            className="dropdown-item"
                          >
                            Government Mandated Benefits-Related
                          </button>
                          <button
                            onClick={() => setClassification("Weremote Co-working")}
                            className="dropdown-item"
                          >
                            Weremote Co-working
                          </button>
                    </div>
                  </div>
                  <label>Type</label>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownTypeButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {type !== "" ? type : "Select all"}
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownCategoryButton">
                          <button
                            onClick={() => setType("")}
                            className="dropdown-item"
                          >
                          All
                          </button>
                          <button
                            onClick={() => setType("Document - COE")}
                            className="dropdown-item"
                          >
                            Document - COE
                          </button>
                          <button
                            onClick={() => setType("Document - LOA")}
                            className="dropdown-item"
                          >
                            Document - LOA
                          </button>
                          <button
                            onClick={() => setType("Personal Information Update")}
                            className="dropdown-item"
                          >
                            Personal Information Update
                          </button>
                          <button
                            onClick={() => setType("HRMS - Change of Approver")}
                            className="dropdown-item"
                          >
                            HRMS - Change of Approver
                          </button>
                          <button
                            onClick={() => setType("HRMS - TDF")}
                            className="dropdown-item"
                          >
                            HRMS - TDF
                          </button>
                          <button
                            onClick={() => setType("HRMS - Incorrect filing/Cancellation of leave")}
                            className="dropdown-item"
                          >
                            HRMS - Incorrect filing/Cancellation of leave
                          </button>
                          <button
                            onClick={() => setType("Government Mandated Benefits - SSS")}
                            className="dropdown-item"
                          >
                            Government Mandated Benefits - SSS
                          </button>
                          <button
                            onClick={() => setType("Government Mandated Benefits - PagIbig/HDMF")}
                            className="dropdown-item"
                          >
                            Government Mandated Benefits - PagIbig/HDMF
                          </button>
                          <button
                            onClick={() => setType("Government Mandated Benefits - Philhealth")}
                            className="dropdown-item"
                          >
                            Government Mandated Benefits - Philhealth
                          </button>
                          <button
                            onClick={() => setType("Co-working Weremote")}
                            className="dropdown-item"
                          >
                            Co-working Weremote
                          </button>
                    </div>
                  </div>
                  <label>Status</label>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownDepartmentButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {status !== "" ? status : "Select all"}
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownCategoryButton">
                          <button
                            onClick={() => setStatus("")}
                            className="dropdown-item"
                          >
                          All
                          </button>
                          <button
                            onClick={() => setStatus("Pending")}
                            className="dropdown-item"
                          >
                            Pending
                          </button>
                          <button
                            onClick={() => setStatus("Processing")}
                            className="dropdown-item"
                          >
                            Processing
                          </button>
                          <button
                            onClick={() => setStatus("Declined")}
                            className="dropdown-item"
                          >
                            Declined
                          </button>
                          <button
                            onClick={() => setStatus("Finished")}
                            className="dropdown-item"
                          >
                            Finished
                          </button>
                    </div>
                  </div>

                  <button
                      disabled={btnDisabled}
                      className="btn btn-yellow px-4 mt-4"
                      onClick={onGenerateHandler}
                  >{loading ? 'Loading ...' : 'Generate'}</button>
                </div>
            </div>
    )
}

export default GenerateReport;