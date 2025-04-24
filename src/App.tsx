import { Fragment, useState, useEffect } from "react";
import LoginForm  from "./components/LoginForm/LoginForm";
import ChatBox from "./components/ChatBox/ChatBox";
import ErrorPage from "./components/ErrorPage/ErrorPage";

function App() {
  const [ isLogin, setLogin ] = useState(false);
  const [ username, setUser ] = useState("");
  const [ isBackendWorking, setBackend ] = useState(false);

  useEffect(() => {
    checkServer(setBackend);
  }, []);

  if(!isBackendWorking) return <ErrorPage />
    
  return isLogin ? (
    <Fragment>
      <ChatBox name={username}/>
    </Fragment>
  ) : (
    <Fragment>
      <LoginForm setName={setUser} setLogin={setLogin} />
    </Fragment>
  );
}

async function checkServer(setBackend: React.Dispatch<React.SetStateAction<boolean>>): Promise<void> {
  try {
    const response: Response = await fetch("https://chatspherebackend.onrender.com/");
    const data = response.text();
    console.log(data);
    setBackend(true);
  } catch (error) {
    console.log(error);
    setBackend(false);
  }

}

export default App