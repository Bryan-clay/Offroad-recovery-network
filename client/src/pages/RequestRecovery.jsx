import axios from 'axios';
import React from 'react';
import MapBox from '../components/mapBox';
import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
// import mapboxgl from 'mapbox-gl';


function RequestRecovery({activeUser}) {
  const [typeRecovery, setTypeRecovery] = useState('Unknown')
  const [vehicleCondition, setVehicleCondition] = useState('Unknown')
  const [showMap, setShowMap] = useState(false);
  const [marker, setMarker] = useState(null);

  console.log('ACTIVE USER')
  console.log(activeUser)
  // const [clickedLocation, setClickedLocation] = useState(null)
  const pSize = {
    fontSize: 22,
  };



      function handleChange(event) {
        const height = event.target.scrollHeight;
        const rows = event.target.rows;
        const rowHeight = 15;
        const trows = Math.ceil(height / rowHeight) - 1;
        console.log(height, rows, trows);
      } 


    const recoveryRequest = async(event) => {
      event.preventDefault();
      console.log('MARKER')
      console.log(marker)
      console.log(showMap)
      let loc_lon = null;
      let loc_lat = null;
      if (!showMap){
        loc_lon = document.getElementById("loc_lon").value;
        console.log(loc_lon)
        loc_lat = document.getElementById("loc_lat").value;
        console.log('INPUT')
        console.log(loc_lon)
        console.log(loc_lat)
      }
      else {
        loc_lon = marker.lng;
        loc_lat = marker.lat;
        console.log('MARKER')
        console.log(loc_lon);
        console.log(loc_lat);
      }

      // let name = 'bryan';
      // let loc_lon = '-117.540';
      // let loc_lat = '23.546';
      // let description = 'Help me my vehicle has slid off the road on FS70';
      // let recovery_type = 'vehicle off trail';
      // let vehicle_condition = 'vehicle is drivable';

      //   console.log(name);
      console.log(marker);
      let user = activeUser;

      let name = document.getElementById("name").value;

      // let loc_lon = document.getElementById("loc_lon").value;
      // let loc_lat = document.getElementById("loc_lat").value;
      let description = document.getElementById("description").value;
      let recovery_type = typeRecovery;
      // let recovery_type = document.getElementsByClassName("recoveryType").value;
      let vehicle_condition = vehicleCondition;
      // let vehicle_condition = document.getElementsByClassName("condition").value;
      console.log(recovery_type);
      
      try {
      let response = await axios.post("request/", {
        // 'user': user,
        name: name,
        loc_lon: loc_lon,
        loc_lat: loc_lat,
        description: description,
        recovery_type: recovery_type,
        vehicle_condition: vehicle_condition,
      });
      console.log(response.data);
      if (response.data["recovery request"] == true) {
        alert('Request submitted')
        window.location.href ='/';
      }}
      catch {
        alert('Request submission failed')
      }
    };






  return (
    <div>
      {activeUser ? (
        <div>
          RECOVERY
          <div>
            <p style={pSize}>
              This section is to request a recovery from the Washington Trail
              Recovery Network community. REMINDER: The WTRN community is made
              up of volunteers who dedicate time and resources to keeping the
              community and the trails safe. Please use this option only after
              all other options are exhausted. The volunteers of Washington
              Trail Recovery Network are NOT responsible for any damages
              sustained during recovery efforts.
            </p>
            <div>
              <form onSubmit={recoveryRequest}>
                <div>
                  <h3>Enter your name</h3>
                  <input id="name" type="text" placeholder="name" />
                </div>
                <div>
                  <h3>Location of vehicle</h3>
                  <div>
                    <input
                      onClick={function (event) {
                        setShowMap(!showMap);
                      }}
                      // onClick={() => setShowMap(!showMap)}
                      type="checkbox"
                      id="location"
                      name="location"
                    />
                    <label style={pSize} for="location">
                      <p> I do not have GPS Coordinates</p>
                    </label>
                    {showMap ? (
                      <div>
                        <p style={pSize}>
                          Please click on your location in the map or leave a
                          detailed description of your location.
                        </p>
                        <div>
                          <MapBox 
                          marker={marker}
                          setMarker={setMarker}
                          />
                        </div>
                      </div>
                    ) : null}
                  </div>
                  {!showMap ? (
                    <div>
                      <h3>Longitude</h3>
                      <input
                        className="coordinates"
                        id="loc_lon"
                        type="text"
                        placeholder="Longitude"
                      />
                      <h3>Latitude</h3>
                      <input
                        className="coordinates"
                        id="loc_lat"
                        type="text"
                        placeholder="Latitude"
                      />
                    </div>
                  ) : null}
                  <br/>
                  <div>
                    <h5>
                      If the GPS coordinates are not known, please provide a
                      deatailed description of location, such as:
                    </h5>
                    <ul style={{ pSize, listStyleType: "none" }}>
                      <li>Nearest town</li>
                      <li>Road name (if applicable)</li>
                      <li>Approximate direction from nearest town</li>
                      <li>Estimated distance from nearest town</li>
                    </ul>
                    <textarea
                      style={{ height: "125px", width: "400px" }}
                      onChange={handleChange}
                      id="description"
                      type="text"
                      placeholder="description"
                    />
                  </div>
                  <div>
                    <h3>Type of Recovery</h3>
                    <div style={pSize}>
                      <input
                        type="radio"
                        onClick={() =>
                          setTypeRecovery("Stranded Vehicle/Person")
                        }
                        name="recoveryType"
                      />{" "}
                      Stranded Vehicle/Person
                      <br />
                      <input
                        type="radio"
                        onClick={() => setTypeRecovery("Vehicle off trail")}
                        name="recoveryType"
                      />{" "}
                      Vehicle off trail
                      <br />
                      <input
                        type="radio"
                        onClick={() => setTypeRecovery("Vehicle broken down")}
                        name="recoveryType"
                      />{" "}
                      Vehicle broken down
                    </div>
                  </div>
                  <br />
                  <div>
                    <h3>Condition of Vehicle</h3>

                    <div style={pSize}>
                      <input
                        type="radio"
                        onClick={() =>
                          setVehicleCondition(
                            "Vehicle can be driven after extraction"
                          )
                        }
                        name="condition"
                      />{" "}
                      Vehicle can be driven after extraction
                      <br />
                      <input
                        type="radio"
                        onClick={() =>
                          setVehicleCondition(
                            "Vehicle can NOT be driven after extraction"
                          )
                        }
                        name="condition"
                      />{" "}
                      Vehicle can NOT be driven after extraction
                      <br />
                      <input
                        type="radio"
                        onClick={() => setVehicleCondition("Unknown")}
                        name="condition"
                      />{" "}
                      Unknown
                    </div>
                  </div>
                </div>
                <div>
                  <Button onClick={recoveryRequest}>Submit Request</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <p>Please create an account or login to request a recovery</p>
        </div>
      )}
    </div>
  );
}

export default RequestRecovery
