import React from 'react';




function Profile() {
    return (

// <!-- .container -->
<div class="container-fluid" id="portfolio"> 

{/* 
  <!-- <hr class="featurette-divider"> -->
  <!-- Portfolio --> */}
  <div class="center row row-content">

    <div class="col-lg-6">
     <div class="profile_img">
        <img src="https://media-exp1.licdn.com/dms/image/C5603AQHz0hhCf7NIYQ/profile-displayphoto-shrink_200_200/0/1583724202489?e=1614211200&v=beta&t=yajPyju0HPd9gKIawRxSHHrj33alTSJ7K99fowgCqy4" width="140px" height="140px" alt="Miranda"/>
      </div>
      <h3 id="ourName">Miranda Qi</h3>
      <h5 id="ourPosition">Partner Advisor</h5>
      
      <p>Miranda Qi is a Senior Technology Executive with over 10 years of leadership experience. 
        She has worked in many different industry sectors such as healthcare, bio-technology, 
        capital markets, insurance, manufacturing, and energy. Miranda has a BSc. in Psychology 
        and a Diploma in Computer Programming.
      </p>

      <p><a class="btn btn-secondary" href="https://www.linkedin.com/in/miranda-xinying-qi-33821795/" role="button">View details &raquo;</a></p>
    </div>
    
    {/* <!-- /.col-lg-4 --> */}
    <div class="col-lg-6">
      <div class="profile_img">
        <img src="https://media-exp1.licdn.com/dms/image/C5603AQHdkPEjiRkT6g/profile-displayphoto-shrink_200_200/0/1586724524458?e=1614211200&v=beta&t=p3QJ8EfBJj_q27FZf_zc0jLh37Cef2hpeWCKBRT4T3A" width="140px" height="140px" alt="Mehran"/>
      </div>
      <h3 id="ourName">Mehran Alipour</h3>
      <h5 id="ourPosition">Partner Advisor</h5>
      <p>
        Mehran is a full-stack web developer with eight years of experience as a 
        multimedia designer and three years of experience as a computer programmer. 
        His knowledge, both as a designer and a developer, allows him to design 
        the ultimate website for you.
      </p>
      <p><a class="btn btn-secondary" href="https://www.linkedin.com/in/mehran-alipour-3a5b1a14a/" role="button">View details &raquo;</a></p>
    </div>
    {/* <!-- /.col-lg-4 --> */}
    
  </div>
  {/* <!-- /.row --> */}

</div>
// <!-- .container -->
// </div>

        );
    }
   
   export default Profile;