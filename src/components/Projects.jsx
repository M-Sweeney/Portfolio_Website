import React from 'react';
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import Duet from '../assets/Duet1.png'
import Teq from '../assets/Tequila_mockingbird.png'
import Weather from '../assets/Weather2.png'
import { Link } from 'react-router-dom'


const MyCarousel = () => {
  return (
    <AwesomeSlider className='carousel'>
      <div className='projcontainer'>
      <Link to ='/portfolio'><h3 className='projtitle'>Duet</h3></Link>
        <img src={Duet}  className='projimg'/>
        <h4 className='projdescription'>Duet is a social app that allows users to connect with others based on their shared interests in music. It features a feed where users can see comments and threads started by others, a connections tab where users can explore profiles they have liked or discover new connections based on their interests, and genre and artist tabs where users can update their interests. The app is built using Sequelize and Express on the backend and React, JavaScript, CSS, and Tailwind on the frontend. Users can get started by creating an account and following prompts to select their favorite music genres and artists, then exploring the feed and connections tab. The app is inspired by sources such as Last.FM, Twitter, and dating apps like Tinder.</h4>
      </div>
      <div className='projcontainer'>
      <Link to ='/portfolio'>
        <h3 className='projtitle'>Tequila Mockingbird</h3>
        </Link>
        <img src={Teq} className='projimg' />
        <h4 className='projdescription'>Tequila Mockingbird is a cocktail search and exploration tool that allows users to browse and search for drinks by name, alcohol type, ingredient type, and drink type. It is designed to help people discover new drinks and expand their palate. Technologies used in this project include React, Javascript, and CSS, and the website makes use of an API from (https://www.thecocktaildb.com/api.php). Users can navigate the website using a top navigation bar and can see details and instructions for making specific drinks by clicking on drink or ingredient cards.</h4>
      </div>
      <div className='projcontainer'>
      <Link to ='/portfolio'>
        <h3 className='projtitle'>Weather or Not</h3>
        </Link>
        <img src={Weather} className='projimg' />
        <h4 className='projdescription'>Weather or Not is a clothing and accessory database app that helps users determine if they are prepared for the weather by reviewing the forecast for the day and recommending items from their closet. The Weather or Not Dashboard uses a third party API from (https://open-meteo.com/en/docs) to check the weather for your current location and then recommend items, like an umbrella or a heaver jacket depending on the weather conditions that are returned. The app is built using Django and Python on the backend and React, JavaScript, CSS, and tailwind on the frontend.</h4>
      </div>
    </AwesomeSlider>
  );
}

export default MyCarousel;
