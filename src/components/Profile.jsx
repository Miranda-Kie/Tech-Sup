import React from 'react';

const Profile = () => {
    return (
// <!-- .container -->
<div className="container-fluid" id="portfolio"> 

{/* 
  <!-- <hr className="featurette-divider"> -->
  <!-- Portfolio --> */}
  <div className="center row row-content">

    <div className="col-lg-6">
     <div className="profile_img">
        <img src="./img/miranda.jfif" width="140px" height="140px" alt="Miranda"/>
      </div>
      <h3 id="ourName">Miranda Qi</h3>
      <h5 id="ourPosition">Partner Advisor</h5>
      
      <p>Miranda is a full stack developer with over 5 years of leadership experience. 
        She has worked in many different industry sectors such as healthcare, bio-technology, 
        capital markets, insurance, manufacturing, and energy. Miranda has a BSc. in Psychology 
        and a Diploma in Computer Programming.
      </p>
      <p><a className="btn btn-secondary" href="https://www.linkedin.com/in/miranda-xinying-qi-33821795/" role="button">View details &raquo;</a></p>
    </div>
    
    {/* <!-- /.col-lg-4 --> */}
    <div className="col-lg-6">
      <div className="profile_img">
        <img src="./img/mehran.jfif" width="140px" height="140px" alt="Mehran"/>
      </div>
      <h3 id="ourName">Mehran Alipour</h3>
      <h5 id="ourPosition">Partner Advisor</h5>
      <p>
        Mehran is a full-stack web developer with eight years of experience as a 
        multimedia designer and three years of experience as a computer programmer. 
        His knowledge, both as a designer and a developer, allows him to design 
        the ultimate website for you.
      </p>
      <br/>
      <p><a className="btn btn-secondary" href="https://www.linkedin.com/in/mehran-alipour-3a5b1a14a/" role="button">View details &raquo;</a></p>
    </div>
    {/* <!-- /.col-lg-4 --> */}
    
  </div>
  {/* <!-- /.row --> */}

</div>
// <!-- .container -->
)}
   
export default Profile;