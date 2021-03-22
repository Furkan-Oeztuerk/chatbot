import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

import Routing from "./routes";
import ChatbotApp from "./App";
import styled from 'styled-components'

import thkoelnlogo from '../src/images/thkoeln.jpg';

const NavRightContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items:center;
`
const LogoContainer = styled.div`
  margin-right: 5%;
  margin-left: 1%;

`
const TextContainer = styled.div`
`

const Text = styled.p`
  font-size: 15px;
`
class Main extends Component {
  render() {
    return (
      <div className="Maincontainer">
        <div className="column">
          <nav
              className="navbar is-light navigationBar"
              role="navigation"
              aria-label="main navigation"
            >
              <div className="containerNav">
                <div className="navbar-brand ">
                  <a className="navbar-item navbarIn">
                    <NavLink
                      exact
                      to="/"
                      activeClassName="is-active"
                      className="navbar-item"
                    >
                      <a href="#" class="previous">
                        &laquo; Home
                      </a>
                    </NavLink>
                    <NavRightContainer>
                      <LogoContainer>
                        <img src={thkoelnlogo} />
                      </LogoContainer>
                      <TextContainer>
                        <Text>Chatbot by Furkan</Text>
                      </TextContainer>
                    </NavRightContainer> 
                  </a>
                </div>
              </div>
            </nav>
            <ChatbotApp />
        </div>

        <div className="column2">
          <div className="my-app">
            <Routing />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
