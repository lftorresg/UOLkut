import Container from "../../Components/Container/Container";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import SignUpComp from "../../Components/Form/SignUp";

import { Props } from "../Home/Home";

const SignUp = (props: Props) => {

  return (
    <>
      <Header />
      <Container>
        <SignUpComp onFormSwitch={props.onFormSwitch} />
      </Container>
      <Footer />
    </>
  );
};

export default SignUp;
