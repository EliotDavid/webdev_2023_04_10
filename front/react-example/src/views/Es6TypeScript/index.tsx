import React from 'react'

export default function Es6Typescript() {
    //# 1. 변수 선언 
    //? 변수를 선언하는 방법
    //? ES6 -> let 변수명;
    //? TS  -> let 변수명: 데이터타입;
    let integer;
    let integer2: number;
    
    //# 2. 상수 선언
    //? 상수를 선언하는 방법
    //? ES6 -> const 상수명 = 초기값;
    //? TS  -> const 상수명: 데이터타입 = 초기값;
    const INTEGER = 10;
    const INTEGER2: number = 10;

    //^ Typescript의 경우 변수 혹은 상수를 선언과 동시에 초기화하면
    //^ 해당 변수 혹은 상수의 데이터타입을 자동으로 추론함
    //? typeof(변수) -> 해당 변수의 타입을 문자열로 나타내줌 
    console.log(typeof(INTEGER));

    //# 3. 데이터 타입
    //? TS -> string, number, boolean, null, undefined, any, object
    
    //? string: 문자열
    //? 문자열을 표현할 때는 '', "", ``
    let str: string = '10';
    // str = 10;
    const description = "str의 값은 " + str + "입니다.";
    const description2 = `str의 값은 ${str}입니다.`;
    // alert(description2);

    //? number: 숫자
    //? 실수와 정수를 모두 포함
    let num: number = 10;
    // num = 3.14;

    //? boolean: 논리
    let bool: boolean = true;

    //? null: 아무것도 지정되지 않은 상태
    // str = null;
    let n: null = null;

    //? undefined: 정의 되지 않은 상태
    const obj: any = {};
    console.log(obj.a);

    //? any: 모든 타입을 받는 타입
    let variable: any = 'str';
    variable = 10;

    //? object: 객체 타입 (Java의 Object class와 동일)
    let object: object = {};
    object = { a: 10 };
    object = [10, 20];
    // object = null;
    // object = 10;
    // object = '10';

    //? | , &
    //? | : 한 변수에 두 개 이상의 데이터타입을 지정해줄 때 사용
    let variable2: string | number | null;
    variable2 = 'str';
    variable2 = 10;
    variable2 = null;

    //! 역으로 생각했을 때 데이터 타입이 지정된 변수는 필수적으로 값이 포함되어 있어야 한다는 뜻
    // let variable3: string = null;
    
    //? & : 한 변수에 두 개의 데이터타입의 속성을 동시에 지정할 때 사용
    interface I1 {
        a: string;
    }
    interface I2 {
        b: number;
    }

    let implement: I1 & I2 = {
        a: 'str',
        b: 10
    }

    //# 4. 연산자
    //? 비교 연산 중 ==, ===(, !=, !===)
    //? == : 데이터타입은 비교하지 않음
    const str1: any = '10';
    const num1: any = 10;
    const flag1 = str1 == num1;
    console.log(flag1);

    //? === : 데이터타입까지 모두 비교함
    const flag2 = str1 === num1;
    console.log(flag2);

    //# 5. if 
    //? if문의 조건
    //? ES6 와 TS에서는 false, '', 0, null, undefined 를 모두 false로 받고 나머지는 모두 true
    const emptyArray: null = null;
    if (!emptyArray) console.log('a');

    //# 6. for 
    //? foreach 반복문
    //? Java -> for(요소데이터타입 변수명: 반복해서접근할배열) {}
    //? TS   -> for(const 변수명 of 반복해서접근할배열) {}
    const numberArray = [1, 2, 3];
    for (const item of numberArray) {
        console.log(item);
    }

  return (
    <div>index</div>
  )
}
