import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { ref, onValue } from "firebase/database";
import { db } from "../Config/firebase";
import Pic from './assets/img/images (1).jpeg'
import Pic1 from './assets/img/images (2).jpeg'
import Pic2 from './assets/img/download (1).png'

function Home(Navigate) {
  const [tableData, setTableData] = useState([]);
  const [previousCount, setPreviousCount] = useState(0);

  useEffect(() => {
    const tasksRef = ref(db, "Posting");

    const fetchData = () => {
      onValue(tasksRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const dataArray = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
          setPreviousCount(tableData.length); 
          setTableData(dataArray);
        }
      });
    };

    fetchData();
  }, [tableData.length]);


  const percentageIncrease = ((tableData.length - previousCount) / previousCount) * 100;



  const [tableDataVideo, setTableDataVideo] = useState([]);
  const [previousCountVideo, setPreviousCountVideo] = useState(0);

  useEffect(() => {
    const tasksRef = ref(db, "VideoPosting");

    const fetchData = () => {
      onValue(tasksRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const dataArray = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
          setPreviousCountVideo(tableDataVideo.length); // Set the previous count before updating tableData
          setTableDataVideo(dataArray);
        }
      });
    };

    fetchData();
  }, [tableDataVideo.length]);

  const percentageIncreaseVideo = ((tableDataVideo.length - previousCountVideo) / previousCountVideo) * 100;



  
  const [tableDataRequest, setTableDataRequest] = useState([]);
  const [previousCountRequest, setPreviousCountRequest] = useState(0);

  useEffect(() => {
    const tasksRef = ref(db, "Request");

    const fetchData = () => {
      onValue(tasksRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const dataArray = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
          setPreviousCountRequest(tableDataRequest.length);
          setTableDataRequest(dataArray);
        }
      });
    };

    fetchData();
  }, [tableDataRequest.length]);

  const percentageIncreaseRequest = ((tableDataRequest.length - previousCountRequest) / previousCountRequest) * 100;



  const [tableDataDonation, setTableDataDonation] = useState([]);
  const [previousCountDonation, setPreviousCountDonation] = useState(0);

  useEffect(() => {
    const tasksRef = ref(db, "Donation");

    const fetchData = () => {
      onValue(tasksRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const dataArray = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
          setPreviousCountDonation(tableDataDonation.length); // Set the previous count before updating tableData
          setTableDataDonation(dataArray);
        }
      });
    };

    fetchData();
  }, [tableDataDonation.length]);

  const percentageIncreaseDonation = ((tableDataDonation.length - previousCountDonation) / previousCountDonation) * 100;



  return (
    <>
      <Nav />
      <div className="main-content">
        {/* Main */}

        <section className="section">
          <div className="row ">
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="card">
                <div className="card-statistic-4">
                  <div className="align-items-center justify-content-between">
                    <div className="row ">
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3">
                        <div className="card-content">
                          <h5 className="font-15">Img Post</h5>
                          <h2 className="mb-3 font-18">{tableData.length}</h2>
                          <p className="mb-0">
                          <span className="col-green">{percentageIncrease.toFixed(2)}%</span> Increase
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pl-0">
                        <div className="banner-img">
                          <img src="assets/img/banner/1.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="card">
                <div className="card-statistic-4">
                  <div className="align-items-center justify-content-between">
                    <div className="row ">
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3">
                      <div className="card-content">
                          <h5 className="font-15">Video Post</h5>
                          <h2 className="mb-3 font-18">{tableDataVideo.length}</h2>
                          <p className="mb-0">
                          <span className="col-green">{percentageIncreaseVideo.toFixed(2)}%</span> Increase
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pl-0">
                        <div className="banner-img">
                          <img src="assets/img/banner/2.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="card">
                <div className="card-statistic-4">
                  <div className="align-items-center justify-content-between">
                    <div className="row ">
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3">
                      <div className="card-content">
                          <h5 className="font-15">Request</h5>
                          <h2 className="mb-3 font-18">{tableDataRequest.length}</h2>
                          <p className="mb-0">
                          <span className="col-green">{percentageIncreaseRequest.toFixed(2)}%</span> Increase
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pl-0">
                        <div className="banner-img">
                          <img src="assets/img/banner/3.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="card">
                <div className="card-statistic-4">
                  <div className="align-items-center justify-content-between">
                    <div className="row ">
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3">
                      <div className="card-content">
                          <h5 className="font-15">Donation</h5>
                          <h2 className="mb-3 font-18">{tableDataDonation.length}</h2>
                          <p className="mb-0">
                          <span className="col-green">{percentageIncreaseDonation.toFixed(2)}%</span> Increase
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pl-0">
                        <div className="banner-img">
                          <img src="assets/img/banner/4.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-12 col-lg-12">
              <div className="card ">
                <div className="card-header">
                  <h4>Revenue chart</h4>
                  <div className="card-header-action">
                    <div className="dropdown">
                      <a
                        href="/#"
                        data-toggle="dropdown"
                        className="btn btn-warning dropdown-toggle"
                      >
                        Options
                      </a>
                      <div className="dropdown-menu">
                        <a href="/#" className="dropdown-item has-icon">
                          <i className="fas fa-eye"></i> View
                        </a>
                        <a href="/#" className="dropdown-item has-icon">
                          <i className="far fa-edit"></i> Edit
                        </a>
                        <div className="dropdown-divider"></div>
                        <a
                          href="/#"
                          className="dropdown-item has-icon text-danger"
                        >
                          <i className="far fa-trash-alt"></i>
                          Delete
                        </a>
                      </div>
                    </div>
                    <a href="/#" className="btn btn-primary">
                      View All
                    </a>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-9">
                      <div id="chart1"></div>
                      <div className="row mb-0">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                          <div className="list-inline text-center">
                            <div className="list-inline-item p-r-30">
                              <i
                                data-feather="arrow-up-circle"
                                className="col-green"
                              ></i>
                              <h5 className="m-b-0">$675</h5>
                              <p className="text-muted font-14 m-b-0">
                                Weekly Earnings
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                          <div className="list-inline text-center">
                            <div className="list-inline-item p-r-30">
                              <i
                                data-feather="arrow-down-circle"
                                className="col-orange"
                              ></i>
                              <h5 className="m-b-0">$1,587</h5>
                              <p className="text-muted font-14 m-b-0">
                                Monthly Earnings
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                          <div className="list-inline text-center">
                            <div className="list-inline-item p-r-30">
                              <i
                                data-feather="arrow-up-circle"
                                className="col-green"
                              ></i>
                              <h5 className="mb-0 m-b-0">$45,965</h5>
                              <p className="text-muted font-14 m-b-0">
                                Yearly Earnings
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="row mt-5">
                        <div className="col-7 col-xl-7 mb-3">
                          Total customers
                        </div>
                        <div className="col-5 col-xl-5 mb-3">
                          <span className="text-big">8,257</span>
                          <sup className="col-green">+09%</sup>
                        </div>
                        <div className="col-7 col-xl-7 mb-3">Total Income</div>
                        <div className="col-5 col-xl-5 mb-3">
                          <span className="text-big">$9,857</span>
                          <sup className="text-danger">-18%</sup>
                        </div>
                        <div className="col-7 col-xl-7 mb-3">
                          Project completed
                        </div>
                        <div className="col-5 col-xl-5 mb-3">
                          <span className="text-big">28</span>
                          <sup className="col-green">+16%</sup>
                        </div>
                        <div className="col-7 col-xl-7 mb-3">Total expense</div>
                        <div className="col-5 col-xl-5 mb-3">
                          <span className="text-big">$6,287</span>
                          <sup className="col-green">+09%</sup>
                        </div>
                        <div className="col-7 col-xl-7 mb-3">New Customers</div>
                        <div className="col-5 col-xl-5 mb-3">
                          <span className="text-big">684</span>
                          <sup className="col-green">+22%</sup>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-12 col-lg-4">
              <div className="card">
                <div className="card-header">
                  <h4>Chart</h4>
                </div>
                <div className="card-body">
                  <img src={Pic} alt="" />
                  <div id="chart4" className="chartsh"></div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-lg-4">
              <div className="card">
                <div className="card-header">
                  <h4>Chart</h4>
                </div>
                <div className="card-body">
                  <img src={Pic1} alt="" />
                  <div className="summary">
                    <div
                      className="summary-chart active"
                      data-tab-group="summary-tab"
                      id="summary-chart"
                    >
                      <div id="chart3" className="chartsh"></div>
                    </div>
                    <div data-tab-group="summary-tab" id="summary-text"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-lg-4">
              <div className="card">
                <div className="card-header">
                  <h4>Chart</h4>
                </div>
                <div className="card-body">
                  <img src={Pic2} alt="" />
                  <div id="chart2" className="chartsh"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h4>Assign Task Table</h4>
                  <div className="card-header-form">
                    <form>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search"
                        />
                        <div className="input-group-btn">
                          <button className="btn btn-primary">
                            <i className="fas fa-search"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <tr>
                        <th className="text-center">
                          <div className="custom-checkbox custom-checkbox-table custom-control">
                            <input
                              type="checkbox"
                              data-checkboxes="mygroup"
                              data-checkbox-role="dad"
                              className="custom-control-input"
                              id="checkbox-all"
                            />
                            <label
                              htmlFor="checkbox-all"
                              className="custom-control-label"
                            >
                              &nbsp;
                            </label>
                          </div>
                        </th>
                        <th>Task Name</th>
                        <th>Members</th>
                        <th>Task Status</th>
                        <th>Assigh Date</th>
                        <th>Due Date</th>
                        <th>Priority</th>
                        <th>Action</th>
                      </tr>
                      <tr>
                        <td className="p-0 text-center">
                          <div className="custom-checkbox custom-control">
                            <input
                              type="checkbox"
                              data-checkboxes="mygroup"
                              className="custom-control-input"
                              id="checkbox-1"
                            />
                            <label
                              htmlFor="checkbox-1"
                              className="custom-control-label"
                            >
                              &nbsp;
                            </label>
                          </div>
                        </td>
                        <td>Create a mobile app</td>
                        <td className="text-truncate">
                          <ul className="list-unstyled order-list m-b-0 m-b-0">
                            <li className="team-member team-member-sm">
                              <img
                                className="rounded-circle"
                                src="assets/img/users/user-8.png"
                                alt=""
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Wildan Ahdian"
                              />
                            </li>
                            <li className="team-member team-member-sm">
                              <img
                                className="rounded-circle"
                                src="assets/img/users/user-9.png"
                                alt=""
                                data-toggle="tooltip"
                                title=""
                                data-original-title="John Deo"
                              />
                            </li>
                            <li className="team-member team-member-sm">
                              <img
                                className="rounded-circle"
                                src="assets/img/users/user-10.png"
                                alt=""
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Sarah Smith"
                              />
                            </li>
                            <li className="avatar avatar-sm">
                              <span className="badge badge-primary">+4</span>
                            </li>
                          </ul>
                        </td>
                        <td className="align-middle">
                          <div className="progress-text">50%</div>
                          <div className="progress" data-height="6">
                            <div
                              className="progress-bar bg-success"
                              data-width="50%"
                            ></div>
                          </div>
                        </td>
                        <td>2018-01-20</td>
                        <td>2019-05-28</td>
                        <td>
                          <div className="badge badge-success">Low</div>
                        </td>
                        <td>
                          <a href="/#" className="btn btn-outline-primary">
                            Detail
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-0 text-center">
                          <div className="custom-checkbox custom-control">
                            <input
                              type="checkbox"
                              data-checkboxes="mygroup"
                              className="custom-control-input"
                              id="checkbox-2"
                            />
                            <label
                              htmlFor="checkbox-2"
                              className="custom-control-label"
                            >
                              &nbsp;
                            </label>
                          </div>
                        </td>
                        <td>Redesign homepage</td>
                        <td className="text-truncate">
                          <ul className="list-unstyled order-list m-b-0 m-b-0">
                            <li className="team-member team-member-sm">
                              <img
                                className="rounded-circle"
                                src="assets/img/users/user-1.png"
                                alt=""
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Wildan Ahdian"
                              />
                            </li>
                            <li className="team-member team-member-sm">
                              <img
                                className="rounded-circle"
                                src="assets/img/users/user-2.png"
                                alt=""
                                data-toggle="tooltip"
                                title=""
                                data-original-title="John Deo"
                              />
                            </li>
                            <li className="avatar avatar-sm">
                              <span className="badge badge-primary">+2</span>
                            </li>
                          </ul>
                        </td>
                        <td className="align-middle">
                          <div className="progress-text">40%</div>
                          <div className="progress" data-height="6">
                            <div
                              className="progress-bar bg-danger"
                              data-width="40%"
                            ></div>
                          </div>
                        </td>
                        <td>2017-07-14</td>
                        <td>2018-07-21</td>
                        <td>
                          <div className="badge badge-danger">High</div>
                        </td>
                        <td>
                          <a href="/#" className="btn btn-outline-primary">
                            Detail
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-0 text-center">
                          <div className="custom-checkbox custom-control">
                            <input
                              type="checkbox"
                              data-checkboxes="mygroup"
                              className="custom-control-input"
                              id="checkbox-3"
                            />
                            <label
                              htmlFor="checkbox-3"
                              className="custom-control-label"
                            >
                              &nbsp;
                            </label>
                          </div>
                        </td>
                        <td>Backup database</td>
                        <td className="text-truncate">
                          <ul className="list-unstyled order-list m-b-0 m-b-0">
                            <li className="team-member team-member-sm">
                              <img
                                className="rounded-circle"
                                src="assets/img/users/user-3.png"
                                alt=""
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Wildan Ahdian"
                              />
                            </li>
                            <li className="team-member team-member-sm">
                              <img
                                className="rounded-circle"
                                src="assets/img/users/user-4.png"
                                alt=""
                                data-toggle="tooltip"
                                title=""
                                data-original-title="John Deo"
                              />
                            </li>
                            <li className="team-member team-member-sm">
                              <img
                                className="rounded-circle"
                                src="assets/img/users/user-5.png"
                                alt=""
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Sarah Smith"
                              />
                            </li>
                            <li className="avatar avatar-sm">
                              <span className="badge badge-primary">+3</span>
                            </li>
                          </ul>
                        </td>
                        <td className="align-middle">
                          <div className="progress-text">55%</div>
                          <div className="progress" data-height="6">
                            <div
                              className="progress-bar bg-purple"
                              data-width="55%"
                            ></div>
                          </div>
                        </td>
                        <td>2019-07-25</td>
                        <td>2019-08-17</td>
                        <td>
                          <div className="badge badge-info">Average</div>
                        </td>
                        <td>
                          <a href="/#" className="btn btn-outline-primary">
                            Detail
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-0 text-center">
                          <div className="custom-checkbox custom-control">
                            <input
                              type="checkbox"
                              data-checkboxes="mygroup"
                              className="custom-control-input"
                              id="checkbox-4"
                            />
                            <label
                              htmlFor="checkbox-4"
                              className="custom-control-label"
                            >
                              &nbsp;
                            </label>
                          </div>
                        </td>
                        <td>Android App</td>
                        <td className="text-truncate">
                          <ul className="list-unstyled order-list m-b-0 m-b-0">
                            <li className="team-member team-member-sm">
                              <img
                                className="rounded-circle"
                                src="assets/img/users/user-7.png"
                                alt=""
                                data-toggle="tooltip"
                                title=""
                                data-original-title="John Deo"
                              />
                            </li>
                            <li className="team-member team-member-sm">
                              <img
                                className="rounded-circle"
                                src="assets/img/users/user-8.png"
                                alt=""
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Sarah Smith"
                              />
                            </li>
                            <li className="avatar avatar-sm">
                              <span className="badge badge-primary">+4</span>
                            </li>
                          </ul>
                        </td>
                        <td className="align-middle">
                          <div className="progress-text">70%</div>
                          <div className="progress" data-height="6">
                            <div
                              className="progress-bar"
                              data-width="70%"
                            ></div>
                          </div>
                        </td>
                        <td>2018-04-15</td>
                        <td>2019-07-19</td>
                        <td>
                          <div className="badge badge-success">Low</div>
                        </td>
                        <td>
                          <a href="/#" className="btn btn-outline-primary">
                            Detail
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-0 text-center">
                          <div className="custom-checkbox custom-control">
                            <input
                              type="checkbox"
                              data-checkboxes="mygroup"
                              className="custom-control-input"
                              id="checkbox-5"
                            />
                            <label
                              htmlFor="checkbox-5"
                              className="custom-control-label"
                            >
                              &nbsp;
                            </label>
                          </div>
                        </td>
                        <td>Logo Design</td>
                        <td className="text-truncate">
                          <ul className="list-unstyled order-list m-b-0 m-b-0">
                            <li className="team-member team-member-sm">
                              <img
                                className="rounded-circle"
                                src="assets/img/users/user-9.png"
                                alt=""
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Wildan Ahdian"
                              />
                            </li>
                            <li className="team-member team-member-sm">
                              <img
                                className="rounded-circle"
                                src="assets/img/users/user-10.png"
                                alt=""
                                data-toggle="tooltip"
                                title=""
                                data-original-title="John Deo"
                              />
                            </li>
                            <li className="team-member team-member-sm">
                              <img
                                className="rounded-circle"
                                src="assets/img/users/user-2.png"
                                alt=""
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Sarah Smith"
                              />
                            </li>
                            <li className="avatar avatar-sm">
                              <span className="badge badge-primary">+2</span>
                            </li>
                          </ul>
                        </td>
                        <td className="align-middle">
                          <div className="progress-text">45%</div>
                          <div className="progress" data-height="6">
                            <div
                              className="progress-bar bg-cyan"
                              data-width="45%"
                            ></div>
                          </div>
                        </td>
                        <td>2017-02-24</td>
                        <td>2018-09-06</td>
                        <td>
                          <div className="badge badge-danger">High</div>
                        </td>
                        <td>
                          <a href="/#" className="btn btn-outline-primary">
                            Detail
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-0 text-center">
                          <div className="custom-checkbox custom-control">
                            <input
                              type="checkbox"
                              data-checkboxes="mygroup"
                              className="custom-control-input"
                              id="checkbox-6"
                            />
                            <label
                              htmlFor="checkbox-6"
                              className="custom-control-label"
                            >
                              &nbsp;
                            </label>
                          </div>
                        </td>
                        <td>Ecommerce website</td>
                        <td className="text-truncate">
                          <ul className="list-unstyled order-list m-b-0 m-b-0">
                            <li className="team-member team-member-sm">
                              <img
                                className="rounded-circle"
                                src="assets/img/users/user-8.png"
                                alt=""
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Wildan Ahdian"
                              />
                            </li>
                            <li className="team-member team-member-sm">
                              <img
                                className="rounded-circle"
                                src="assets/img/users/user-9.png"
                                alt=""
                                data-toggle="tooltip"
                                title=""
                                data-original-title="John Deo"
                              />
                            </li>
                            <li className="team-member team-member-sm">
                              <img
                                className="rounded-circle"
                                src="assets/img/users/user-10.png"
                                alt=""
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Sarah Smith"
                              />
                            </li>
                            <li className="avatar avatar-sm">
                              <span className="badge badge-primary">+4</span>
                            </li>
                          </ul>
                        </td>
                        <td className="align-middle">
                          <div className="progress-text">30%</div>
                          <div className="progress" data-height="6">
                            <div
                              className="progress-bar bg-orange"
                              data-width="30%"
                            ></div>
                          </div>
                        </td>
                        <td>2018-01-20</td>
                        <td>2019-05-28</td>
                        <td>
                          <div className="badge badge-info">Average</div>
                        </td>
                        <td>
                          <a href="/#" className="btn btn-outline-primary">
                            Detail
                          </a>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-12 col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h4>Support Ticket</h4>
                  <form className="card-header-form">
                    <input
                      type="text"
                      name="search"
                      className="form-control"
                      placeholder="Search"
                    />
                  </form>
                </div>
                <div className="card-body">
                  <div className="support-ticket media pb-1 mb-3">
                    <img
                      src="assets/img/users/user-1.png"
                      className="user-img mr-2"
                      alt=""
                    />
                    <div className="media-body ml-3">
                      <div className="badge badge-pill badge-success mb-1 float-right">
                        Feature
                      </div>
                      <span className="font-weight-bold">#89754</span>
                      <a href="/#">Please add advance table</a>
                      <p className="my-1">
                        Hi, can you please add new table for advan...
                      </p>
                      <small className="text-muted">
                        Created by{" "}
                        <span className="font-weight-bold font-13">
                          John Deo
                        </span>
                        &nbsp;&nbsp; - 1 day ago
                      </small>
                    </div>
                  </div>
                  <div className="support-ticket media pb-1 mb-3">
                    <img
                      src="assets/img/users/user-2.png"
                      className="user-img mr-2"
                      alt=""
                    />
                    <div className="media-body ml-3">
                      <div className="badge badge-pill badge-warning mb-1 float-right">
                        Bug
                      </div>
                      <span className="font-weight-bold">#57854</span>
                      <a href="/#">Select item not working</a>
                      <p className="my-1">
                        please check select item in advance form not work...
                      </p>
                      <small className="text-muted">
                        Created by{" "}
                        <span className="font-weight-bold font-13">
                          Sarah Smith
                        </span>
                        &nbsp;&nbsp; - 2 day ago
                      </small>
                    </div>
                  </div>
                  <div className="support-ticket media pb-1 mb-3">
                    <img
                      src="assets/img/users/user-3.png"
                      className="user-img mr-2"
                      alt=""
                    />
                    <div className="media-body ml-3">
                      <div className="badge badge-pill badge-primary mb-1 float-right">
                        Query
                      </div>
                      <span className="font-weight-bold">#85784</span>
                      <a href="/#">Are you provide template in Angular?</a>
                      <p className="my-1">
                        can you provide template in latest angular 8.
                      </p>
                      <small className="text-muted">
                        Created by{" "}
                        <span className="font-weight-bold font-13">
                          Ashton Cox
                        </span>
                        &nbsp;&nbsp; -2 day ago
                      </small>
                    </div>
                  </div>
                  <div className="support-ticket media pb-1 mb-3">
                    <img
                      src="assets/img/users/user-6.png"
                      className="user-img mr-2"
                      alt=""
                    />
                    <div className="media-body ml-3">
                      <div className="badge badge-pill badge-info mb-1 float-right">
                        Enhancement
                      </div>
                      <span className="font-weight-bold">#25874</span>
                      <a href="/#">About template page load speed</a>
                      <p className="my-1">
                        Hi, John, can you work on increase page speed of
                        template...
                      </p>
                      <small className="text-muted">
                        Created by{" "}
                        <span className="font-weight-bold font-13">
                          Hasan Basri
                        </span>
                        &nbsp;&nbsp; -3 day ago
                      </small>
                    </div>
                  </div>
                </div>
                <a
                  href="/#"
                  className="card-footer card-link text-center small "
                >
                  View All
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-12 col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h4>Projects Payments</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover mb-0">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Client Name</th>
                          <th>Date</th>
                          <th>Payment Method</th>
                          <th>Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>John Doe </td>
                          <td>11-08-2018</td>
                          <td>NEFT</td>
                          <td>$258</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Cara Stevens</td>
                          <td>15-07-2018</td>
                          <td>PayPal</td>
                          <td>$125</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Airi Satou</td>
                          <td>25-08-2018</td>
                          <td>RTGS</td>
                          <td>$287</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Angelica Ramos</td>
                          <td>01-05-2018</td>
                          <td>CASH</td>
                          <td>$170</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Ashton Cox</td>
                          <td>18-04-2018</td>
                          <td>NEFT</td>
                          <td>$970</td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>John Deo</td>
                          <td>22-11-2018</td>
                          <td>PayPal</td>
                          <td>$854</td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td>Hasan Basri</td>
                          <td>07-09-2018</td>
                          <td>Cash</td>
                          <td>$128</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="settingSidebar">
          <a href="#" className="settingPanelToggle">
            <i className="fa fa-spin fa-cog"></i>
          </a>
          <div className="settingSidebar-body ps-container ps-theme-default">
            <div className=" fade show active">
              <div className="setting-panel-header">Setting Panel</div>
              <div className="p-15 border-bottom">
                <h6 className="font-medium m-b-10">Select Layout</h6>
                <div className="selectgroup layout-color w-50">
                  <label className="selectgroup-item">
                    <input
                      type="radio"
                      name="value"
                      value="1"
                      className="selectgroup-input-radio select-layout"
                      checked
                    />
                    <span className="selectgroup-button">Light</span>
                  </label>
                  <label className="selectgroup-item">
                    <input
                      type="radio"
                      name="value"
                      value="2"
                      className="selectgroup-input-radio select-layout"
                    />
                    <span className="selectgroup-button">Dark</span>
                  </label>
                </div>
              </div>
              <div className="p-15 border-bottom">
                <h6 className="font-medium m-b-10">Sidebar Color</h6>
                <div className="selectgroup selectgroup-pills sidebar-color">
                  <label className="selectgroup-item">
                    <input
                      type="radio"
                      name="icon-input"
                      value="1"
                      className="selectgroup-input select-sidebar"
                    />
                    <span
                      className="selectgroup-button selectgroup-button-icon"
                      data-toggle="tooltip"
                      data-original-title="Light Sidebar"
                    >
                      <i className="fas fa-sun"></i>
                    </span>
                  </label>
                  <label className="selectgroup-item">
                    <input
                      type="radio"
                      name="icon-input"
                      value="2"
                      className="selectgroup-input select-sidebar"
                      checked
                    />
                    <span
                      className="selectgroup-button selectgroup-button-icon"
                      data-toggle="tooltip"
                      data-original-title="Dark Sidebar"
                    >
                      <i className="fas fa-moon"></i>
                    </span>
                  </label>
                </div>
              </div>
              <div className="p-15 border-bottom">
                <h6 className="font-medium m-b-10">Color Theme</h6>
                <div className="theme-setting-options">
                  <ul className="choose-theme list-unstyled mb-0">
                    <li title="white" className="active">
                      <div className="white"></div>
                    </li>
                    <li title="cyan">
                      <div className="cyan"></div>
                    </li>
                    <li title="black">
                      <div className="black"></div>
                    </li>
                    <li title="purple">
                      <div className="purple"></div>
                    </li>
                    <li title="orange">
                      <div className="orange"></div>
                    </li>
                    <li title="green">
                      <div className="green"></div>
                    </li>
                    <li title="red">
                      <div className="red"></div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="p-15 border-bottom">
                <div className="theme-setting-options">
                  <label className="m-b-0">
                    <input
                      type="checkbox"
                      name="custom-switch-checkbox"
                      className="custom-switch-input"
                      id="mini_sidebar_setting"
                    />
                    <span className="custom-switch-indicator"></span>
                    <span className="control-label p-l-10">Mini Sidebar</span>
                  </label>
                </div>
              </div>
              <div className="p-15 border-bottom">
                <div className="theme-setting-options">
                  <label className="m-b-0">
                    <input
                      type="checkbox"
                      name="custom-switch-checkbox"
                      className="custom-switch-input"
                      id="sticky_header_setting"
                    />
                    <span className="custom-switch-indicator"></span>
                    <span className="control-label p-l-10">Sticky Header</span>
                  </label>
                </div>
              </div>
              <div className="mt-4 mb-4 p-3 align-center rt-sidebar-last-ele">
                <a
                  href="/#"
                  className="btn btn-icon icon-left btn-primary btn-restore-theme"
                >
                  <i className="fas fa-undo"></i> Restore Default
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
