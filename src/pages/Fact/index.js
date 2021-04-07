import React from 'react'
import styled from 'styled-components'

import thkoelnlogo from '../../images/thkoeln.jpg';

const Fact = styled.div`
  padding: 5%;
`

const ImgContainer = styled.div`
  margin-bottom: 2em;
`

const Info = styled.div`
`

export default () => (
  <div className="has-text-centered">
    <section class="hero is-dark">
      <Fact>
        <ImgContainer>
        <img src={thkoelnlogo} alt="TH Köln Logo Mask" width="150" height="150"   className="thkoelnlogo" />
        </ImgContainer>
        <Info>
          <h1 className="title">SIIT Fact</h1>
          <h1 className="page-title">SIIT offers undergraduate and graduate programs (master and doctoral levels) leading to the Bachelor of Engineering (B.Eng.), Bachelor of Science (B.Sc.), Master of Engineering (M.Eng.), Master of Science (M.Sc.), and Doctor of Philosophy (Ph.D.). The bachelor degree is offered in the following areas: chemical engineering (ChE), civil engineering (CE), computer engineering (CPE), electronics and communication engineering (EC), engineering management (EM), industrial engineering (IE), information technology (IT), management technology (MT), and mechanical engineering (ME).</h1>
        </Info>
      
      </Fact>
     
    </section>
  </div>
)
