import React, { useEffect, useState } from "react";
import styled from 'styled-components'



const Form1 = styled.form`
display:flex;
flex-direction:column;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
padding:5rem;
margin-left:41%;
margin-right:41%;
`

const Error = styled.div`
color:red

`

 function Form(props) {
  const { formValues, handleChange, submit, Disabled, errors } = props;
  return (
    <div>
      
      <Form1 onSubmit={submit}>
      <h1>Login</h1>
        <label htmlFor="name">
          Name
          <input
            className = "Name"
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            className = "email"
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="name">
          Password
          <input
            className = "password"
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="name">
          Terms of Service
          <input
            className = "terms"
            type="checkbox"
            name="terms"
            value={formValues.terms}
            onChange={handleChange}
          />
        </label>
        <button className = 'submit' disabled={Disabled}>Log In</button>
        <Error> {errors.name}</Error>
        <Error> {errors.email}</Error>
        <Error> {errors.password}</Error>

      </Form1>
      
    </div>
  );
}

export default Form