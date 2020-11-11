import React from "react";
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Box, Media, Image, Content, Button} from "react-bulma-components";


function Bookcard(props) {
    console.log(props)
    const data = props.data
    const {image, title, authors, desc, link, btnFuntion } = data
    console.log(btnFuntion)
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
              <strong>{title}</strong> <small>by {authors}</small>
              <br />
              {desc}
            </p>
            <Button color="success" onClick={e=>window.open(link, "_blank")}>View</Button>
            {props.btn(data)}
          </Content>
        </Media.Item>
      </Media>
    </Box>
  );
}

export default Bookcard;
