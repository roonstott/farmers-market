import React from 'react';
import Location from './Location.js'
import DayMenu from './DayMenu.js'

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
 

const LocationControl = () => {
    // const specificDay = marketSchedule.foreach(el => {
    //   if (el[day] === "Monday") {
    //     return el; 
    //   }
    // TODO: Add conditional rendering logic
    const d = marketSchedule[0];
    return (
      <React.Fragment>
        {marketSchedule.map((element, index) =>
          <DayMenu day = {element.day} key = {index} />
        )}
        {/* <DayMenu /> */}
        <Location day = {d.day} location = {d.location} hours = {d.hours} booth = {d.booth}></Location>
      </React.Fragment>
    );
}


export default LocationControl;