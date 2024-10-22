import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Uradi Madhan Babu </span>
            from <span className="purple"> Hyderabad , India.</span>
            <br />
            <br></br>
          👨🏻‍🎓 I'm a 4rd year undergraduate at St Peter's Engineering College, cuftly pursuing a Bachelor of Technology majoring in Computer Science and Engineering specialization (Artificial Intelligence and Machine Learning)
            <br />
            <br></br>
          🌐 I'm very much interested in new technologies and always eager to learn new technologies which enhance my knowledge. I always try to use the Object-Oriented Techniques , Python & Java programming techniques to make the project Generic which can be used not only one time but only the slight modification in my project can be used for different purposes.
            <br />
            <br />
           
          </p>
          

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">U.Madhan Babu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
