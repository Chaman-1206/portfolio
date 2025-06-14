import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Your project images
import outfit from "../../Assets/Projects/outfit.png";
import ecommerce from "../../Assets/Projects/ecommerce.jpg";
import stock from  "../../Assets/Projects/stock.jpg";

// Original placeholders (from template)
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* Your Project 1 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={outfit}
              isBlog={false}
              title="Outfit Recommendation System"
              description="Flask-based web app that suggests outfits based on real-time weather using OpenWeatherMap API. WhatsApp notifications via Twilio API."
              ghLink="https://github.com/Chaman-1206/weather-Based-Outfit-Recommendation-System"
              demoLink="https://outfit-recommendation.onrender.com/"
            />
          </Col>

          {/* Your Project 2 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E-Commerce Website"
              description="React + Django full-stack e-commerce platform supporting product management, secure checkout, and admin control."
              ghLink="https://github.com/Chaman-1206/E-Commerce-Website"
              demoLink="https://github.com/Chaman-1206/E-Commerce-Website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Image classifier using PyTorch and ResNet34 for plant disease detection. Achieved 98% accuracy."
              ghLink="https://github.com/Chaman-1206/Plant-AI/"
              demoLink="https://github.com/Chaman-1206/Plant-AI/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face & Emotion Detection"
              description="Emotion detection using CNN on FER-2013 dataset. Face detection with OpenCV. Model achieved 60% accuracy."
              ghLink="https://github.com/Chaman-1206/Face-And-Emotion-Detection"
              demoLink="https://github.com/Chaman-1206/Face-And-Emotion-Detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stock}
              isBlog={false}
              title="Stock Price Prediction"
              description="Built a Stock Price Prediction model using machine learning. Utilized historical stock data and time-series analysis to forecast future prices. Implemented LSTM (Long Short-Term Memory) networks for sequential prediction and achieved promising accuracy on test data."
              ghLink="https://github.com/Chaman-1206/Stock-Price-Prediction"
              demoLink="https://github.com/Chaman-1206/Stock-Price-Prediction"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
