import React from 'react'

export default function EONET() {
  return (
    
    <>
    <div>
    <h1 
      className="my-5 display-3 fw-bold ls-tight px-3" 
      style={
        {
          color: 'hsl(218, 81%, 75%)',
          textAlign:'center'
          }
          }>
            EONET

            </h1>
            </div>
    <div>
        <p>
            More and more NASA imagery is being made available via web services (WMS, WMTS, etc.) and a significant percentage 
            of it is being produced and published in near real time (NRT=within a few hours after acquisition). This ability means 
            that NASA imagery can be used more routinely to examine current natural events as they happen.
        </p>
        <p>
            Using client applications, such as NASA EOSDIS’ Worldview, users can browse the entire globe daily and look for natural 
            events as they occur. Storms are regularly spotted in the tropics, dust storms over deserts, forest fires in the summers. 
            These events are occurring constantly and NASA NRT imagery can represent them all using a variety of different data parameters. 
            However, the user’s experience is tailored, and therefore restricted, by the client application. What if there was an 
            API that provided a curated list of natural events and provided a way to link those events to event-related NRT image 
            layers? Enter EONET.

        </p>

        <p>
            The Earth Observatory Natural Event Tracker (EONET) is a prototype web service with the goal of:
        </p>

        <p>
            providing a curated source of continuously updated natural event metadata; providing a service that links those natural 
            events to thematically-related web service-enabled image sources (e.g., via WMS, WMTS, etc.). Please see our API 
            documentation to learn more about how to use the EONET web services.
        </p>

        <p>
            Development of EONET began in 2015 and has been supported by NASA’s Earth Observatory and Earth Science Data and 
            Information System (ESDIS) Project.
        </p>
    </div>
    </>
  )
}
