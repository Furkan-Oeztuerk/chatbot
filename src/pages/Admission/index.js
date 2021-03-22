import React from 'react'
import styled from 'styled-components'

const Admission = styled.div`
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
      <Admission>
        <ImgContainer>
          <img src={ '/images/thkoeln.jpg'} alt="DEVAHOY LOGO" width="150" height="150"  />
        </ImgContainer>
        <Info>
          <h1 className="title">Sirindhorn International Institute of Technology</h1>
       
        </Info>
        
      </Admission>
    </section>
  </div>

  
)