import React, { useState, useEffect } from 'react';
import ServiceCard from './ServiceCard';
import Loader from './Loader';
import { useAlert } from 'react-alert';
import axios from 'axios';


const Services = () => {

  const [data, setData] = useState(null);
  const alert = useAlert();

  useEffect(()=> {
    axios.get(process.env.REACT_APP_SERVICES_URL)
            .then(res =>setData(res.data))
            .catch(error => alert.error(error));
  },[alert,data])

  if(data){
    return (
      <div className="album py-5 bg-light" id="services">
        <div className="container-fluid">
          <div className="row px-0 py-4">
            {data.map((postDetail, index) => {
              return<ServiceCard obj = {postDetail} key={index}/>
            })}
          </div>
        </div>
      </div> 
    )
  }
  else{
   return (
      <div><Loader/></div>  
    );
  }
}

 export default Services;