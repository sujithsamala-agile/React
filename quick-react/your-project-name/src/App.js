import React, { Component } from "react";
import Hooks from "./Hooks";
const data1 = [1, 2, 3, 4, 5, 6];
const data = [
  {
    widget: {
      debug: "on",
      window: {
        title: "Sample Konfabulator Widget",
        name: "main_window",
        width: 500,
        height: 500,
      },
      image: {
        src: "Images/Sun.png",
        name: "sun1",
        hOffset: 250,
        vOffset: 250,
        alignment: "center",
      },
      text: {
        data: "Click Here",
        size: 36,
        style: "bold",
        name: "text1",
        hOffset: 250,
        vOffset: 100,
        alignment: "center",
        onMouseUp: "sun1.opacity = (sun1.opacity / 100) * 90;",
      },
    },
  },
];

export class App extends Component {
  render() {
    return (
      //map() Examples

      // <table>
      //   <thead>
      //     <th>Name</th>
      //     <th>Email</th>
      //   </thead>
      //   <tbody>
      //     {data.map((result) => (
      //       <tr>
      //         <td>{result.name}</td>
      //         <td>{result.email}</td>
      //       </tr>
      //     ))}
      //   </tbody>
      // </table>

      // <div>
      //   {data.map((result) => (
      //     <li>{result.widget.window.width}</li>
      //   ))}
      // </div>

      // <div>
      //   {data.map((result) => (
      //     <p>{result.widget.window.name}</p>
      //   ))}
      // </div>

      <div>
        {data1.map((result) => (
          <span>{result}</span>
        ))}
      </div>
    );
  }
}

export default App;
