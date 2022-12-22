import React, { useState } from 'react'
import axios from 'axios'


function Recoveries() {
  const [showActive, setShowActive] = useState(null)

    const filterActiveRecoveries = async() => {
        let response = await axios.get("recovery/");
    }


  return (
    <div>
      <div>Recovery Library</div>

      <div>
        <p>View Current Recovery Requests</p>
        <button onClick={() => setShowActive(true)}>
          Active Requests
        </button>
        {showActive ? <div>OPEN REQUESTS</div> : null}

        <div>
          <p>View Archived Recoveries</p>
          <button onClick={() => setShowActive(false)}>
            Previous Recoveries
          </button>
          {showActive == false ? <div>RECOVERY ARCHIVE</div> : null}
        </div>
      </div>
    </div>
  );
}

export default Recoveries