import React from "react";

const Produce = (props) => {
  // const produce = {props.arr}
  return (
    <React.Fragment>
      <h4>{props.month}</h4>
      <ul>
        {props.arr.map((element, index) => 
          <li key={index}>{element}</li>
        )}
      </ul>
    </React.Fragment>
  );
}

export default Produce