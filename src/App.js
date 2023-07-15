import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((json) => setData(json.products));
  }, []);

  const sortData = () => {
    let sortDataValue = [...data];
    let finalValue = sortDataValue.sort(function (a, b) {
      return parseFloat(a.price) - parseFloat(b.price);
    });
    setData(finalValue);
  };
  //console.log(arr)
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => sortData(data)}> sort</button>

      {data &&
        data.map((value, index) => {
          return (
            <div>
              <ul>
                <li> {value.title}</li>
                <li> {value.description}</li>
                <li> {value.price}</li>
                <li> {value.rating}</li>
                <img src={value.thumbnail} alt="thumbnail" />
              </ul>
            </div>
          );
        })}
    </div>
  );
}
