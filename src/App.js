import React, { Component } from 'react';

import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

//steps
import steps from './components/steps';

//logos
import thkoelnlogo from './images/thkoelnmask.png';

//theme
import chat_styles from './components/chattheme'

      



class App extends Component {
  render() {
    return (
      <div className="App">

            <ThemeProvider theme={chat_styles}>
               <ChatBot 
                  /*speechSynthesis={{ enable: true, lang: 'de' }}*/
                  steps={steps} 
                  headerTitle="LearnBot by Furkan Öztürk"
                 
                  placeholder="Eingabe.."
                  customDelay="600"
                  botAvatar={thkoelnlogo}
                 
              
            
                 
                />
            </ThemeProvider>
          
        </div>
    );
  }
       
}

export default App;