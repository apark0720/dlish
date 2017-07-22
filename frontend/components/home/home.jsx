import React from 'react';

import NavbarContainer from '../navigation/navbar_container';
import HomeActionsContainer from './home_actions_container';
import GuestLoginContainer from './guest_login_container';
import Footer from '../home/footer';

const Home = () => (
  <section>
    <NavbarContainer />
    <main>
      <div className="homepage-video">
        <video loop autoPlay>
          <source src="http://res.cloudinary.com/apark0720/video/upload/v1500681046/videobanner-lowerres_iycnbi.mp4" type="video/mp4" />
        </video>
        <h1>Any recipe in the world, <br/> prepared by the best</h1>
      </div>

      <div className="homepage-container">

        <div className="homepage-content">
         <div className="homepage-info-container">
           <div className="homepage-info">
             <div className="homepage-info-1">
               <h2>How it Works</h2>
             </div>
           </div>
         </div>
        </div >

          <div className="homepage-body">
            <div className="homepage-entry">
              <img className="homepage-image" src={"http://res.cloudinary.com/apark0720/image/upload/v1500735174/1stpic_tg7wjj.png"} alt="cartoon-figures" />

              <div className="homepage-blurb">
                <h2>Submit a Recipe!</h2>
                <p>
                  Submit a url of a video recipe (non-video recipes are okay too!) and designate a time and place for delivery.
                </p>
              </div>

            </div>


            <div className="homepage-entry">
              <div className="homepage-blurb">
                <h2>If our chefs can make the dish, you will be notified and your recipe will appear on our menu</h2>
                <p>
                  We partner with dozens of top chefs that specialize in everything from Thai to BBQ. The best chef for the job will add a personal touch and handcraft each meal
                </p>
              </div>
              <img className="homepage-image" src={"http://res.cloudinary.com/apark0720/image/upload/v1500735176/2ndpic_wfnaoo.png"} alt="cartoon-figures" />
            </div>


            <div className="homepage-entry">
              <img className="homepage-image" src={"http://res.cloudinary.com/apark0720/image/upload/v1500735178/3rd_pic_sqh8gy.png"} alt="cartoon-figures" />
              <div className="homepage-blurb">
                <h2>The more people who join your order, the cheaper your meal will be</h2>
                <p>
                  Invite your coworkers and friends to join you!
                </p>
              </div>

            </div>



        </div>
      </div>
    </main>
  </section>
);
// <Footer />

export default Home;
