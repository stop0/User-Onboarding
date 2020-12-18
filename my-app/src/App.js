import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import * as yup from "yup";
import formSchema from "./components/formSchema";
import axios from "axios";
import './App.css'

const defaultValues = {
  name: "",
  email: "",
  password:"",
  terms:""
};
const defaultErrors = {
  name: "",
  email: "",
  password:"",
  terms: "",
};

function App() {
  const [formValues, setFormValues] = useState(defaultValues);
  const [savedFormInfo, setSavedFormInfo] = useState([]);
  const [errors, setErrors] = useState(defaultErrors);
  const [Disabled, setDisabled] = useState(true);
  const [post, setPost] = useState([]);
  const change = (evt) => {
    const { name, value } = evt.target;
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]:
        evt.target.type === "checkbox" ? evt.target.checked : evt.target.value,
    });
  };
  const submit = (evt) => {
    evt.preventDefault();
    axios.post("https://reqres.in/api/users", formValues).then((res) => {
      setPost(res.data);
      console.log(res.data);
    });
    const newData = {
      name: formValues.name.trim(),
      email: formValues.email.trimEnd(),
      password: formValues.password.trimEnd()
    };
    setSavedFormInfo([...savedFormInfo, newData]);
    setFormValues(defaultValues);
  };
  const validate = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        setErrors({ ...errors, [name]: "" });
      })
      .catch((err) => {
        setErrors({ ...errors, [name]: err.errors[0] });
      });
  };
  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);
  return (
    <div className="App">
      <Form
        formValues={formValues}
        change={change}
        submit={submit}
        Disabled={Disabled}
        errors={errors}
      />
    </div>
  );
}

export default App;