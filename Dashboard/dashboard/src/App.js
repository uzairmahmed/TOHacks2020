import React, {useState} from "react";
import Tweet from "./Tweet";

function App(){

    const [user, setUser] = useState([
        { name: "Niranjan", message: "Hi"},
        { name: "Nirangutan", message: "Hey"},
        { name: "Niran", message: "Hello"}
    ]);

  return (
    <div className="app">
      {user.map(user=> (
        <Tweet name={user.name} message = {user.message}/>
      ))}
    </div>
  );    
}




export default App;