import React, { useState, useEffect } from 'react';
import ServiceCard from './ServiceCard';



function Services() {

  const [data, setData] = useState(null);

  useEffect(()=> {
    fetch('https://services-techsup.herokuapp.com/api/posts')
      .then((response) => response.json())
      .then(setData);
  },[])

  if(data){
    
    return (
      <div class="album py-5 bg-light" id="services">
        <div class="container-fluid">
          <div class="row row-content">
            {data.map((postDetail, index) => {
              return<ServiceCard obj = {postDetail} />
            })}
          </div>
        </div>
      </div>

    );
  }
  else{
   return (
      <div>No data</div>  
    );

  }
}

 export default Services;