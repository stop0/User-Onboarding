import * as yup from "yup";

export default yup.object().shape({
  name: yup.string().required("Please Enter Your Name"),
  email: yup
    .string()
    .email("Whatever Error Message You Want")
    .required("Please Enter Your Email"),
  terms: yup.boolean().oneOf([true], "Whatever Error Message You Want"),
  password: yup
    .string()
    .required("Please Enter Your Password")
});