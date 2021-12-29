import logo from './logo.svg';
import './App.css';
import {out} from './test'
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  // const [fetchData,setFetchData]=useState([])
{/* <script crossorigin src="..."></script> */}
  // useEffect(() => {
  //   const api = 'https://qlw4oqofyj.execute-api.us-east-1.amazonaws.com/dev/post';
  //   // const data = { "name" : "Mike" };
  //   axios
  //     .get(api)
  //     .then((response) => {
  //       setFetchData(response.data.items.Items)
  //       // console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log("the error is ",error);
  //     });
  // },[]);
   console.log("fetch data is","fetchData")
  //  let durationBody = fetchData.map((item, i) => {
  //   return (
  //     // <option key={i} value={item}>
  //     //   {item}
  //     // </option>
  //     <div>
  //     <h1>Data {i} is</h1>
  //     <p>Date {item.Date}</p>
  //     <p>Amount {item.Amount}</p>
  //     <p>Fee {item.Fee}</p>
  //     <p>Net {item.Net}</p>
  //     <p>Description{item.Description}</p>
  //     <p>Status {item.Status}</p>
  //     </div>
  //     // console.log(item)
  //   );
  // });
  return (
    <div  className='App'>
     {/* {
       durationBody
    //  fetchData
    //   && 
    //  fetchData.map(x => 
    //   <h1>{x.Amount}</h1>
    //   )
    //  console.log("in system",fetchData.items)
      }  */}
      
      
    </div>
  );
}

export default App;
