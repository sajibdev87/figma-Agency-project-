import React from 'react';
import Header from '../Shard/Header/Header';
import Banner from './Banner/Banne';
import Services from './Services/Services';
import Gallery from './Gallery/Gallery';



const Home = () => {
          return (
                    <div>
                    
                    <Header></Header>
                    <Banner></Banner>
                    <Services></Services>
                    <Gallery></Gallery>

                    </div>
          );
};

export default Home;