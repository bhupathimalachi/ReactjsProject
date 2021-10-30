import React,{useEffect,useState} from "react";
import axios from "axios";

function GetExampleFunctionLevel(){
    const[records,setRecords]=useState([]);
    useEffect(()=>{
        axios.get("https://www.w3schools.com/angular/customers.php").then((posRes)=>{
            //console.log(posRes)
            const{data}=posRes;
            const{records}=data;
           setRecords(records);

        },(errRes)=>{
            console.log(errRes);
        })

       /*  fetch("https://www.w3schools.com/angular/customers.php").then((res)=>{
            return res.json()
        }).then((posRes)=>{
            //console.log(posRes);
            const{records}=posRes;
           setRecords(records);
        },(errRes)=>{
            console.log(errRes);
        }) */
    });
    return(<React.Fragment>
        {/* <h1>{JSON.stringify(records)}</h1> */}
        <table border="1"
                    cellPadding="10"
                    cellSpacing="10">
                        <tr>
                            <th>Name</th>
                            <th>City</th>
                            <th>Country</th>
                        </tr>
                        {records.map((element,index)=>(
                            <tr key={index}>
                                <td> {element.Name}</td>
                                <td> {element.City}</td>
                                <td>{element.Country}</td>
                            </tr>
                        ))}

            </table>
        
    </React.Fragment>
    )
}
export default GetExampleFunctionLevel;