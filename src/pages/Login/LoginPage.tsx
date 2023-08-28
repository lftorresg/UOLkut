import Container from "../../Components/Container/Container";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

import Form from "../../Components/Form/Form";
import Card from "../../Components/Card/Card";
import { useState } from "react";
import SignUpPg from "../SignUp/SignUp";

const Login = () => {

  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName: string) => {
    setCurrentForm(formName);
  };

  return (
    <>
      <Header />
      <Container>
        <Card />
        {currentForm === "login" ? (
          <Form onFormSwitch={toggleForm} />
        ) : (
          <SignUpPg onFormSwitch={toggleForm} />
        )}
      </Container>
      <Footer />
    </>
  );
};

export default Login;
