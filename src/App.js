import React,{useState} from "react";
import PlayList from "./components/playList";
import LoginForm from "./components/logInForm";
import Pop_upvideoContainer from "./components/pop-upVideoConatiner";
import { RecoilRoot } from "recoil";
function App() {
  
  return (
    <RecoilRoot>
      <div className="container">
        <PlayList />
        <LoginForm  />
        <Pop_upvideoContainer  />
      </div>
    </RecoilRoot>
  );
}

export default App;
