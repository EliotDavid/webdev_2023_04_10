// sign-in.store.ts
//# Java Class 또는 React의 컴포넌트의 파일명은 UpperCamelCase를 따랐음
//# Typescript의 경우 특별한 파일의 네이밍 규칙이 지정되어있지 않기 때문에
//# 필수적으로 UpperCamelCase를 사용할 필요가 없음

//# Zustand를 사용하여 스토어 생성
//^ zustand에서 create 요소를 import
import { create } from "zustand";

//# Typescript에서 함수의 타입을 지정하는 방법
//? (매개변수명: 매개변수타입) => 반환타입
interface ISignUpStore {
    email: string;
    password: string;
    passwordCheck: string;
    nickname: string;
    telNumber: string;
    address: string;
    addressDetail: string;
    emailMessage: string;
    setEmail: (str: string) => void;
    setPassword: (str: string) => void;
    setPasswordCheck: (str: string) => void;
    setNickname: (str: string) => void;
    setTelNumber: (str: string) => void
    setAddress: (str: string) => void;
    setAddressDetail: (str: string) => void;

    signUpError: boolean;
    setSignUpError: (signUpError: boolean) => void;

    emailPatternCheck: boolean | null; // 타입스크립트에서는 null만 선언을 해줄 수 없기 떄문에 null 또는 boolean으로 2개로 선언해준거라고 함
    setEmailPatternCheck: (emailPatternCheck: boolean) => void; // 추상메서드를 선언하는 코드인데 각 클래스에는 setter가 있어야하므로 이 추상메서드에 타입이 boolean인 속성이름은 emailPatternCheck이라는걸 받는다는 의미이고 이 추상메서드는 void형태로 return을 해준다는 의미로 쓴 코드라고 함
                                                                // 근데 속성선언은 null값 또는 boolean형태로 받아놓고 인자값의 타입으로 boolean형태로만 받는 이유는 애초에 필수값으로 지정해뒀기 때문에 null값은 존재할 수 없다는 이유이고 속성이 set 될 때는 반드시 그 값이 있어야하므로 이 추상메서드를 선언할 때는 null타입이 아니라 boolean타입만 존재하는 것 같음 
    emailValidate: boolean | null;
    setEmailValidate: (emailValidate: boolean) => void;

    passwordPatternCheck: boolean | null;
    setPasswordPatternCheck: (passwordPatternCheck: boolean) => void;
    passwordValidate: boolean | null;
    setPasswordValidate: (passwordValidate: boolean) => void;
    
    nicknameValidate: boolean | null;
    setNicknameValidate: (nicknameValidate: boolean) => void;

    telNumberPatternCheck: boolean | null;
    setTelNumberPatternCheck: (telNumberPatternCheck: boolean) => void;
    telNumberValidate: boolean | null;
    setTelNumberValidate: (telNumberValidate: boolean) => void;
}

//^ create 메서드를 사용해서 store를 생성
const useStore = create<ISignUpStore>((set) => ({ // 이제 이 ISignUpStore라는 인터페이스로 클래스를 만들기위한 코드인데 여기서<IsginUPStore> 제네릭 앞에 있는 create 메서드는 react에서 제공하는? 타입스크립트에서 제공하는? zustand 객체가 가지고 있는 메서드이고
                                                  // 이 ISginUpStore인터페이스로 useStore라는 클래스(객체)를 만들기 위한 코드라고 함   
    email: '',
    password: '',
    passwordCheck: '',
    nickname: '',
    telNumber: '',
    address: '',
    addressDetail: '',
    emailMessage: '',
    setEmail: (email) => {
        const emailValidator = /^[A-Za-z0-9]*@[A-Za-z0-9]([-.]?[A-Za-z0-9])*\.[A-Za-z0-9]{2,3}$/; // 이거 뭔 뜻이지?
        const isMatched = emailValidator.test(email);
        const emailMessage = isMatched ? '' : '이메일 주소 포맷이 맞지 않습니다.';
        set((state) => ({...state, email, emailMessage}))
    },
    setPassword: (password) => set((state) => ({...state, password})),
    setPasswordCheck: (passwordCheck) => set((state) => ({...state, passwordCheck})),
    setNickname: (nickname) => set((state) => ({...state, nickname})),
    setTelNumber: (telNumber) => set((state) => ({...state, telNumber})),
    setAddress: (address) => set((state) => ({...state, address})),
    setAddressDetail: (addressDetail) => set((state) => ({...state, addressDetail})),

    signUpError: false,
    setSignUpError: (signUpError: boolean) => set((state) => ({...state, signUpError})),

    emailPatternCheck: null, // 이메일패턴체크는 기본값으로 null을 집어넣고
    setEmailPatternCheck: (emailPatternCheck: boolean) => set((state) => ({...state,  emailPatternCheck})),
    emailValidate: null,
    setEmailValidate: (emailValidate: boolean) => set((state) => ({...state, emailValidate})),

    passwordPatternCheck: null,
    setPasswordPatternCheck: (passwordpPatternCheck: boolean) => set((state) => ({...state, passwordPatternCheck:})),
    passwordValidate :null,
    setPasswrodValidate: (passwordValidate: boolean) => set((state) => ({...state, passwordValidate})),

    nicknameValidate: null,
    setNicknameValidate: (passwordValidate: boolean) => set((state) => ({...state, nicknameValidate})),

    telNumberPatternCheck: null,
    setTelNumberPatternCheck: (passwordValidate: boolean) => set((state) => ({...state, telNumberPatternCheck})),
    telNumberValidate: null,
    setTelNumberValidate:  (passwordValidate: boolean) => set((state) => ({...state, telNumberValidate}))


}))

export default useStore;

//# 일반적인 상태를 선언하는 코드
//? const [상태명, set메서드(상태를 변경하는 메서드)] = useState<데이터타입>(초기화값);

//# Zustand를 사용해서 상태를 선언한느 코드
//? const useStore = create<데이터타입>((set) => ({
//?     상태명1: 초기화값,
//?     상태명2: 초기화값,
//?     상태명3: 초기화값,
//?     ...,
//?     set상태명1(상태를 변경하는 메서드): (상태명1) => set((state) => ({...state, 상태명1})),
//?     set상태명2(상태를 변경하는 메서드): (상태명2) => set((state) => ({...state, 상태명2})),
//?     set상태변경(상태를 변경하는 메서드): (상태명1, 상태명2) => set((state) => ({...state, 상태명1, 상태명2})),
//?     ...,
//? }));

//^ 1. const useStore = create((set) => ({ ... }))
//^    :== useState

//^ 2. 상태명: 초기화값,
//^    :== [상태명, ...] = ...(초기화값)

//^ 3. set메서드: (파라미터) => set((state) => ({...state, 파라미터}))
//^    :== [..., set메서드]

//# spread 연산자
//? const { 요소1, 요소2, ... } = 객체;
//? ...객체 : 객체에서 지정한 요소를 제외하고 남은 요소를 객체로 묶음 처리 함
//? const { 요소1, ...묶음객체명 } = 객체;

const mainObj = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
}

const { a, ...subObj } = mainObj;
//? subObj = { b: 1, c: 2, d: 3 };

const setMainObjA = (a: number) => {
    // mainObj.a = a;
    const modifiedObj = {...mainObj, a};
    return modifiedObj;
}
const setMainObjB = (b: number) => {
    // mainObj.a = a;
    const modifiedObj = {...mainObj, b};
    return modifiedObj;
}

const tmpObj = setMainObjA(10);
// {
//     a: 10,
//     b: 1,
//     c: 2,
//     d: 3,
// }