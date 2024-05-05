import React, { useState, useEffect } from 'react';

function CMEAnalysis() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const startDate = '2024-03-28'; // Replace with actual start date
        const endDate = '2024-03-29'; // Replace with actual end date
        const apiKey = 'DEMO_KEY'; // Replace with your actual NASA API key

        const response = await fetch('https://api.nasa.gov/DONKI/CME?startDate=2017-01-03&endDate=2017-01-03&api_key=DEMO_KEY');
        
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const responseData = await response.json();
        console.log('Data from API:', responseData); // Log the data to see what's being returned
        if (responseData && responseData.length > 0) {
          setData(responseData);
        } else {
          throw new Error('No CME analysis data available for the specified date range');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error); // Log any errors that occur
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data || data.length === 0) return <div>No CME analysis data available for the specified date range</div>;

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
        Coronal Mass Ejection (CME)
      </h1>
      <p>
      startDate: default to 30 days prior to current UTC date
      </p>
      <p>
      endDate: default to current UTC date
      </p>

      <br>
      </br>
      
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>

    <div>
      
    </div>
    </>
   
  );
}

export default CMEAnalysis;
