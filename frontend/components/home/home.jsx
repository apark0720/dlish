import React from 'react';

import NavbarContainer from '../navigation/navbar_container';
import HomeActionsContainer from './home_actions_container';
import GuestLoginContainer from './guest_login_container';
import Footer from '../home/footer';

const Home = () => (
  <section>
    <NavbarContainer />
    <main>
      <div>
        <div className="homepage-video">
          <video loop autoPlay>
            <source src="http://res.cloudinary.com/apark0720/video/upload/v1500767920/dlishbanner_ylseil.mp4" type="video/mp4" />
          </video>
          <h1>Any recipe in the world, <br/> delivered to your office.</h1>
        </div>
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
              <img className="homepage-image-1" src={"http://res.cloudinary.com/apark0720/image/upload/v1500784758/pic1_fjd1mz.png"} alt="cartoon-figures" />

              <div className="homepage-blurb">
                <h2>Submit a Recipe</h2>
                <p>
                  Found a mouthwatering recipe but don't want to make it yourself? We got you covered! Simply submit a link of the recipe and designate a time and place for delivery.
                </p>
              </div>

            </div>


            <div className="homepage-entry">
              <div className="homepage-blurb">
                <h2>Get notified within 24 hours</h2>
                <p>
                  If our chefs can make the dish, you will receive an email and your recipe will appear on our menu. We partner with dozens of top chefs that specialize in everything from authentic Thai cuisine to Texas BBQ. The best chef for the job will add a personal touch and handcraft each meal.
                </p>
              </div>
              <img className="homepage-image-2" src={"http://res.cloudinary.com/apark0720/image/upload/v1500784759/pic2_j3npyc.jpg"} alt="cartoon-figures" />
            </div>


            <div className="homepage-entry">
              <img className="homepage-image-3" src={"http://res.cloudinary.com/apark0720/image/upload/v1500785608/pic3_tm8jas.jpg"} alt="cartoon-figures" />
              <div className="homepage-blurb">
                <h2>The more the merrier!</h2>
                <p>
                  The more people who join your order, the cheaper your meal will be. Invite your coworkers and friends to join you for lunch!
                </p>
              </div>
            </div>

            <div className="order-now">
              <button>Order Now</button>
            </div>

        </div>
      </div>

      <Footer />
    </main>
  </section>
);

export default Home;
