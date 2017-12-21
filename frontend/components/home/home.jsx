import React from 'react';
import { Link } from 'react-router-dom';

import HomeActionsContainer from './home_actions_container';

const Home = () => (
  <section>
    <div className="homepage-video">
      <video loop autoPlay>
        <source src="http://res.cloudinary.com/apark0720/video/upload/v1501543726/dlishbanner.mp4" type="video/mp4" />
      </video>
    </div>


    <div className="homepage-container">
      <div className="homepage-content">
        <div className="homepage-info-1">
          <h2 style={{ 'fontSize': '27px' }}>&#8681;   How it Works   &#8681;</h2>
        </div>
      </div >

      <div className="homepage-body">
        <div className="homepage-entry">
          <div className="homepage-image">
            <img className="homepage-image-1" src={"http://res.cloudinary.com/apark0720/image/upload/v1500784758/pic1_fjd1mz.png"} alt="cartoon-figures" />
          </div>

          <div className="homepage-blurb">
            <h2>Submit a recipe</h2>
            <p>
              Found a mouthwatering recipe but don't want to make it yourself? We got you covered!
                Simply <b>submit a Youtube link</b> of the recipe to suggest what you want to see on next week's menu.
              </p>
          </div>

        </div>


        <div className="homepage-entry">
          <div className="homepage-blurb">
            <h2>Vote for next week's menu</h2>
            <p>
              Vote on the menu suggestions submitted by our users. <b>Recipes with the highest votes</b> will appear on next week's menu.
                All orders will be available for <b>pick-up between 12:15-12:45pm at a Starbucks</b> of your choice.
              </p>
          </div>
          <div className="homepage-image">
            <img className="homepage-image-2" src={"http://res.cloudinary.com/apark0720/image/upload/v1501004105/pic2_copy_px6njk.jpg"} alt="cartoon-figures" />
          </div>
        </div>


        <div className="homepage-entry">
          <div className="homepage-image">
            <img className="homepage-image-3" src={"http://res.cloudinary.com/apark0720/image/upload/v1500784759/pic2_j3npyc.jpg"} alt="cartoon-figures" />
          </div>
          <div className="homepage-blurb">
            <h2>Prepared by the best chefs in Seattle</h2>
            <p>
              We partner with dozens of <b>top chefs</b> that specialize in everything from authentic Thai cuisine to Italian street food.
                Our chefs will add personal touches to the recipes to ensure they are <b>dlish-ious</b>!
              </p>
          </div>
        </div>

        <div className="order-now">
          <Link to={`/menu/`}>
            <button>ORDER NOW</button>
          </Link>
        </div>

      </div>
    </div>
  </section>
);

export default Home;
