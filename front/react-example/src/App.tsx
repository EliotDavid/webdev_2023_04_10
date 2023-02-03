import { useState } from "react";
import KakaoSignIn from "./views/KakaoSignIn";
import NaverSignIn from "./views/NaverSignIn";

import './App.css';

export default function App() {
  const [view, setView] = useState<string>("");
  return (
    <div>
      <button onClick={() => setView('naverSignIn')}>네이버 회원가입 화면</button>
      <div>
        {view === 'naverSignIn' && (<NaverSignIn />)}
        <KakaoSignIn />
      </div>
    </div>
  );
}
