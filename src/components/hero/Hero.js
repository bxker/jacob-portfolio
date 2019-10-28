import React from "react"
import { Jumbotron } from "react-bootstrap"

//import custom styles
import "./hero.css"
import SocialRow from "../SocialRow/SocialRow"

const Hero = () => (
  <Jumbotron style={jumbo_styles} className="jumbo" fluid>
    <div className="jumbo_content">
      <h1>Hey, I'm Jacob. I'm a Web developer from Kentucky, currently residing in Dallas.</h1>
      <br />
      <h3>
        Right now I'm using Javascript, Node.js, React.js and Gatsby.js to
        design and hack noice websites together on the internet.
      </h3>
      <section id="picture-mail-section">
        <p>
        <div>
          <SocialRow />
        </div>
          Let's chat{" "}
          <a href="mailto:hello@jacob.digital">
            <span style={{ color: "green" }}>hello@jacob.digital</span>
          </a>
        </p>
        <img src="https://i.imgur.com/DwLG9iU.jpg" id="my-photo-jacob"></img>
      </section>
    </div>
  </Jumbotron>
)

const jumbo_styles = {
  backgroundColor: "#fff",
  paddingLeft: "1rem",
}

export default Hero
