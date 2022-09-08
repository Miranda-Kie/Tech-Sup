import React, { useState, useEffect } from 'react';
import ServiceCard from './ServiceCard';
import Loader from './Loader';
import { useAlert } from 'react-alert';
import axios from 'axios';
import Aos from 'aos';
import "aos/dist/aos.css";

const Services = () => {

  const [data, setData] = useState(null);
  const alert = useAlert();

  useEffect(()=> {
    Aos.init({ duration: 2000 });
    axios.get(process.env.REACT_APP_SERVICES_URL)
            .then(res =>setData(res.data))
            .catch(error => alert.error(error));
  },[alert,data])

  if(data){
    return (
       <div className="album py-5 bg-light" id="services">
        <div className="container-fluid">
          <div className="row px-0 py-4" data-aos="fade-right">
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
    <Loader/>
    );
  }
}

 export default Services;