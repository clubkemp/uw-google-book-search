import React from "react";
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Box, Media, Image, Content} from "react-bulma-components";


function Bookcard({ data }) {
    const {image, title, authors, desc, link } = data
  return (
    <Box>
      <Media>
        <Media.Item renderAs="figure" position="left">
          <Image
            size={64}
            alt="64x64"
            src={image}
          />
        </Media.Item>
        <Media.Item>
          <Content>
            <p>
              <strong>{title}</strong> <small>by {authors.join(", ")}</small>
              <br />
              {desc}
            </p>
            <button onClick={e=>window.open(link, "_blank")}>View</button>
            
          </Content>
        </Media.Item>
      </Media>
    </Box>
  );
}

export default Bookcard;
