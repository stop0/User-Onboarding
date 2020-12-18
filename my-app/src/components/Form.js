import React, { useEffect, useState } from "react";




 function Form(props) {
  const { formValues, change, submit, Disabled } = props;
  return (
    <div>
      <form onSubmit={submit}>
        <label htmlFor="name">
          Name
          <input
            className = "Name"
            type="text"
            name="name"
            value={formValues.name}
            onChange={change}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            className = "email"
            type="email"
            name="email"
            value={formValues.email}
            onChange={change}
          />
        </label>
        <label htmlFor="name">
          Password
          <input
            className = "password"
            type="password"
            name="password"
            value={formValues.password}
            onChange={change}
          />
        </label>
        <label htmlFor="name">
          Terms of Service
          <input
            className = "terms"
            type="checkbox"
            name="terms"
            value={formValues.terms}
            onChange={change}
          />
        </label>
        <button className = 'submit' disabled={Disabled}>Submit</button>
      </form>
      
    </div>
  );
}

export default Form