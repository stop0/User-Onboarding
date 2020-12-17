import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import axios from "axios";





function Form() {
  const [user, setUser] = useState({ name: "", email:"", password: "", terms:false });

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(user.name);
    console.log(user.password);
  };

  const formSchema = Yup.object().shape({
    name: Yup
      .string()
      .required("Must include Name."),
    email: Yup
      .string()
      .email("Must be a valid email address.")
      .required("Must include email address."),
    password: Yup
      .string()
      .required("Password is Required")
      .min(6, "Passwords must be at least 6 characters long."),
    terms: Yup
      .boolean()
      .oneOf([true], "You must accept Terms and Conditions")
  });

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [post, setPost] = useState([]);

  const formSubmit = event =>{
    event.preventDefault();
    console.log("submit")
    axios
    .post("https://reqres.in/api/users",formState)
    .then(res => {
        console.log(res.data)
        setPost(res.data)
    })
    .catch(err => {
      console.log(err); 
    });
  

  }









  return (
      
    <div className="App">
              <pre>{JSON.stringify(post, null, 2)}</pre>

      {console.log(user)}
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
        Email:
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            name="password"
            value={user.password}
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
        Terms of Service:
          <input
            type="checkbox"
            name="term"
            value={user.term}
            onChange={event => handleChange(event)}
          />
        </label>
        <button>Submit!</button>
      </form>
    </div>
  );
}

export default Form;