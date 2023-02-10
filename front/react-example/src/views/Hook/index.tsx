import React from 'react'

//# Hook -> 함수형 컴포넌트 에서만 동작
//? state와 React 기능을 관리하는 메서드

//^ Hook 함수의 규칙
//? 1. 무조건 함수형 컴포넌트 내에서만 호출할 수 있음
//? 2. 무조건 함수형 컴포넌트 최상위단에서만 호출할 수 있음
//? 3. 조건부로 호출할 수 없음 

export default function Hook() {

    //# 1. useState()
    //? React 컴포넌트 내에서 state를 추적
    //? state를 만들어주는 메서드
    //? import { useState } from 'react';

    //? const [상태명, set메서드] = useState<데이터타입>(초기값);

  return (
    <div>index</div>
  )
}

