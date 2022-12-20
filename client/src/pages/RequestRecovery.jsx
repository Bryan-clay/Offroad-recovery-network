import axios from 'axios';
import React from 'react';
import { useState, useEffect } from "react";


function Recovery({ activeUser, setActiveUser }) {
  const [typeRecovery, setTypeRecovery] = useState('Unknown')
  const [vehicleCondition, setVehicleCondition] = useState('Unknown')
  const pSize = {
    fontSize: 22,
  };
  currentUser()
   console.log(console.log(activeUser));

    const recoveryRequest = async(event) => {
    event.preventDefault()

    // let name = 'bryan';
    // let loc_lon = '-117.540';
    // let loc_lat = '23.546';
    // let description = 'Help me my vehicle has slid off the road on FS70';
    // let recovery_type = 'vehicle off trail';
    // let vehicle_condition = 'vehicle is drivable';

    //   console.log(name);
    let user = activeUser
    
    let name = document.getElementById("name").value
    let loc_lon = document.getElementById("loc_lon").value;
    let loc_lat = document.getElementById("loc_lat").value;
    let description = document.getElementById("description").value;
    let recovery_type = typeRecovery
    // let recovery_type = document.getElementsByClassName("recoveryType").value;
    let vehicle_condition = vehicleCondition
    // let vehicle_condition = document.getElementsByClassName("condition").value;
     console.log(recovery_type);
    let response = await axios.post("request/", {
      // 'user': user,
      'name': name,
      'loc_lon': loc_lon,
      'loc_lat': loc_lat,
      'description': description,
      'recovery_type': recovery_type,
      'vehicle_condition': vehicle_condition
    });
    console.log(response.data)
    if (response.data['recovery request'] == true){
      window.location.reload()
    }
  };

  return (
    <div>
      RECOVERY
      <div>
        <p style={pSize}>
          This section is to request a recovery from the Washington Trail
          Recovery Network community. REMINDER: The WTRN community is made up of
          volunteers who dedicate time and resources to keeping the community
          and the trails safe. Please use this option only after all other
          options are exhausted. The volunteers of Washington Trail Recovery
          Network are NOT responsible for any damages sustained during recovery
          efforts.
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
                <input type="checkbox" id="location" name="location" />

                <label style={pSize} for="location">
                  <p> I do not have GPS Coordinates</p>
                </label>
              </div>
              <h3>Longitude</h3>
              <input id="loc_lon" type="text" placeholder="Longitude" />
              <h3>Latitude</h3>
              <input id="loc_lat" type="text" placeholder="Latitude" />
              <div>
                <p style={pSize}>
                  If the GPS coordinates are not known, please provide a
                  deatailed description of location, such as:
                </p>
                <ul style={pSize}>
                  <li>Nearest town</li>
                  <li>Road name (if applicable)</li>
                  <li>Approximate direction from nearest town</li>
                  <li>Estimated distance from nearest town</li>
                </ul>
                <textarea
                  id="description"
                  type="text"
                  placeholder="description"
                />
              </div>
              <div>
                <p>Type of Recovery</p>
                <div style={pSize}>
                  <input
                    type="radio"
                    onClick={() => setTypeRecovery("Stranded Vehicle")}
                    name="recoveryType"
                  />{" "}
                  Stranded Person
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
                    onClick={() =>
                      setVehicleCondition(
                        "Unknown"
                      )
                    }
                    name="condition"
                  />{" "}
                  Unknown
                </div>
              </div>
            </div>
            <div>
              <button onClick={recoveryRequest}>Submit Request</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Recovery
