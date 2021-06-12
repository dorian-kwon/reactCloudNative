import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';


export function SayService ()  {
  const [sayInfo, setSayInfo] = useState([]);

  const sayserviceUrl = process.env.REACT_APP_SAYSERVICE_URL || 'http://localhost:3003/api/sayservice';

  const fetchSayInfo = useCallback(async () => {
    const res = await axios.get(sayserviceUrl);
    setSayInfo(res.data);
  }, [sayserviceUrl]);

  useEffect(() => {
    fetchSayInfo();
  }, [fetchSayInfo]);
  
  const renderedSayInfo = Object.values(sayInfo).map((say,i) => {
    console.log(say);
    return (
    <div
      className="card" 
      style={{ width: '30%', marginBottom: '20px'}}
      key={i}
    >
      <div className='card-body'>
        <h3>{say}</h3>
      </div>
    </div>    
    );
    });


  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedSayInfo}
    </div>
  );

};