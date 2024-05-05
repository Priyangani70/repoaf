import React, { useState, useEffect } from 'react';

const NASAImage = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.nasa.gov/planetary/earth/imagery?lon=-95.33&lat=29.78&date=2018-01-01&dim=0.15&api_key=DEMO_KEY'
        );
        // Check if the response is successful
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // If the response is an image, get the blob URL
        const blob = await response.blob();
        setImageUrl(URL.createObjectURL(blob));
      } catch (error) {
        console.error('Error fetching data from NASA API:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 
          className="my-5 display-3 fw-bold ls-tight px-3" 
          style={
            {
              color: 'rgb(77, 134, 156)',
              textAlign:'center'
              }
          }>
        Earth
      </h1>
      <p>
        Landsat imagery is provided to the public as a joint project between NASA and USGS. A recent industry report on landsat 
        satellite imagery data estimates that total annual value to the economy of $2.19 billion, far exceeding the multi-year total 
        cost of building, launching, and managing Landsat satellites and sensors. The value is derived from consumers use of the data. 
        The objective of this endpoint is to give you an easy to use taste of what Landsat imagery data can provide. 
        There are more complicated APIs available if you want to build models on top of satellite imagery, apply machine-learning, 
        or minimize clouds in your image. NASA's Earth Science Devision has a variety of Earth imagery APIs for developers, 
        which you can find out about in the Earthdata Developer Portal. 
        Specifically, the GIBS (Global Imagery Browse Services) API may be of interest. The Google Earth Engine API is 
        another powerful option. This API is powered by Google Earth Engine API, and currently only supports pan-sharpened Landsat 8 imagery.
      </p>
      <h3>
      Example image:
      </h3>
      {imageUrl && (
        <img src={imageUrl} alt="NASA Earth Imagery" style={{ maxWidth: '100%' }} />
      )}
    </div>
  );
};

export default NASAImage;
