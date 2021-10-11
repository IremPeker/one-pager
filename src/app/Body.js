import React from 'react';
import bodyData from './../data/bodyData';

const Body = () => {

    console.log('body data', bodyData());

  return (
    <div className="body-container">
      <h2 className="body-title">{bodyData().title}</h2>
      { bodyData().items.map((item, index) => {
        return (
          <div key={index} className="user-info"> 
            <div className="user-info-row">
              <span>{index}</span>
              { item.map((info, index) => {
                if(info.label !== "Description"){
                  return (
                    <div key={index} className="user-info-cell">
                      <p className="info-label">{info.label}</p>
                      <p>{info.value}</p>
                    </div>
                  )
                } 
              })}
             </div>
             { item.map ((info, index) => {
                if(info.label === "Description"){
                  return (
                    <div key={index} className="user-description-row">
                      <p className="info-label">{info.label}</p>
                      <p>{info.value}</p>
                    </div>
                  )
                } 
             })}
          </div>
        )
      })}
    </div>
  );
}

export default Body;