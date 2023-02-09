import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import { useEffect } from "react";
import Weather from "../components/weather";
import { Button, Card, ListGroup, Col, Row, Container } from "react-bootstrap";


function Recoveries({ isAdmin, activeUser, activeRecoveries, setActiveRecoveries }) {
  const [showActive, setShowActive] = useState(null);
  const [showArchived, setShowArchived] = useState(null);
  const [pastRecoveries, setPastRecoveries] = useState([]);
  const [showComplete, setShowComplete] = useState(true);
  const [volunteers, setVolunteers] = useState([])

  const filterActiveRecoveries = async () => {
    let response = await axios.get("recoveries/get_all/");
    console.log(response.data.all_recoveries);
    setActiveRecoveries(response.data.all_recoveries);
  };

  // const getWeather = async (event, lat, lon) => {
  //   // event.preventDefault()
  //   try {
  //     const url = await axios.get(
  //       `http://api.openweathermap.org/data/2.5/weather?lat=47.09788&lon=-122.204282&appid=f32a76e25378d19c31a14c805ec96939`
  //     );
  //     console.log(url.data);
  //   } catch (err) {
  //     console.error(err);
  //   }
  //   return (
  //     <div>
  //       <h4>Current Weather</h4>
  //       <h5></h5>
  //       <h5></h5>
  //       <h5></h5>
  //     </div>
  //   );
  // };

  // const approveRecovery = async (id) => {
  //   console.log(id);
  //   const response = await axios.put(`approve_recovery/${id}/`);
  //   console.log(response);
  //   if (response["approved"]) {
  //     window.location.reload();
  //   }
  // };


// "user/signup/",
//   {
//     email: email,
//     password: password,
//   };




  const addVolunteer = async(usr_id, recov_id) => {
    console.log(recov_id)
    console.log(usr_id)
    const response = await axios.put(`volunteer/`, {
      usr_id: usr_id,
      recov_id: recov_id,
    });
    console.log(response)
  }

  const deleteRecovery = async (id) => {
    const response = await axios.delete(`approve_recovery/${id}/`);
    if (response["delete"]) {
      window.location.href='/';
    }
  };

  // const getVolunteers = async(id) => {
  //   const response = await axios.get('get_assigned_volunteers', {
  //     id: id
  //   })
  //   console.log(response.data)
  //   // setVolunteers(response.data)
  // }

  useEffect(() => {
    // getWeather();
    filterActiveRecoveries();
  }, []);

  // console.log(recoveries)
  return (
    <div>
      <div>
        <h2>Recovery Library</h2>
      </div>
      <br />

      <div>
        <h3>View Current Recovery Requests</h3>
        <button
          className="mainButton"
          onClick={function (event) {
            setShowActive(!showActive);
          }}
        >
          Active Requests
        </button>
        {showActive ? (
          <Container>
            <div>
              <h4>Open Requests</h4>
              {activeRecoveries
                .filter(
                  (status) =>
                    status.approved == true && status.status == "in-progress"
                )
                .map((filteredRecovery) => (
                  <div className="recovery">
                    <Card>
                      <Card.Title>{filteredRecovery.name}</Card.Title>
                      <Card.Subtitle>
                        {filteredRecovery.recovery_date}
                      </Card.Subtitle>
                      {/* <h4>{filteredRecovery.recovery_date}</h4> */}
                      <ListGroup>
                        <ListGroup.Item>
                          Recovery ID: {filteredRecovery.id}
                        </ListGroup.Item>
                        <span>
                          <ListGroup.Item>
                            {filteredRecovery.location_longitude},
                          </ListGroup.Item>
                          <ListGroup.Item>
                            {filteredRecovery.location_latitude}
                          </ListGroup.Item>
                        </span>
                        {}
                        <Card.Text>{filteredRecovery.description}</Card.Text>
                        {/* <button onClick={(e) => expand(e)}>Details</button> */}
                        <ListGroup.Item>
                          {filteredRecovery.status}
                        </ListGroup.Item>
                        <h6>{filteredRecovery.assigned_volunteers}</h6>
                        {/* {getVolunteers(filteredRecovery.id)} */}
                      </ListGroup>
                      <div className="button_group">
                        <Row>
                          <Col>
                            <Button
                              className="mainButton"
                              onClick={(event) =>
                                getWeather(
                                  event,
                                  (lat = filteredRecovery.location_latitude),
                                  (lon = filteredRecovery.location_longitude)
                                )
                              }
                            >
                              See Current Weather
                            </Button>
                          </Col>
                          <div>
                            {isAdmin && (
                              <div>
                                {/* <div>
                          <button
                            onClick={() => {
                              approveRecovery(filteredRecovery.id);
                            }}
                          >
                            Approve
                          </button>
                        </div> */}
                                <Col>
                                  <Button
                                    className="mainButton"
                                    onClick={() => {
                                      deleteRecovery(filteredRecovery.id);
                                    }}
                                  >
                                    Delete
                                  </Button>
                                </Col>
                              </div>
                            )}
                          </div>
                          {/* <br /> */}
                          <div>
                            {/* <button onClick={() => handleMap(e)}>View on map</button> */}
                          </div>

                          {activeUser && (
                            <div>
                              <Col>
                                <Button
                                  className="mainButton"
                                  onClick={() =>
                                    addVolunteer(
                                      activeUser.id,
                                      filteredRecovery.id
                                    )
                                  }
                                >
                                  Volunteer
                                </Button>
                              </Col>
                              <Col>
                                <Button className="mainButton">Complete</Button>
                              </Col>
                            </div>
                          )}
                        </Row>
                      </div>

                      <br />
                    </Card>
                  </div>
                ))}
            </div>
          </Container>
        ) : null}

        <div>
          <h4>View Archived Recoveries</h4>
          <button
            className="mainButton"
            onClick={() => setShowArchived(!showArchived)}
          >
            Previous Recoveries
          </button>
          {showArchived ? (
            <Container>
              <div>
                RECOVERY ARCHIVE
                {activeRecoveries
                  .filter((status) => status.status !== "in-progress")
                  .map((filteredRecovery) => (
                    <div>
                      <Card>
                        <Card.Title>{filteredRecovery.name}</Card.Title>
                        <h4>{filteredRecovery.recovery_date}</h4>
                        <span>
                          <h5>{filteredRecovery.location_longitude},</h5>{" "}
                          <h5>{filteredRecovery.location_latitude}</h5>
                        </span>
                        <h6>{filteredRecovery.description}</h6>
                        <h6>{filteredRecovery.after_action_report}</h6>
                        {/* <button onClick={() => expand(e)}>Details</button> */}
                        <h6>{filteredRecovery.status}</h6>

                        <br />
                      </Card>
                    </div>
                  ))}
              </div>
            </Container>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Recoveries;
















                   {
                     /* <button onClick={setShowComplete(!showComplete)}>Complete</button> */
                   }

                   {
                     /* {showComplete ? (
            <div>
                <form>
                <textarea id='report'  placeholder="After action report" ></textarea>
                <button>Submit</button>
                <button onClick={setShowComplete(!showComplete)}>Cancel</button>
                </form>
            </div>
          ) : null}
                   */
                   }