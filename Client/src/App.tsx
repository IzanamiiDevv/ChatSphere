import { useState, useEffect } from "react";
import Register from "./Component/Register";

export default function App() {
  const [isRegistered, setRegistered] = useState(false);
  const [name, setName] = useState("user");
  const [ChatRoom, setChatRoom] = useState<JSX.Element | null>(null);

  useEffect(() => {
    (async function() {
      try {
        const Chat = await import('./Component/ChatRoom');
        setChatRoom(<Chat.default />);
      } catch (error) {
        console.error("Error loading ChatRoom:", error);
      }
    })();
  }, [isRegistered]);

  return isRegistered ? (
    ChatRoom
  ) : (
    <Register addName={setName} setState={setRegistered}/>
  );
}
