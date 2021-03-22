import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Daten
import Greetings from "./data/Greetings";

//Bilder
import diploma from '../images/diploma.gif';


var i = Math.floor(Greetings.length * Math.random()); 



const Matrikelnummercheck = (props) => {

  const {steps} = props;
  const Matrikelnummervalue = steps.Matrikelnummer.value;
  

let ausgabe , Matrikelnummer;
if(Matrikelnummervalue == 11118175){
  ausgabe = ' Willkommen Furkan';
}
else if (Matrikelnummervalue == 1){
ausgabe = ' Willkommen  Emre :)' ;
}
else if (Matrikelnummervalue == 2){

  
  this.setState({
    redirect: 'google.de',
    
    
  })
  }
else{
ausgabe ='Matrikelnummer nicht gefunden';
steps.trigger= '1';


}
  return(



    <div className="Willkommen">

      
       {ausgabe} 
     
        </div>
     
    
   
  
  );
 
};





    

       
const steps = [
  {
    id: '1',
    message: Greetings[i],
    
    trigger: 'diploma',
    
  },
  
  {
    id: 'diploma',
  
    component: (
      <div>    <img src={diploma} alt="loading..."   width="80%"/> </div>
    ),
    trigger: 'Matrikelnummer',
    
  },
  
  {
    id: 'Matrikelnummer',
    user: true,
    validator: (value) => {
      if (isNaN(value)) {
        return 'Matrikelnummer erneut eingeben!';
      }return true;
      
    },   trigger: '3',
  },
   {
      id: '3',
     
      component: <Matrikelnummercheck />,
      trigger: 'sections',
    },
    {
      id: '5',
      message: 'Placholder',
      trigger: 'sections',
    },
    {
      id: 'sections',
      options: [
        { value: 'products', label: 'Algorithmen und Programmierung II 🖥️', trigger: '100' },
        { value: 'strains', label: 'Algorithmen und Programmierung I 💻', },
        { value: 'brands', label: 'Betriebliche Anwendungssysteme I 📚',  },
        { value: 'shops', label: 'Betriebliche Anwendungssysteme II 📱', },
      ],
    },
    {
      id: '100',
      message: 'Welches Thema, liegt dir aktuell schwer?',
 
    },
    
    
    
    
            ];
    

    

    export default steps;