import React from 'react';

const Body = (props) => {

  return (
    <div className="body-container">
      { props.data && props.data.items?.length > 0 ? 
        <>
        <h2 className="body-title">{props.data.title}</h2>
        { props.data.items.map((item, index) => {
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
        </>
        :
        null
      }
    </div>
  );
}

export default Body;