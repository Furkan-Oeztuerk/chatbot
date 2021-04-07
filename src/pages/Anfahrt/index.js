import React from 'react'
import styled from 'styled-components'

import thkoelnlogo from '../../images/thkoeln.jpg';

const Map = styled.div`
  padding: 5%;
`

const ImgContainer = styled.div`
  margin-bottom: 2em;
`

const Info = styled.div`
`

const ButtonContainer = styled.div`
  margin-top: 1em;
  width: 100%;
`

const Text = styled.p`
  font-size: 2em;
`

export default () => (
  <div className="has-text-centered">
    <section class="hero is-dark">
      <Map>
        <ImgContainer>
        <img src={thkoelnlogo} alt="TH Köln Logo Mask" width="150" height="150"   className="thkoelnlogo" />
        </ImgContainer>
        <Info>
          <Text className="title">Sirindhorn International Institute of Technology</Text>
          <Text >Campus Gummersbach</Text>
          <ButtonContainer>
          
            <button class="button is-danger is-rounded is-large generalButton"><i class="fas fa-location-arrow"></i><a href="https://www.google.co.th/maps/place/TH+K%C3%B6ln+%E2%80%93+Campus+Gummersbach/@51.0230306,7.5598698,17z/data=!3m1!4b1!4m5!3m4!1s0x47beb5ea248f0487:0x3548908b4671b4ac!8m2!3d51.0230272!4d7.5620584" target="_blank">Anfahrt</a></button>
          </ButtonContainer>
     
        </Info>
      </Map>
    </section>
  </div>

  
)
