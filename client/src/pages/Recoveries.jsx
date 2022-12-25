import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import Weather from '../components/weather';



function Recoveries({isAdmin, activeUser}) {
  const [showActive, setShowActive] = useState(null)
  const [activeRecoveries, setActiveRecoveries] = useState([]);
  const [pastRecoveries, setPastRecoveries] = useState([]);
  const [showComplete, setShowComplete] = useState(true)

    const filterActiveRecoveries = async() => {
      

        let response = await axios.get("recoveries/get_all/");
        console.log(response.data.all_recoveries)
        setActiveRecoveries(response.data.all_recoveries)
        }



  
    const getWeather = async (event, lat, lon) => {
      
      // event.preventDefault()
      try {
      
    const url = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=47.09788&lon=-122.204282&appid=f32a76e25378d19c31a14c805ec96939`
    );
      console.log(url.data)
    } catch (err) {
      console.error(err)
    }
    return (
      <div>
      <h4>Current Weather</h4>
      <h5></h5>
      <h5></h5>
      <h5></h5>
      </div>
    )
  }
    useEffect(()=>{
      getWeather()
      filterActiveRecoveries()
    }, [])

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
              .filter((status) => status.status == "in-progress")
              .map((filteredRecovery) => (
                <div>
                  <h6>{filteredRecovery.id - 1}</h6>
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
                  <div>
                    <button
                      onClick={(event) =>
                        getWeather(
                          event,
                          (lat = filteredRecovery.location_latitude),
                          (lon = filteredRecovery.location_longitude)
                        )
                      }
                    >
                      See Current Weather
                    </button>
                  </div>

                  <br />
                  <div>
                    {isAdmin && (
                      <div>
                        <button>Approve</button>
                      </div>
                    )}
                  </div>
                  <div>
                    <button onClick={() => handleMap(e)}>View on map</button>
                  </div>
                  <div></div>
                  {activeUser && (
                    <div>
                      <button>Volunteer</button>
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


export default Recoveries