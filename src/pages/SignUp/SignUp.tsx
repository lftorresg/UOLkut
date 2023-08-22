import Container from "../../Components/Container/Container";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import SignUpComp from "../../Components/Form/SignUp";

export type PropsStep = {
  onFormSwitch: (formName: string) => void;
  onFormStep: (formStep: string) => void;
};

const SignUp = (props: PropsStep) => {

  return (
    <>
      <Header />
      <Container>
        <SignUpComp onFormStep={changeStep} onFormSwitch={props.onFormSwitch} />
      </Container>
      <Footer />
    </>
  );
};

export default SignUp;
