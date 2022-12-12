import React from 'react'

function Recovery() {
  const pSize ={
    fontSize: 24
  }
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
          <form action="submit">
            <div>
              <h3>Enter your name</h3>
              <input type="text" placeholder="name" />
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
              <input type="text" placeholder="Longitude" />
              <h3>Latitude</h3>
              <input type="text" placeholder="Latitude" />
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
                <textarea type="text" placeholder="description" />
              </div>
              <div>
                <p>Type of Recovery</p>
                <div style={pSize}>
                  <input type="radio" name="recoveryType" /> Stranded Person
                  <br />
                  <input type="radio" name="recoveryType" /> Vehicle off trail
                  <br />
                  <input type="radio" name="recoveryType" /> Vehicle broken down
                </div>
              </div>
              <br />
              <div>
                <h3>Condition of Vehicle</h3>

                <div style={pSize}>
                  <input type="radio" name="condition" /> Vehicle is drivable
                  <br />
                  <input type="radio" name="condition" /> Vehicle is not
                  drivable
                  <br />
                  <input type="radio" name="condition" /> Unknown
                </div>
              </div>
            </div>
            <div>
              <button type="submit">Submit Request</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Recovery
