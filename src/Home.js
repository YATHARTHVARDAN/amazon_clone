import React from 'react'
import "./Home.css";
import Product from './Product';
function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt = ''/>
            
                <div className="home__row">
                <Product 
                id = {4}
                title="The Lean startup" 
                price={4029.99} 
                image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg' 
                rating={5}
                 />
                <Product 
                id = {2}
                title="The God of war : Take on the mighty Zeus with the wrath filled be Ares after ofcourse destroygin him for his evil plot to do so." 
                price={30.01}
                image='https://freepngimg.com/thumb/god_of_war/21209-6-god-of-war-transparent-image.png'
                rating={5}
               
                />
                </div>
                <div className="home__row">
                <Product
                id = {5} 
                title="DEAL OF THE DAY Life Digital Laptop (Intel Core i7, 4GB RAM, 256GB SSD, Windows 10), ZED AIR CX7"
                price={33.990}
                image='https://freepngimg.com/thumb/technology/33420-2-asus-laptop-transparent-picture.png'
                rating={3}
                
                />
                
                <Product
                id = {10} 
                title="DEAL OF THE DAY Life Digital Laptop (Intel Core i7, 4GB RAM, 256GB SSD, Windows 10), ZED AIR CX7"
                price={34.99}
                image='https://freepngimg.com/thumb/technology/33540-7-toshiba-laptop-transparent-image.png'
                rating={3}
               
                />
                <Product
                id = {89} 
                title="DEAL OF THE DAY Life Digital Laptop (Intel Core i7, 4GB RAM, 256GB SSD, Windows 10), ZED AIR CX7"
                price={34.99}
                image='https://freepngimg.com/thumb/technology/33540-7-toshiba-laptop-transparent-image.png'
                rating={3}
               
                />
                </div>
                <div className="home__row">
                <Product
                id={39} 
                title="The God of war : Take on the mighty Zeus with the wrath filled be Ares after ofcourse destroygin him for his evil plot to do so." 
                price={30.01}
                image='https://freepngimg.com/thumb/god_of_war/21209-6-god-of-war-transparent-image.png'
                rating={5}
                />
                </div>
            </div>
        </div>
    );
}

export default Home
