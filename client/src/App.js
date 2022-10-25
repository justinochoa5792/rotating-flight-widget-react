import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";
function App() {
  const [flights, setFlights] = useState([]);

  const getFlights = async () => {
    let response = await Axios.get("http://localhost:8000/flights");
    setFlights(response.data);
    console.log(flights.data);
  };

  useEffect(() => {
    getFlights();
  }, []);

  return (
    <div className="App">
      <header>DEPATURES</header>
      {flights.map((item) => {
        return (
          <div className="departures">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th id="time">TIME</th>
                  <th id="destination">DESTINATION</th>
                  <th id="flight">FLIGHT</th>
                  <th id="gate">GATE</th>
                  <th id="remarks">REMARKS</th>
                </tr>
              </thead>
              <tbody id="table-body">
                <td>&#9992;</td>
                <td className="flip">{item.departing.slice(0, 5)}</td>
                <td className="flip">{item.destination}</td>
                <td className="flip">{item.flightNumber[0]}</td>
                <td className="flip">{item.gate}</td>
                <td className="flip">{item.status.toUpperCase()}</td>
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
}

export default App;
