import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';


export function NodeCheck ()  {
  const [nodeInfo, setNodeInfo] = useState([]);

  const nodecheckUrl = process.env.REACT_APP_NODECHECK_URL || 'http://localhost:3002/api/nodecheck';
  console.log('REACT_APP NodeCheckURL: ' + process.env.REACT_APP_NODECHECK_URL);
  const fetchNodeInfo = useCallback(async () => {
    const res = await axios.get(nodecheckUrl);
    setNodeInfo(res.data);
  }, [nodecheckUrl]);

  useEffect(() => {
    fetchNodeInfo();
  }, [fetchNodeInfo]);
  
  const renderedNodeInfo = Object.values(nodeInfo).map((node,i) => {
    console.log(node);
    return (
    <div
      className="card" 
      style={{ width: '30%', marginBottom: '20px'}}
      key={i}
    >
      <div className='card-body'>
        <h3>{node}</h3>
      </div>
    </div>    
    );
    });


  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedNodeInfo}
    </div>
  );

};