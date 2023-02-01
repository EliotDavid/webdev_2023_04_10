// 한줄 주석
/* 공간 주석 가능 */

//# java method 생성
//? 접근제어자 기타제어자 반환타입 메서드명(파라미터) {...}

//# typescript method 생성
//? (1) function 메서드명(파라미터[: 파라미터 타입])[: 반환타입] {...}

//? (2) 자바스크립트, 타입스트립트는 메서드를 변수로 인식함
//?     const 메서드명 = (파라미터[: 파라미터 타입])[: 반환타입] => {...}

//^ (1)
//! React Component는 TypeScript가 기반 
function App() {

  return (
    /* https://nid.naver.com/user2/V2Join?token_sjoin=f6F5bkH54rXHCGe4&langSelect=ko_KR&termsService=on&termsPrivacy=on&termsLocation=Y */
    /* 레이아웃 구성 */

    /* 컨테이너 레이아웃 */
    <div>
        /* 가운데 레이아웃 */
        <div>
            /* 로고 레이아웃 */
            <div id="logo-container">
                <a id="logo" href="https://naver.com">
                    NAVER
                </a>
            </div>
            /* 컨테이너 레이아웃 */
            <div id="container">
                /* 아이디 레이아웃 */
                <div className="content">
                    <div className="input-label">아이디</div>
                    <div className="inline">
                        <input className="input-style" type="text" />
                    </div>
                </div>
                /* 비밀번호 레이아웃 */
                <div className="content">
                    <div className="input-label">비밀번호</div>
                    <div className="inline">
                        <input className="input-style" type="password" />
                    </div>
                </div>
                /* 비밀번호 확인 레이아웃 */
                <div className="content">
                    <div className="input-label">비밀번호 확인</div>
                    <div className="inline">
                        <input className="input-style" type="password" />
                    </div>
                </div>
                /* 이름 레이아웃 */
                <div className="content">
                    <div className="input-label">이름</div>
                    <div className="inline">
                        <input className="input-style" type="text" />
                    </div>
                </div>
                /* 생년월일 레이아웃 */
                <div className="content">
                    <div className="input-label">생년월일</div>
                    <div className="flex">
                        /* style의 display 요소를 inline으로 적용해서 inline 형식으로 변경 */
                        <div className="flex-1">
                            <input className="input-middle-style" type="number" placeholder="년 (4자리)" />
                        </div>
                        <div className="flex-1">
                            /* select */
                            <select className="input-middle-style">
                                <option>월</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                            </select>
                        </div>
                        <div className="flex-1">
                            <input className="input-middle-style" type="number" placeholder="일" />
                        </div>
                    </div>
                </div>
                /* 버튼 레이아웃 */
                <div className="content">
                    <div className="inline">
                        <button className="join-button">가입하기</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

//^ (2)
// const App = () => {
//   return (
//     <div></div>
//   );
// }

export default App;
