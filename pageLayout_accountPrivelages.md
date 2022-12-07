## User Page

- As a user I should be able to create an account
- Accounts should be created by users and individuals requesting a recovery
- Each volunteer should be able to set their status as active (waiting for a recovery call)
- Each volunteer should be able to set a schedule (hours available for recoveries)
- Each user should be able to report an incident to the admins
- Each user should be able to list qualifications/ capibilities
  - Ex:
    - Jeep Wrangler Rubicon on 37" tires equipped with winch
    - Tow straps, recovery boards, shackles, trailering capibilities
    - Search and Rescue (SAR) experience
    - Communications:
      - GMRS radio
      - HAM radio (with qualification)
- Each user should be able to set their location
- Each user should be able to delete their account

## Admin Page

- Each admin should be able to create an admin account
- Each admin should be able to receive incoming recovery requests
- Each admin should be able to send out a push request to all available volunteers in the same zone (as the request) for a recovery
- Each admin should be able to remove users
- Each admin should be able to mark a recovery as complete or request more assistance

## Home Page

- Login
- Sign-up
- Teasers of previous recoveries (maybe)
- Request recovery (redirects to sign up if user does not have an account)
- Photos or other decorators (slideshow)
- Interactive API map with pins on active recoveries and zones marked off
- banner of recoveries in progress

## Recovery Request Page

- Each recovery request should contain the following information:
  - Name of requestor
  - Location of vehicle
    - GPS Strongly Preferred
    - Description is fine with the following information:
      - Nearest incorporated town or city
      - Approximate direction from that town or city
      - Approximate mileage from the town or city
      - Road name (if applicable)
        - NOTE:
          - If a recovery is being requested on private land without the permission of the land owner. The user must seek owner approval or contact local authorieies prior to a recovery team being sent out (in the event of tresspassing).
    - Type of recovery
      - Stranded person
      - Vehicle off trail
      - vehicle broken down 
    - Condition of the vehicle.
      - Is the vehicle drivable after recovery
        - If vehicle is not in a drivable condition:
          - Can the vehicle be flat-towed
          - Will the vehicle need to be trailored
      - Will a winch be needed for the recovery
    - Photos (if available) of the situation


## Archive Page
- Archived recovery details
  - Sorted by:
    - zone
    - date