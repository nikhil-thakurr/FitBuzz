import React, { useEffect, useState } from 'react';

const Test = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const myHeaders = new Headers();
      myHeaders.append("x-rapidapi-key", "48e93fa89dmshca52336281e7bbfp1c050bjsn9a33ad1bfd3f");
      myHeaders.append("x-rapidapi-host", "api-football-v1.p.rapidapi.com");

      const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      try {
        const response = await fetch("https://v3.football.api-sports.io/leagues", requestOptions);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
        console.log(data);
      } catch (error) {
        setError(error);
        console.log('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Test</h1>
      {error && <div>Error: {error.message}</div>}
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Test;