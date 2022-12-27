import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Weather from "../components/weather";

function Recoveries({ isAdmin, activeUser, activeRecoveries, setActiveRecoveries }) {
  const [showActive, setShowActive] = useState(null);
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
      window.location.reload();
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
      <div>Recovery Library</div>
      <br />

      <div>
        <h2>View Current Recovery Requests</h2>
        <button
          onClick={function (event) {
            setShowActive(true);
          }}
        >
          Active Requests
        </button>
        {showActive ? (
          <div>
            <h2>Open Requests</h2>
            {activeRecoveries
              .filter((status) => status.approved == true)
              .map((filteredRecovery) => (
                <div>
                  <h6>{filteredRecovery.id}</h6>
                  <h3>{filteredRecovery.name}</h3>
                  <h4>{filteredRecovery.recovery_date}</h4>
                  <span>
                    <h5>{filteredRecovery.location_longitude},</h5>{" "}
                    <h5>{filteredRecovery.location_latitude}</h5>
                  </span>
                  {}
                  <h6>{filteredRecovery.description}</h6>
                  {/* <button onClick={(e) => expand(e)}>Details</button> */}
                  <h6>{filteredRecovery.status}</h6>
                  <h6>{filteredRecovery.assigned_volunteers}</h6>
                  {/* {getVolunteers(filteredRecovery.id)} */}
                  <div>
                    {/* <button
                      onClick={(event) =>
                        getWeather(
                          event,
                          (lat = filteredRecovery.location_latitude),
                          (lon = filteredRecovery.location_longitude)
                        )
                      }
                    >
                      See Current Weather
                    </button> */}
                  </div>

                  <br />
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
                        <div>
                          <button
                            onClick={() => {
                              deleteRecovery(filteredRecovery.id);
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                  <br />
                  <div>
                    <button onClick={() => handleMap(e)}>View on map</button>
                  </div>
                  <br />
                  {activeUser && (
                    <div>
                      <button
                        onClick={() =>
                          addVolunteer(activeUser.id, filteredRecovery.id)
                        }
                      >
                        Volunteer
                      </button>
                    </div>
                  )}
                  {/* <button onClick={setShowComplete(!showComplete)}>Complete</button> */}

                  {/* {showComplete ? (
            <div>
                <form>
                <textarea id='report'  placeholder="After action report" ></textarea>
                <button>Submit</button>
                <button onClick={setShowComplete(!showComplete)}>Cancel</button>
                </form>
            </div>
          ) : null}
                   */}

                  <br />
                </div>
              ))}
          </div>
        ) : null}

        <div>
          <h2>View Archived Recoveries</h2>
          <button onClick={() => setShowActive(false)}>
            Previous Recoveries
          </button>
          {showActive == false ? (
            <div>
              RECOVERY ARCHIVE
              {activeRecoveries
                .filter((status) => status.status !== "in-progress")
                .map((filteredRecovery) => (
                  <div>
                    <h3>{filteredRecovery.name}</h3>
                    <h4>{filteredRecovery.recovery_date}</h4>
                    <span>
                      <h5>{filteredRecovery.location_longitude},</h5>{" "}
                      <h5>{filteredRecovery.location_latitude}</h5>
                    </span>
                    <button onClick={() => expand(e)}>Details</button>
                    <h6>{filteredRecovery.status}</h6>

                    <br />
                  </div>
                ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Recoveries;
