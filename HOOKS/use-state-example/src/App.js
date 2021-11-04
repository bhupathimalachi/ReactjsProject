 //fourth program
import React,{useState} from "react";
function App(){
  const arr=useState("ReactJs");
  return(<React.Fragment>
      <h1>{arr[0]}</h1>
      <h1>{JSON.stringify(arr )}</h1>
      <h1>{arr.length}</h1>
  </React.Fragment>)

}
export default App;
 



//first program
/* import React, { useState } from "react";
function App(){
  const[sub,setSub]=useState("ReactJs");
  const fun_one=()=>{
    setSub("ReactJs with JsX")
  }
  return(
    <React.Fragment>
      <h1>{sub}</h1>
      <button onClick={fun_one}>change </button>

    </React.Fragment>
  )
};
export default App;
 */

//second program

/* import React, { useState } from "react";
function App() {
  const [num, setNum] = useState(0);
  const fun_one = (data) => {
    // console.log(data);
    setNum(num + data);
  };
  return (
    <React.Fragment>
      <h1>Num:{num}</h1>
      <button onClick={() => fun_one(4)}>clickme</button>
</React.Fragment>
  )
};
export default App;
 */

//third program
 /* import React, { useState } from "react";
function App() {
  const [products, setProducts] = useState([
    { "pid": 111, "pname": "pone", "pcost": 10000 },
    { "pid": 222, "pname": "ptwo", "pcost": 20000 },
    { "pid": 333, "pname": "pthree", "pcost": 30000 },
    { "pid": 444, "pname": "pfour", "pcost": 40000 },
    { "pid": 555, "pname": "pfive", "pcost": 50000 },
    { "pid": 666, "pname": "psix", "pcost": 60000 },
    { "pid": 777, "pname": "pseven", "pcost": 70000 },
    { "pid": 888, "pname": "peight", "pcost": 80000 },
    { "pid": 999, "pname": "pnine", "pcost": 90000 },
    { "pid": 1000, "pname": "pten", "pcost": 100000 }
  ])
  const add_product = () => {
    setProducts([...products, { "pid": 1001, "pname": "peleven", "pcost": 200000 }])
  }
  return (
    <React.Fragment>
      <table border="1"
        align="center"
        cellPadding="10"
        cellSpacing="10">
        <tr>
          <th>P-ID</th>
          <th>P-NAME</th>
          <th>P-COST</th>
        </tr>
        {products.map((element, index) => (
          <tr key={index}>
            <td>{element.pid}</td>
            <td>{element.pname}</td>
            <td>{element.pcost}</td>
          </tr>
        ))}
      </table>
      <button style={{ marginLeft: 750, marginTop: 50 }} onClick={add_product}>add record</button>
    </React.Fragment>)
};
export default App; 
 */



