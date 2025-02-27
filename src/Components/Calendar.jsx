import React from "react";
import Event from "./Event";


const Calendar = () => {

  return (
    <div className="Calendar">

      <table>
        <thead>
          <tr>
            <th></th>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="time">8 am</td>
            <Event event='Walk the dog' color ='green'/>
            <td></td>
            <td></td>
            <Event event='Walk the dog' color ='green' location='Maple & Ash'/>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">9 am</td>
            <Event event='Eat Breakfast' color ='pink' location='Home'/>
            <Event event='Eat Breakfast' color ='pink' location='Home'/>
            <Event event='Eat Breakfast' color ='pink' location='Home'/>
            <Event event='Eat Breakfast' color ='pink' location='Home'/>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">10 am</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">11 am</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">12 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">1 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">2 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">3 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">4 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">5 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">6 pm</td>
            <td></td>
            <Event event='Gym' color ='blue'/>
            <Event event='Gym' color ='blue'/>
            <Event event='Gym' color ='blue'/>
            <Event event='Gym' color ='blue'/>
            <Event event='Gym' color ='blue'/>
            <td></td>
          </tr>

        </tbody>

      </table>

    </div>
  )

}

export default Calendar;