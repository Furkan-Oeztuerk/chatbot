import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import thkoelnlogo from '../../images/thkoeln.jpg';

const ImgContainer = styled.div`
  width: 100%;
  height: 3000px;
  
`;

const TitleContainer = styled.div`
  margin-top: 2em;
`

const ButtonContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 5% 0;
`;


const FooterContainer = styled.div`
`

const Text = styled.p`
  font-size: 18px;
`
export default () => (
  <div className="has-text-centered">
    <section class="hero is-dark">
      <div className="fact">
        <ImgContainer>
          <img
            className="thkoelnlogo" src={thkoelnlogo}
          />
        </ImgContainer>
        <TitleContainer>
          <h1 className="title">
          Hallo 👋 und herzlich Willkommen beim Lernbot Prototypen 
          </h1>
        </TitleContainer>
        
        <ButtonContainer>
          <Link to="/Fact">
            <button
              class="button5"
              
            >
         
              <i class="fas fa-history"></i>
              <Text>Version</Text>
            </button>
          </Link>
          <Link to="/Curriculum">
            <button
              class="button5"
              
             
            >
              <i class="fas fa-book"></i>
              <Text>Lehrplan</Text>
            </button>
          </Link>
          <Link to="/Anfahrt">
            <button
              class="button5"
           
            >
              <i class="fas fa-map-marker-alt"></i>
              <Text>Campus Gummersbach</Text>
            </button>
          </Link>
         
        </ButtonContainer>

        <FooterContainer>
          <h2 className="page-title"></h2>
          <p>Made by Furkan Veli ÖZTÜRK</p>
          <p>Praxisprojekt 2021</p>
        
        </FooterContainer>
      </div>
    </section>
  </div>
);
