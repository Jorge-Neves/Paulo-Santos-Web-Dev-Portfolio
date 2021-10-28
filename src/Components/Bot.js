import React, { useEffect, useState } from "react";
import ChatBot from 'react-simple-chatbot';



function Bot(){



  function Greetings(){
  const greetingsArray = ['Hey', 'Is it High Noon yet?', 'Feeling inspired?','Greetings', 'Happy to see you again']
  const randomGreeting = Math.floor((Math.random() * greetingsArray.length))
  const greeting = greetingsArray[randomGreeting]
  return greeting
}


    return(
      <div>
          
    
        <ChatBot
        speechSynthesis={{ enable: true, lang: 'en' }}
  steps={[
    {
      id: '0',
      message: `User entered the Room...`,
      trigger: '1',
    },
    {
      id: '1',
      message: `${Greetings()}`,
      trigger: '2u',
    },
    {
      id: '2',
      message: 'How can I assist you?',
      trigger: '2u',
    },
    {
      id: '2u',
      options: [
        { value: 1, label: 'contacts', trigger: '3' },
        { value: 2, label: 'Projects', trigger: '4' },
      ],
    },
    {
      id: '3',
      message: "Please select which of Paulo's social media link's you wish to obtain.",
      trigger: '3u'
    },
    {
      id: '3u',
      options: [
        { value: 1, label: 'LinkedIn', trigger: '9' },
        { value: 2, label: 'GitHub', trigger: '10' },
      ],
    },
    {
      id: '4',
      message: "Please select which of Paulo's projects you would like to view.",
      trigger: '4u',
    },
    {
      id: '4u',
      options: [
        { value: 1, label: 'Save the Theatre', trigger: '6' },
        { value: 2, label: 'Quidditch Manager', trigger: '7' },
        { value: 2, label: 'High Noon', trigger: '8' },
      ],
    },
    {
      id: '6',
      message: "Save the Theatre is a vintage RPG styled game developed with: JavaScript || HTML || CSS || DOM Manipulation ",
      trigger: '6u',
    },
    {
      id: '6u',
      component: (
        <div> <a href="https://savethetheatre2021.netlify.app/" target="_blank"><p>Save the Theatre</p></a></div>
      ),
      trigger: '2y',
    },
    {
      id: '7',
      message: "Quidditch manager is a fantasy Sports simulator based on the famous sport from the Harry Potter series developed with: Express | Nodejs | JavaScript | CSS | HTML | Heroku ",
      trigger: '7u',
    },
    {
      id: '7u',
      component: (
        <div> <a href="https://quidditch-manager-project.herokuapp.com/" target="_blank"><p>Quidditch Manager</p></a></div>
      ),
      trigger: '2y',
    },
    {
      id: '8',
      message: "High Noon is an ADHD frindly productivity tool that allows you to track time spent on tasks, skills and keep track of new habits you wish to create.It is a vintage RPG styled game developed with: MERN stack",
      trigger: '8u',
    },
    {
      id: '8u',
      component: (
        <div> <a href="https://highnoontimetracker.netlify.app/" target="_blank"><p>High Noon</p></a></div>
      ),
      trigger: '2y',
    },
    {
      id: '9',
      component: (
        <div> <a href="https://www.linkedin.com/in/paulo-j-santos/" target="_blank"><p>LinkedIn</p></a></div>
      ),
      trigger: '2y',
    },
    {
      id: '10',
      component: (
        <div> <a href="https://github.com/Jorge-Neves" target="_blank"><p>GitHub</p></a></div>
      ),
      trigger: '2y',
    },
    {
      id: '2y',
      message: 'Go back to main menu?',
      trigger: '2w',
    },
    {
      id: '2w',
      options: [
        { value: 1, label: 'Go back', trigger: '2' },
      ],
    },
  ]}
/>
</div>
    )
}

export default Bot;