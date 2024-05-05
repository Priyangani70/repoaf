import React, { useState } from 'react';

function EpicImage() {
  const [date, setDate] = useState('');
  const [imageStatus, setImageStatus] = useState('');
  const [imageSrc, setImageSrc] = useState('');
  const [imageCaption, setImageCaption] = useState('');

  const apiKey = 'DEMO_KEY';

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://api.nasa.gov/EPIC/api/natural/date/${date}?api_key=${apiKey}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      if (Array.isArray(data) && data.length > 0 && typeof data[0].image === 'string') {
        const [year, month, day] = date.split("-");
        setImageStatus('Found');
        setImageSrc(`https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/jpg/${data[0].image}.jpg`);
        setImageCaption(data[0].caption);
      } else {
        setImageStatus('Image not found for the selected date');
        setImageSrc('');
        setImageCaption('');
      }
    } catch (error) {
      console.error('Error in network request:', error);
      setImageStatus('Please try a different date or check your syntax!');
    }
  };

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
                EPIC
            </h1>
            <p>
                The EPIC API provides information on the daily imagery collected by DSCOVR's Earth Polychromatic Imaging Camera 
                (EPIC) instrument. Uniquely positioned at the Earth-Sun Lagrange point, EPIC provides full disc imagery of the Earth 
                and captures unique perspectives of certain astronomical events such as lunar transits using a 2048x2048
                pixel CCD (Charge Coupled Device) detector coupled to a 30-cm aperture Cassegrain telescope.
            </p>
            
            <p>
                Image metadata and key information are provided by the JSON API and can be requested by date and for the most recent 
                available date. A listing of all available dates can also be retrieved via the API for more granular control.
            </p>
            <p>
                Development of the EPIC API began in 2015, and is supported by the web development team for the Laboratory for Atmospheres
                 in the Earth Sciences Division of the Goddard Space Flight Center. More information regarding the API and retrieval of
                  the imagery for download can be found on the EPIC website.
            </p>

            <h3>Retrievable Metadata</h3>
            <p>
                The following information is available for every image in the collection:
            </p>
            <ul>
                <li>Image [name]</li>
                <li>Date</li>
                <li>Caption</li>
                <li>centroid_coordinates</li>
                <li>dscovr_j2000_position</li>
                <li>lunar_j2000_position</li>
                <li>sun_j2000_position</li>
                <li>attitude_quaternions</li>
            </ul>

        </div>

        <div>
        
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label>
            Date:
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </label>
          <button type="submit"class="btn btn-outline-secondary">Submit</button>
          </div>
          
        </form>
        <p>Image Status: {imageStatus}</p>
        {imageSrc && <img src={imageSrc} alt="Epic Image" />}
        <p>Image Caption: {imageCaption}</p>
      </div>
        </>

  );
}

export default EpicImage;
