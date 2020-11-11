import React from "react";
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Navbar } from 'react-bulma-components';



function Nav() {
  
  return (
    <Navbar>
        <Navbar.Brand>
          <Navbar.Item renderAs="a" href="#">
            Google Books
          </Navbar.Item>
          <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu >
          <Navbar.Container>
            <Navbar.Item href="/saved">
              Search
            </Navbar.Item>
            <Navbar.Item href="#">
              Saved
            </Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
  );
}

export default Nav;
