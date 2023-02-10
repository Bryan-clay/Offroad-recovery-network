import axios from 'axios';
import React from 'react';
import MapBox from '../components/mapBox';
import { useState, useEffect } from "react";
import { Button, 
  Form, Container, Row, 
  Col, Card, ListGroup, 
  ButtonGroup, ToggleButton 
} from "react-bootstrap";
import "../App.css";
// import mapboxgl from 'mapbox-gl';


function RequestRecovery({activeUser}) {
  const [typeRecovery, setTypeRecovery] = useState('Unknown')
  const [vehicleCondition, setVehicleCondition] = useState('Condition Unknown')
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
      console.log(recovery_type)
      // let recovery_type = document.getElementsByClassName("recoveryType").value;
      let vehicle_condition = vehicleCondition;
      console.log(vehicle_condition)
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


  const recoveryTypeRadio = [
    { name: "Stranded Vehicle/Person", value: "1" },
    { name: "Vehicle off trail", value: "2" },
    { name: "Vehicle broken down", value: "3" },
  ];

  const vehicleConditionRadio = [
    { name: "Vehicle can be driven after extraction", value: "1" },
    { name: "Vehicle can NOT be driven after extraction", value: "2" },
    { name: "Condition Unknown", value: "3" },
  ];

  return (
    <div>
      <Container>
        {activeUser ? (
          <div>
            <h2>RECOVERY</h2>
            <div>
              <Form onSubmit={recoveryRequest}>
                <p>
                  This section is to request a recovery from the Washington
                  Trail Recovery Network community. REMINDER: The WTRN community
                  is made up of volunteers who dedicate time and resources to
                  keeping the community and the trails safe. Please use this
                  option only after all other options are exhausted. The
                  volunteers of Washington Trail Recovery Network are NOT
                  responsible for any damages sustained during recovery efforts.
                </p>

                <div>
                  <Form.Label>Enter your name</Form.Label>
                  <Form.Control
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <Form.Label>Location of vehicle</Form.Label>
                  <div>
                    <Form.Check
                      onClick={function (event) {
                        setShowMap(!showMap);
                      }}
                      // onClick={() => setShowMap(!showMap)}
                      type="checkbox"
                      id="location"
                      name="location"
                      label="I do not have GPS Coordinates"
                    />

                    {showMap ? (
                      <div style={{ justifyContent: "center" }}>
                        <p>
                          Please click on your location in the map or leave a
                          detailed description of your location.
                        </p>

                        <MapBox
                          style={{
                            width: 400,
                            height: 200,
                            borderRadius: "15px",
                            border: "3px solid black",
                            justifyContent: "center",
                          }}
                          marker={marker}
                          setMarker={setMarker}
                        />
                      </div>
                    ) : null}
                  </div>
                  {!showMap ? (
                    <div>
                      <Form.Label>Longitude</Form.Label>
                      <Form.Control
                        className="coordinates"
                        id="loc_lon"
                        type="text"
                        placeholder="Longitude"
                      />
                      <Form.Label>Latitude</Form.Label>
                      <Form.Control
                        className="coordinates"
                        id="loc_lat"
                        type="text"
                        placeholder="Latitude"
                      />
                    </div>
                  ) : null}
                  <br />
                  <div>
                    <p>
                      If the GPS coordinates are not known, please provide a
                      deatailed description of location, such as:
                    </p>
                    <ListGroup>
                      <ListGroup.Item>Nearest town</ListGroup.Item>
                      <ListGroup.Item>Road name (if applicable)</ListGroup.Item>
                      <ListGroup.Item>
                        Approximate direction from nearest town
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Estimated distance from nearest town
                      </ListGroup.Item>
                    </ListGroup>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      // style={{ height: "125px", width: "400px" }}
                      onChange={handleChange}
                      id="description"
                      type="text"
                      placeholder="description"
                    />
                  </div>
                  <div>
                    <Form.Label>Type of Recovery</Form.Label>
                    <div>
                      <ButtonGroup>
                        {recoveryTypeRadio.map((typeRadio, idx) => (
                          <ToggleButton
                            className="radioButton"
                            key={idx}
                            id={`type-${idx}`}
                            type="radio"
                            name="typeRadio"
                            variant={"outline-danger"}
                            value={typeRadio.name}
                            checked={typeRecovery === typeRadio.name}
                            onChange={(e) => setTypeRecovery(e.target.value)}
                          >
                            {typeRadio.name}
                          </ToggleButton>
                        ))}
                      </ButtonGroup>
                    </div>
                  </div>
                  <br />
                  <div>
                    <div>
                      <Form.Label>Condition of Vehicle</Form.Label>
                      <div>
                        <ButtonGroup>
                          {vehicleConditionRadio.map((radio) => (
                            <ToggleButton
                              className="radioButton"
                              id={`type-${radio.name}`}
                              type="radio"
                              variant={"outline-danger"}
                              name="radio"
                              value={radio.name}
                              checked={vehicleCondition === radio.name}
                              onChange={(e) =>
                                setVehicleCondition(e.currentTarget.value)
                              }
                            >
                              {radio.name}
                            </ToggleButton>
                          ))}
                        </ButtonGroup>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <button className="mainButton" onClick={recoveryRequest}>
                    Submit Request
                  </button>
                </div>
              </Form>
            </div>
          </div>
        ) : (
          <div>
            <p>Please create an account or login to request a recovery</p>
          </div>
        )}
      </Container>
    </div>
  );
}

export default RequestRecovery
