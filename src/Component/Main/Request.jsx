import React, { useEffect, useState } from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import { ref, get, update } from "firebase/database";
import { db } from "../../Config/firebase";
// import Swal from "sweetalert2";


const ItemsPerPage = 7;

function Request() {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showDangerAlert, setShowDangerAlert] = useState(false);
  const [dangerAlertMessage, setDangerAlertMessage] = useState("");

  // get data

  const [tableData, setTableData] = useState([]);

  const [data, setdata] = useState([]);

  useEffect(() => {
    let data1 = ref(db, "users/request");

    get(data1)
      .then((snap) => {
        console.log(snap.val());
        if (snap.val() != null) {
          console.log(Object.values(snap.val()));
          setdata(Object.values(snap.val()));
        }
        

        
      })
      .catch((e) => console.log(e.code));
  }, []);

  const [expandedRows, setExpandedRows] = useState({});

  const toggleShowMore = (id) => {
    setExpandedRows((prevExpandedRows) => ({
      ...prevExpandedRows,
      [id]: !prevExpandedRows[id],
    }));
  };

  const sortedTableData = tableData.sort((a, b) => b.id - a.id);

  //   Edit Data

  const handleEditClick = async (item) => {
    try {
      if (item.id !== "" && item.id !== null) {
        const PostingRef = ref(db, `Request/${item.id}`);
        const newPosting = {
          RequestType: true,
        };

        await update(PostingRef, newPosting);

        setShowSuccessAlert(true);
      } else {
        setDangerAlertMessage("Not Approved");
        setShowDangerAlert(true);
      }
    } catch (error) {
      console.error("Error updating document: ", error.message);
      // Handle the error, e.g., show a notification to the user
      setDangerAlertMessage("Error updating document: ", error.message);
      setShowDangerAlert(true);
    }
  };

  // Use useEffect to automatically hide the success alert after 3 seconds
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowSuccessAlert(false);
    }, 3000);

    // Cleanup the timeout when the component is unmounted
    return () => clearTimeout(timeoutId);
  }, [showSuccessAlert]);

  // Use useEffect to automatically hide the success alert after 3 seconds
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowDangerAlert(false);
    }, 3000);

    // Cleanup the timeout when the component is unmounted
    return () => clearTimeout(timeoutId);
  }, [showDangerAlert]);

  



  const handleRejectedClick = async (item)=>{
    try {
      if (item.id !== "" && item.id !== null) {
        const PostingRef = ref(db, `Request/${item.id}`);
        const newPosting = {
          RequestType: false,
        };

        await update(PostingRef, newPosting);

        setShowSuccessAlert(true);
      } else {
        setDangerAlertMessage("Not Approved");
        setShowDangerAlert(true);
      }
    } catch (error) {
      console.error("Error updating document: ", error.message);
      // Handle the error, e.g., show a notification to the user
      setDangerAlertMessage("Error updating document: ", error.message);
      setShowDangerAlert(true);
    }
  }



//   Pagination

const [currentPage, setCurrentPage] = useState(1);

const totalItems = sortedTableData.length;
const totalPages = Math.ceil(totalItems / ItemsPerPage);

const startIndex = (currentPage - 1) * ItemsPerPage;
const endIndex = startIndex + ItemsPerPage;

const visibleItems = sortedTableData.slice(startIndex, endIndex);
 
  return (
    <>
      <Nav />
      <div className="main-content">
        <div className="card">
          <div className="card-header">
            <div className="container">
              <div className="row" style={{ alignItems: "center" }}>
                <div className="col-md-6 col-sm-6 col-lg-6">
                  <h1>Request</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body p-0">
            <div className="container">
              <div class="table-responsive" style={{ paddingTop: "60px" }}>
                <table class="table table-striped">
                  <thead style={{ background: "green" }}>
                    <tr>
                      
                      <th
                        style={{
                          color: "white",
                          border: "1px solid white",
                          width: "100px",
                        }}
                      >
                        Name
                      </th>

                      <th
                        style={{
                          color: "white",
                          border: "1px solid white",
                          width: "100px",
                        }}
                      >
                        Email
                      </th>
                     
                      <th
                        style={{
                          color: "white",
                          border: "1px solid white",
                          width: "100px",
                        }}
                      >
                        CNIC
                      </th>
                      <th
                        style={{
                          color: "white",
                          border: "1px solid white",
                          width: "50px",
                        }}
                      >
                        Contact No
                      </th>
                      <th
                        style={{
                          color: "white",
                          border: "1px solid white",
                          width: "50px",
                        }}
                      >
                        Option
                      </th>
                      <th
                        style={{
                          color: "white",
                          border: "1px solid white",
                          width: "100px",
                        }}
                      >
                        Additional Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>

                      {data.map((item) => (
                        !item.RequestType && (
                          <tr>
                              
                            <td style={{ border: "1px solid green" }}>
                              {item.username}
                            </td>

                            <td style={{ border: "1px solid green" }}>
                              {item.email }
                            </td> 

                              <td style={{ border: "1px solid green" }}>
                              {item.cnic}
                            </td>

                            <td
                              style={{
                                border: "1px solid green",
                              }}
                            >
                              {item.contact}
                            </td>

                            
                            <td style={{ border: "1px solid green" }}>
                              {item.selectedOption
}
                            </td>


                            <td style={{ border: "1px solid green" }}>
                              {item.details}
                            </td>
                              



                           
                           

                            {/* <td style={{ border: "1px solid green" }}>
                              <div style={{ display: "flex" }}>
                                <button
                                  className="btn btn-primary"
                                  data-toggle="modal"
                                  data-target="#basicModal"
                                  onClick={() => handleEditClick(item)}
                                >
                                  Approved
                                </button>
                                <button
                                  style={{ marginLeft: "10px" }}
                                  className="btn btn-danger"
                                  onClick={() => handleRejectedClick(item)}
                                >
                                  Rejected
                                </button>
                              </div>
                            </td> */}
                          </tr>
                        )
                        ))}
                
                  </tbody>
                  
                </table>
              </div>


              <nav aria-label="Page navigation example" style={{ float: "right" }}>
        <ul class="pagination">
          <li class={`page-item ${currentPage === 1 ? '' : ''}`}>
            <a class="page-link" href="#" onClick={() => setCurrentPage(currentPage - 1)}>
              Accept
            </a>
          </li>
          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index} class={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <a class="page-link" href="#" onClick={() => setCurrentPage(index + 1)}>
                {index + 1}
              </a>
            </li>
          ))}
          <li class={`page-item ${currentPage === totalPages ? '' : ''}`}>
            <a class="page-link" href="#" onClick={() => setCurrentPage(currentPage + 1)}>
              Reject
            </a>
          </li>
        </ul>
      </nav>
            </div>
          </div>
        </div>
      </div>

     
      {showSuccessAlert && (
        <div
          className="alert alert-success alert-dismissible show fade"
          style={{
            position: "fixed",
            top: "10px",
            right: "10px",
            zIndex: 9999,
          }}
        >
          <div className="alert-body">
            <button
              className="close"
              onClick={() => setShowSuccessAlert(false)}
            >
              <span>×</span>
            </button>
            <span>Approved the Request</span>
          </div>
        </div>
      )}

      {/* Danger Alert */}
      {showDangerAlert && (
        <div
          className="alert alert-danger alert-dismissible show fade"
          style={{
            position: "fixed",
            top: "10px",
            right: "10px",
            zIndex: 9999,
          }}
        >
          <div className="alert-body">
            <button className="close" onClick={() => setShowDangerAlert(false)}>
              <span>×</span>
            </button>
            <span>{dangerAlertMessage}</span>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default Request;

