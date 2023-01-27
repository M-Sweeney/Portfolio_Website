import Duet from '../assets/Duet1.png'
import Teq from '../assets/Tequila_mockingbird.png'
import Weather from '../assets/Weather2.png'

export default function Portfolio () {


  return(

<div className="container" id="proj">
  <h1 className="pagetitle">Portfolio</h1>

  <div className="portcontainer">
  <a href='https://github.com/DuetSocial/Duet_FE' target="_blank" className="porttitle">Duet</a>
    <img className='portimg' src={Duet}/>
    <h2 className='portdescription'>Duet is a social app that allows users to connect with others based on their shared interests in music. It features a feed where users can see comments and threads started by others, a connections tab where users can explore profiles they have liked or discover new connections based on their interests, and genre and artist tabs where users can update their interests. The app is built using Sequelize and Express on the backend and React, JavaScript, CSS, and Tailwind on the frontend. Users can get started by creating an account and following prompts to select their favorite music genres and artists, then exploring the feed and connections tab. The app is inspired by sources such as Last.FM, Twitter, and dating apps like Tinder. <a href='https://github.com/DuetSocial/Duet_FE' target="_blank" className='repo'>Check out the repository here!</a></h2>
  </div>

  <div className="portcontainer">
  <a href='https://github.com/M-Sweeney/Tequila_Mockingbird' target="_blank" className="porttitle">Tequila Mockingbird</a>
  <img className='portimg' src={Teq}/>
  <h2 className='portdescription'>Tequila Mockingbird is a cocktail search and exploration tool that allows users to browse and search for drinks by name, alcohol type, ingredient type, and drink type. It is designed to help people discover new drinks and expand their palate. Technologies used in this project include React, Javascript, and CSS, and the website makes use of an API from <a href='https://www.thecocktaildb.com/api.php' target="_blank">(https://www.thecocktaildb.com/api.php)</a>. Users can navigate the website using a top navigation bar and can see details and instructions for making specific drinks by clicking on drink or ingredient cards. <a href='https://github.com/M-Sweeney/Tequila_Mockingbird' target="_blank" className='repo'>Check out the repository here!</a></h2>
  </div>

  <div className="portcontainer">
  <a href='https://github.com/M-Sweeney/Weather_or_Not' target="_blank" className="porttitle">Weather or Not</a>
    <img className='portimg' src={Weather}/>
    <h2 className='portdescription'>Weather or Not is a clothing and accessory database app that helps users determine if they are prepared for the weather by reviewing the forecast for the day and recommending items from their closet. The Weather or Not Dashboard uses a third party API from <a href='https://open-meteo.com/en/docs' target="_blank">(https://open-meteo.com/en/docs)</a> to check the weather for your current location and then recommend items, like an umbrella or a heaver jacket depending on the weather conditions that are returned. The app is built using Django and Python on the backend and React, JavaScript, CSS, and tailwind on the frontend. <a href='https://github.com/M-Sweeney/Weather_or_Not' target="_blank" className='repo'>Check out the repository here!</a></h2>
  </div>
</div>


  )
}