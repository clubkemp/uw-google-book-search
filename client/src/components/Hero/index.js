import React from "react";
import { Hero, Container, Heading } from 'react-bulma-components';



function HeroBar() {
  
  return (
    <Hero color="primary" >
          <Hero.Body>
            <Container>
              <Heading>
              Reactive Google Books Search
              </Heading>
              <Heading subtitle size={3}>
              Search for and Save Books of Interest
              </Heading>
            </Container>
          </Hero.Body>
        </Hero>
  );
}

export default HeroBar;
