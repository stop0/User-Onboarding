import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import Form from './components/Form'



const initialFromValue ={
  Name:"",
  Email:"",
  Password:"",
  TermsofService:false,

};


const initialFromErrors = {
  Name:"",
  Email:"",
  Password:"",
  TermsofService:"",

};




function App() {
  return (
    <div className="App">

    <Form />



    </div>
  );
}

export default App;
