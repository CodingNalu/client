import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, Logo, FormRow } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage.js";
import { useAppContext } from "../context/appContext.js";
//global state
const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};
//toggle Member field
const Register = () => {
  const [values, setValues] = useState(initialState);
  //get the global state
  const {
    setupUser,
    user,
    displayAlert,
    isLoading,
    showAlert,
    registerUser,
    loginUser,
  } = useAppContext();
  //create an instance of useNavigate
  const navigate = useNavigate();
  //handler
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }
    const currentUser = { name, email, password };
    if (isMember) {
      setupUser({
        currentUser,
        endPoint: "login",
        alertText: "Login Successful! Redirecting...",
      });
    } else {
      setupUser({
        currentUser,
        endPoint: "register",
        alertText: "User Created ! Redirecting ...",
      });
    }
  };
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user, navigate]);

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        {/* Control h3 content by using toggleMember */}
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {/* Alert component */}
        {showAlert && <Alert />}
        {
          // if user is a member, while logging in , type into name is not neccessary
          // name field
          !values.isMember && (
            <FormRow
              type="text"
              value={values.name}
              name="name"
              handleChange={handleChange}
              labelText="name"
            />
          )
        }
        {/* email field */}
        <FormRow
          type="email"
          value={values.email}
          name="email"
          handleChange={handleChange}
          labelText="email"
        />
        {/* password field */}
        <FormRow
          type="password"
          value={values.password}
          name="password"
          handleChange={handleChange}
          labelText="password"
        />
        <button className="btn btn-block" type="submit">
          submit
        </button>
        <p>
          {values.isMember ? "Not a member yet ? " : "Already a member? "}
          <button
            type="button"
            onClick={toggleMember}
            className="member-btn"
            disabled={isLoading}
          >
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
