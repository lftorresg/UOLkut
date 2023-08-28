import Login from "../Login/LoginPage";
export type Props = {
  onFormSwitch: (formName: string) => void;
};

function Home() {
  return (
    <Login  />
  );
}

export default Home;
