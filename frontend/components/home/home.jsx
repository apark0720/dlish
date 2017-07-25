import React from 'react';

import HomeActionsContainer from './home_actions_container';

const Home = () => (
  <section>
    <main>
      <div>
        <div className="homepage-video">
          <video loop autoPlay>
            <source src="http://res.cloudinary.com/apark0720/video/upload/v1500767920/dlishbanner_ylseil.mp4" type="video/mp4" />
          </video>
          <h1>Any recipe in the world, <br/> prepared by the best chefs in Seattle.</h1>
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
                <h2>Submit a recipe</h2>
                <p>
                  Found a mouthwatering recipe but don't want to make it yourself? We got you covered!
                  Simply submit a link of the recipe to suggest what should be on next week's menu.
                </p>
              </div>

            </div>


            <div className="homepage-entry">
              <div className="homepage-blurb">
                <h2>Vote for next week's menu</h2>
                <p>
                  Vote for the recipes that you want on next week's menu. Recipes with the highest votes will appear on next week's menu.
                  All orders will be available for pick-up between 12:15-12:45pm at a Starbucks of your choice.
                </p>
              </div>
              <img className="homepage-image-2" src={"http://res.cloudinary.com/apark0720/image/upload/v1501004105/pic2_copy_px6njk.jpg"} alt="cartoon-figures" />
            </div>


            <div className="homepage-entry">
              <img className="homepage-image-3" src={"http://res.cloudinary.com/apark0720/image/upload/v1500784759/pic2_j3npyc.jpg"} alt="cartoon-figures" />
              <div className="homepage-blurb">
                <h2>The best culinary talent in Seattle</h2>
                <p>
                  We partner with dozens of top chefs that specialize in everything from authentic Thai cuisine to Italian street food.
                  Our chefs will add personal touches to the recipes to ensure they are dlish-ious!
                </p>
              </div>
            </div>

            <div className="order-now">
              <button>Order Now</button>
            </div>

        </div>
      </div>
    </main>
  </section>
);

export default Home;
