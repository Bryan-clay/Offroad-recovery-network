# Off Road Recovery App
An offread revocery app


## OVERVIEW

- Here in Washington there is a Facebook Page for Offroad Enthusiasts called WORN (Washington Offroad Recovery Network). The network is designed to be used as an outlet for individuals that are broken down or stuck in offroading situations. 
- The basic premise is:
    - An stranded individual notifys the admin of their location and the status of their vehicle
        - The adminstrator will then take that information and notify recovery volunteers located in the same area as the stranded motorist and ask for volunteers
        - Once the correct number of volunteers are dispatched, the admin will wait for notication of a successful recovery or a call back for more assistance.
        - If the recovery is successful, the admin will archive the information on the recovery and post an announcement of the success.
        - If more assistance is needed, the admin will reach out for more volunteers (or government agencies, if necessary) to assist with the recovery.
        
        
 - I intend to make an application that can handle / streamline the process for recovering stranded individuals with the following features:
 
    ## VOLUNTEER LOGIN
        - A volunteer login section with information about the following:
            - "Zone", or relative area of responsibility that the user is able to assist with recoveries.
            - An "on duty" icon on the login page that shows the volunteer is currently able to assist with incoming recoveries.
            - An option to make a schedule to set regular hours for a volunteer to be "on duty"
            - Admin notification option
                - Successful recovery
                - More assistance needed
                    - Text input available for a description
    ## ADMIN LOGIN 
        In addition to the volunteer rights:
            - Admin has rights to receive stranded vehicle information. 
            - rights to notify volunteers on duty based on select "zones" within the state.
            
     ## STRANDED VEHICLE PAGE
        - asks for the following information:
            - Location of the vehicle/individual. 
                -GPS Preferred, but detailed description is okay)
                - Location will determine which "zone" will be activated.
            - Urgency of call
                - Standard (recover when available)
                - Urgent (needs to be recovered asap (before inclement weather or other non life-threatening event))
                - Immediate injury to occupant reported, requires immediate recovery.
                    - Depending on severity, local authorities might be notified
            - Type of rescue needed
                - Stranded persons
                - Vehicle off-trail
                - Vehicle broken down
            - Condition of the vehicle (check all that apply)
                - needs winch recovery
                - Able to be flat-towed out
                - needs to be trailered out
            - Photos (if available) of the situation
                - Photo of the current condition of the vehicle
                
          - "Notify" button for the admin to notify local volunteers once the information is reviewed 
          - "Recovery Complete" button once a recovery is 
          
          - Database to store past recovery information
          
          - API's used
            - Open streets map api - for gps locating individuals and 'zoning' purposes
            - WeatherBit Weather api - for current weather condition at recovery site
            
        
