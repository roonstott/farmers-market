import React from 'react'; 

const Location = (props) => {
  
  return (
    <React.Fragment>
      <h3>{props.day}</h3>
      <h4>{props.location}</h4>
      <h5>{props.hours}</h5>
      <h6>{props.booth}</h6>
    </React.Fragment>
  );
}


export default Location; 