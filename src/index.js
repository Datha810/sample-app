//1)import react and reactDom libraries
//2)get the references to the div with ID root
//3)Tell the react to take contro; of that element
//4)Create the componens
//5)Show the components on the screen
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const el =document.getElementById('root');
ReactDOM.createRoot(el).render(<App />);
