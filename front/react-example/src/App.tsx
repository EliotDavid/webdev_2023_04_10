// 한줄 주석
/* 공간 주석 가능 */

//ref java method 생성
// 접근제어자 기타제어자 반환타입 메서드명(파라미터) {...}

// typescript method 생성
// (1) function 메서드명(파라미터[: 파라미터 타입])[: 반환타입] {...}

// (2) 자바스크립트, 타입스트립트는 메서드를 변수로 인식함
//     const 메서드명 = (파라미터[: 파라미터 타입])[: 반환타입] => {...}

// (1)
function App() {

  return (
    <div></div>
  );
}

// (2)
// const App = () => {
//   return (
//     <div></div>
//   );
// }

export default App;
