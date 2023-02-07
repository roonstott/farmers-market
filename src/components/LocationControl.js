import React from 'react';
import Location from './Location.js'
import DayButton from './DayButton.js'


const marketSchedule = [  
  {  
    day: "Sunday",
     location: "Lents International",
     hours: "9:00am - 2:00pm",
     booth: "4A"
  },
  {  
     day: "Monday",
     location: "Pioneer Courthouse Square",
     hours: "10:00am - 2:00pm",
     booth: "7C"
  },
  {  
     day: "Tuesday",
     location: "Hillsboro",
     hours: "5:00pm - 8:30pm",
     booth: "1F"
  },
  {  
     day: "Wednesday",
     location: "Shemanski Park",
     hours: "10:00am - 2:00pm",
     booth: "3E"
  },
  {  
     day: "Thursday",
     location: "Northwest Portland",
     hours: "2:00pm - 6:00pm",
     booth: "6D"
  },
  {  
    day: "Saturday",
    location: "Beaverton",
    hours: "10:00am - 1:30pm",
    booth: "9G"
  }
 ];
// const d = marketSchedule[0];

class LocationControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 3  
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (id) => {
    this.setState({ index: id})
  }

  render(){   
   let display; 
   if (this.state.index != null) {
      const d = marketSchedule[this.state.index];
      display = <Location day = {d.day} location = {d.location} hours = {d.hours} booth = {d.booth}></Location>
   } else {
      display = <p>The farm store is located at a different farmer's market each day of the week</p>
   }
    return (
      <React.Fragment>
      {marketSchedule.map((element, index) =>
      <button key = {index} onClick={() => this.handleClick(index)}>{element.day}<br />{element.location}</button>
      //   <DayButton day = {element.day} location = {element.location} key = {index} />
        )}
        {display}   
      </React.Fragment>
    );
  }
}

// const d = marketSchedule[0];


export default LocationControl;