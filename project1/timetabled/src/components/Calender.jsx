import React from "react";
const Calender = () =>{
    return(
        <div>
            <table>
    <thead>
      <tr>
        <th>Sunday</th>
        <th>Monday</th>
        <th>Tuesday</th>
        <th>Wednesday</th>
        <th>Thursday</th>
        <th>Friday</th>
        <th>Saturday</th>
      </tr>
    </thead>
    <tr>
  <td className="time">Insert Time</td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
</tr>
    <tbody>
      {/* Add rows and cells for the days of the month here */}
    </tbody>
  </table>
        </div>
    )
}

export default Calender