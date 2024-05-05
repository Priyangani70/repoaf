import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Details() {
    const [details,setDetails]= useState(null);

   
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://api.nasa.gov/planetary/apod', {
              params: {
                api_key: 'DEMO_KEY'
              }
            });
            setDetails(response.data);
          } catch (error) {
            console.error('Error fetching APOD data:', error);
          }
        };
      
        fetchData();
      }, []);

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
        Image Of The Day
      </h1>
<br></br>
      <h3>
        Looking Beyond the Veil
      </h3>
      <p>
        This image from NASA’s James Webb Space Telescope’s NIRCam (Near-Infrared Camera) of star-forming region NGC 604 shows how stellar winds from bright,
         hot young stars carve out cavities in surrounding gas and dust.
      </p>
    </div>
    <div className='d-flex justify-content-center'>
      {details && (
        <img 
        src={details.url} 
        alt={details.title} 
        className="w-full" 
        class="figure-img img-fluid rounded"
        />
      )}
    </div>
  </>
  )
}
