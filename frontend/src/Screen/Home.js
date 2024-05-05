import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import ExampleCarouselImage1 from '../Component/Images/nasaImage1.jpg';
import ExampleCarouselImage2 from '../Component/Images/nasaImage2.jpg';
import ExampleCarouselImage3 from '../Component/Images/nasaImage3.jpg';

import Featured1 from '../Component/Images/Featured1.jpg';
import Featured2 from '../Component/Images/Featured2.jpg';

import Discover1 from '../Component/Images/Discover1.jpg';
import Discover2 from '../Component/Images/Discover2.jpg';
import Discover3 from '../Component/Images/Discover3.jpg';
import Discover4 from '../Component/Images/Discover4.jpg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Logo from '../Component/Images/nasaLogo.jpg'

import Dropdown from 'react-bootstrap/Dropdown';

export default function Home() {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={ExampleCarouselImage1}
            alt="First slide"
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={ExampleCarouselImage2}
            alt="Second slide"
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ExampleCarouselImage3}
            alt="Third slide"
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
      <br></br>
      <br></br>
      <br></br>
    <div>
    <h1 
      className="my-5 display-3 fw-bold ls-tight px-3" 
      style={
        {
          color: 'hsl(218, 81%, 75%)',
          textAlign:'center'
          }
          }>
            What Is NASA?
        </h1>

        <p class="text-center">
            NASA stands for National Aeronautics and Space Administration. NASA is a U.S. government agency that is responsible 
            for science and technology related to air and space. The Space Age started in 1957 with the launch of the Soviet 
            satellite Sputnik.
        </p>

        <img
            className="d-block w-100"
            width={150} height={350}
            src={Logo}
        />

        <p class="text-center">
            NASA opened for business on Oct. 1, 1958. The agency was created to oversee U.S. space exploration and aeronautics research.
            The administrator is in charge of NASA. The NASA administrator is nominated by the president and confirmed by a vote in 
            the Senate.
        </p>

        <h2 class="text-center">
            What Does NASA Do?
        </h2>

        <p class="text-center">       
            Many people know something about NASA’s work. But most probably have no idea about how many different things the agency does. 
            Astronauts in orbit conduct scientific research. Satellites help scientists learn more about Earth. Space probes study the 
            solar system and beyond. New developments improve air travel and other aspects of flight. NASA is also beginning a new program 
            to send humans to explore the Moon and Mars. In addition to those major missions, NASA does many other things. The agency 
            shares what it learns so that its information can make life better for people worldwide. For example, companies can use 
            NASA discoveries to create new spinoff products.

            NASA helps teachers prepare students who will be the engineers, scientists, astronauts and other NASA workers of the future. 
            They will be the adventurers who will continue exploration of the solar system and universe. NASA has a tradition of investing 
            in programs and activities that inspire students, educators, families and communities in the excitement and discovery of 
            exploration. NASA offers training to help teachers learn new ways to teach science, technology, engineering and mathematics. 
            The agency also involves students in NASA missions to help them get excited about learning.
        </p>
    </div>
      <br></br>
      <br></br>
      <br></br>


    <div>
        <h2 class="text-center">Featured News</h2>
        <br></br>
            <Container>
                <Row>
                <br></br>
                    <h2>
                        AI for Earth: How NASA’s Artificial Intelligence and Open Science Efforts Combat Climate Change
                    </h2>
                    <Col>
                        <img
                            className="d-block w-100"
                            src={Featured1}
                            alt="Second slide"
                        />

                    </Col>
                    <Col>
                        <p> As extreme weather events increase around the world due to climate change, the need for 
                            further research into our warming planet has increased as well. For NASA, climate research 
                            involves not only conducting studies of these events, but also empowering outside researchers 
                            to do the same. The artificial intelligence (AI) efforts spearheaded by the agency offer 
                            a powerful tool to accomplish these goals.
                        
                            2023, NASA teamed up with IBM Research to create an AI geospatial foundation model. 
                            Trained on vast amounts of NASA’s widely used Harmonized Landsat and Sentinel-2 (HLS) 
                            data, the model provides a base for a variety of AI-powered studies to tackle 
                            environmental challenges. In keeping with open science principles, the model is freely 
                            available for anyone to access.
                       
                            Foundation models serve as a baseline from which scientists can develop a diverse set of 
                            applications, enabling powerful and efficient solutions.</p>
                    
                    </Col>
                </Row>

                <br></br>
                <Row>
                    <h2>Join NASA in Celebrating Earth Day 2024 by Sharing a #GlobalSelfie</h2>
                    <br></br>
                    <Col>
                        <p> 
                            NASA invites you — and everyone else on the planet — to take part in a worldwide celebration of Earth Day with 
                            the agency’s #GlobalSelfie event. While NASA satellites constantly look at Earth from space, on Earth Day we’re 
                            asking you to step outside and take a picture of yourself in your corner of the world. Then post it to social
                            media using the hashtag #GlobalSelfie.

                            Bonus points if your #GlobalSelfie features your favorite body of water! About 71% of our Blue Marble is covered 
                            by water, and that water is one of the main reasons why Earth is like no other planet we’ve found in this solar 
                            system, or beyond.

                            Why #GlobalSelfie?

                            NASA astronauts brought home the first ever images of the whole planet from space. Now NASA satellites capture 
                            new images of Earth every second. With Earth-observing missions orbiting our home planet right now, and more set 
                            to launch this year, NASA studies Earth’s atmosphere, land and oceans in all their complexity.

                            For Earth Day, we want everyone to share the planet from their point of view. Need an idea of what kind of picture 
                            to take? Get outside and show us mountains, parks, the sky, rivers, lakes – and you! Wherever you are, there’s 
                            your picture. 
                        </p>
                    
                    </Col>

                    <Col>
                        <img
                            className="d-block w-100"
                            src={Featured2}
                            alt="Second slide"
                        />

                    </Col>
                </Row>

            </Container>
           
                                    
             
    </div>

      <div>
        <h2 class="text-center">
        Discover More Topics From NASA
        </h2>

        <Container>
            <Row>
                <Col>
                    <img
                        className="d-block w-100"
                        src={Discover1}                        
                    />
                </Col>

                <Col>
                    <img
                        className="d-block w-100"
                        src={Discover2}                        
                    />
                </Col>

                <Col>
                    <img
                        className="d-block w-100"
                        src={Discover3}                        
                    />
                </Col>

                <Col>
                    <img
                        className="d-block w-100"
                        src={Discover4}                       
                    />
                </Col>

            </Row>
        </Container>
      </div>
    </>
  );
}
