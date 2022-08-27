import React, { useState, useEffect } from 'react';
import ServiceCard from './ServiceCard';
import Loader from './Loader';
import { useAlert } from 'react-alert';
import axios from 'axios';

const Services = () => {

  const [data, setData] = useState(null);
  const alert = useAlert();

  useEffect(()=> {
    axios.get('https://services-techsup.herokuapp.com/api/posts')
            .then(res =>setData(res.data))
            .catch(error => alert.error(error));
  },[alert,data])

  if(data){
    return (
      <div className="album py-5 bg-light" id="services">
        <div className="container-fluid">
          <div className="row row-content">
            {data.map((postDetail, index) => {
              return<ServiceCard obj = {postDetail} key={index}/>
            })}
          </div>
        </div>
      </div>
    );
  }
  else{
   return (
      <div><Loader/></div>  
    );
  }
}

 export default Services;