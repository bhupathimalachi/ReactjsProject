import React, { useState } from "react";
import Second from "./Second";
function First(){
        const[sub,setSub]=useState("ReactJS");
        const[num,setNum]=useState(100);
        const[flag,setFlag]=useState(true);
        const[obj,setObj]=useState({"sub_one":"ReactJs","sub_two":"NodeJS","sub_three":"MONGODB"});
        const[products,setProducts]= useState([{"p_id":111,"p_name":"lux","p_cost":1000},
               {"p_id":222,"p_name":"rexona","p_cost":2000},
               {"p_id":333,"p_name":"santhoor","p_cost":3000},
               {"p_id":444,"p_name":"life_boy","p_cost":4000},
               {"p_id":555,"p_name":"Dove","p_cost":5000},
               {"p_id":666,"p_name":"chinthol","p_cost":6000},
               {"p_id":777,"p_name":"Maysoor_sandle","p_cost":7000},
               {"p_id":888,"p_name":"pears","p_cost":8000}
        ])
    return(
        <React.Fragment>
            <Second sub={sub}
                    num={num}
                    flag={flag}
                    obj={obj}
                    products={products}></Second>

        </React.Fragment>
    )

}
 export default First;