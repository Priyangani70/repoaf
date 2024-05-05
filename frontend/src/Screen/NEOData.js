import React, { useState } from 'react';
import axios from 'axios';

function NEOData() {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [neoData, setNeoData] = useState([]);
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      if (name === 'startDate') {
        setStartDate(value);
      } else if (name === 'endDate') {
        setEndDate(value);
      }
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      fetchData();
    };
  
    const fetchData = () => {
      const apiKey = 'DEMO_KEY';
      const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${apiKey}`;
  
      axios.get(url)
        .then((response) => {
          const data = response.data;
          const neoObj = data.near_earth_objects;
          const dates = Object.keys(neoObj);
          const neoData = dates.map((date) => neoObj[date]);
          setNeoData(neoData);
        })
        .catch((error) => {
          console.error('There was a problem with the fetch operation:', error);
        });
    };
  
    return (

        
      <div>
        <div>
            <h1 
            className="my-5 display-3 fw-bold ls-tight px-3" 
            style={
              {
                color: 'hsl(218, 81%, 75%)',
                textAlign:'center'
              }
              }>
                The Near Earth Object (NEO)
            </h1>

            <p>
                NeoWs (Near Earth Object Web Service) is a RESTful web service for near earth Asteroid information. With NeoWs 
                a user can: search for Asteroids based on their closest approach date to Earth, lookup a specific Asteroid with 
                its NASA JPL small body id, as well as browse the overall data-set.
            </p>
            <p>
                The Near Earth Object (NEO) feed provided by NASA offers a wealth of information about asteroids and 
                comets that come within close proximity to Earth's orbit. Here are some key things you can do using the NEO feed:
            </p>
           
            <h4>Track Near Earth Objects</h4>
            <p>
                The NEO feed provides data on asteroids and comets that pass close to Earth. You can use this data to track the
                trajectories of these objects and monitor their movements over time.
            </p>


            <h4>Monitor Potentially Hazardous Objects</h4>
            <p>
                NASA categorizes some NEOs as Potentially Hazardous Objects (PHOs) based on their size, speed, and proximity 
                to Earth. Monitoring these objects is crucial for planetary defense efforts and assessing potential impact risks.

            </p>
    
            <h4>Study Object Characteristics</h4>
            <p>
                The NEO feed includes information about the size, velocity, orbital parameters, and physical characteristics 
                of each detected object. Researchers can analyze this data to better understand the nature of NEOs and their 
                potential impact effects.

            </p>
            <h4>Planetary Defense</h4>
            <p>
                Understanding the NEO population and their characteristics is essential for developing strategies to mitigate 
                potential impact threats. Scientists can use the NEO feed to identify objects that pose a risk and devise methods 
                for deflecting or mitigating their impact.

            </p>
            <h4>Educational Outreach </h4>
            <p>
                The NEO feed provides an opportunity for educational outreach and public engagement. By visualizing the data and 
                highlighting interesting objects or events, educators can raise awareness about planetary defense, space exploration, 
                and the dynamics of our solar system.

            </p>
            
            <hr/>
            
            <p>
                Overall, the NEO feed serves as a valuable resource for scientific research, space exploration, and planetary defense 
                efforts, offering insights into the dynamics of near Earth objects and their potential impact on our planet.
            </p>    

        </div>
        <form onSubmit={handleSubmit}>
          <label>
            Start Date:
            <input type="date" name="startDate" value={startDate} onChange={handleChange} />
          </label>
          <label>
            End Date:
            <input type="date" name="endDate" value={endDate} onChange={handleChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
        <div id="tableHeader">
          {neoData.map((neoArray, index) => (
            <div key={index}>
              {/* Render table for each date */}
              <h2>Date: {Object.keys(neoArray)[0]}</h2>
              <table>
                {/* Render table rows */}
                {neoArray.map((neo, idx) => (
                  <tr key={idx}>
                    <td>{neo.name}</td>
                    <td>{neo.close_approach_data[0].miss_distance.miles}</td>
                    <td>{neo.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}</td>
                    <td>
                      <a href={neo.nasa_jpl_url} target="_blank" rel="noopener noreferrer">
                        Additional Info
                      </a>
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          ))}
        </div>
      </div>
    );
}

export default NEOData;
