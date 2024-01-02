import React, { useState, useEffect } from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import { ref, get } from "firebase/database";
import { db } from "../../Config/firebase";
// import { remove } from 'firebase/database';

const ItemsPerPage = 7;

function Donation() {
  // get data

  const [tableData, setTableData] = useState([]);

  const [data, setdata] = useState([]);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let data1 = ref(db, "users/donate");

    get(data1)
      .then((snap) => {
        console.log(snap.val());
        if (snap.val() != null) {
          // console.log(Object.values(snap.val()));
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
                  <h1>Donation</h1>
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
                          width: "200px",
                        }}
                      >
                        Email
                      </th>
                      <th
                        style={{
                          color: "white",
                          border: "1px solid white",
                          width: "200px",
                        }}
                      >
                        Contact
                      </th>
                      <th
                        style={{
                          color: "white",
                          border: "1px solid white",
                          width: "200px",
                        }}
                      >
                        Money
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map(
                      (item) =>
                        !item.RequestType && (
                          <tr>
                            <td style={{ border: "1px solid green" }}>
                              {item.username}
                            </td>
                            <td style={{ border: "1px solid green" }}>
                              {item.email }
                             
                               
                                  
                            </td>

                            <td
                              style={{
                                border: "1px solid green",
                                fontWeight: "700",
                              }}
                            >
                              {item.contact}
                            </td>
                            <td style={{ border: "1px solid green" }}>
                              {item.money}
                            </td>
                          </tr>
                        )
                    )}
                  </tbody>
                </table>
              </div>

              <nav
                aria-label="Page navigation example"
                style={{ float: "right" }}
              >
                <ul class="pagination">
                  <li
                    class={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                  >
                    <a
                      class="page-link"
                      href="#"
                      onClick={() => setCurrentPage(currentPage - 1)}
                    >
                      Previous
                    </a>
                  </li>
                  {Array.from({ length: totalPages }, (_, index) => (
                    <li
                      key={index}
                      class={`page-item ${
                        currentPage === index + 1 ? "active" : ""
                      }`}
                    >
                      <a
                        class="page-link"
                        href="#"
                        onClick={() => setCurrentPage(index + 1)}
                      >
                        {index + 1}
                      </a>
                    </li>
                  ))}
                  <li
                    class={`page-item ${
                      currentPage === totalPages ? "disabled" : ""
                    }`}
                  >
                    <a
                      class="page-link"
                      href="#"
                      onClick={() => setCurrentPage(currentPage + 1)}
                    >
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Donation;
