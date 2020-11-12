import React from "react";
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Navbar} from 'react-bulma-components';



function Nav() {
  return (
    <div>
      <Navbar>
        <Navbar.Brand>
          <Navbar.Item renderAs="a" href="#">
            Google Books
          </Navbar.Item>
        </Navbar.Brand>
        
        <Navbar.Menu className="is-active">
          <Navbar.Container>
            <Navbar.Item href="/search">
              Search
            </Navbar.Item>
            <Navbar.Item href="saved">
              Saved
            </Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>

      </Navbar>
      
    </div>
    
      
      
  );
}

export default Nav;
