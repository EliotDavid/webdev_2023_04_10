import { useState } from 'react'

import { Button, IconButton } from "@mui/material"
import { styled } from '@mui/material/styles';
import { IconButtonProps } from '@mui/material/IconButton';

import DeleteIcon from '@mui/icons-material/Delete';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AlarmOutlinedIcon from '@mui/icons-material/AlarmOutlined';

//# MUI 
//? Material User Interface
//? 구글의 머터리얼 디자인을 구현하는 오픈 소스 '리액트 컴포넌트' 라이브러리
//? 인스톨 즉시 배포 환경에서 사용할 수 있는 사전 구축된 컴포넌트의 모음
//? 디자인적으로 아름답고 다양한 사용자 정의 옵션을 제공

//? npm install @mui/material @emotion/react @emotion/styled

//# Mui styled method 
//? mui component들의 style을 지정해주는 메서드
const CustomIconButton = styled(IconButton)<IconButtonProps>();

export default function Mui() {

    const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);

  return (
    <>
        {/*
        //# Button Component 
        //? import { Button } from '@mui/material';
        //? import Button from '@mui/material/Button';
        //^ Props
        //^ 1. variant: 버튼의 형태 ('text', 'contained', 'outlined')
        //? text: 문자로만 표기한 버튼
        //? contained: 배경색이 지정된 버튼 
        //? outlined: 테두리만 지정된 버튼
        */}
        <Button variant='text'>Text Button</Button>
        <Button variant='contained'>Contained Button</Button>
        <Button variant='outlined'>Outlined Button</Button>
        {/*
        //? Mui의 Button Component는 기본적으로 inline 방식
        //^ 2. fullWidth
        //? Button Component를 Block 형태로 지정 (가로 사이즈 100%)
        */}
        <Button fullWidth>Full Width Button</Button>
        {/*
        //^ 3. disabled 
        //? 버튼을 사용하지 못하도록 막아주는 Props
        */}
        <Button variant='contained' disabled={true}>Disable true Button</Button>
        <Button variant='contained' disabled={false}>Disable false Button</Button>
        
        <Button variant='contained' disabled={buttonDisabled} fullWidth>Disabled Button</Button>
        <Button onClick={() => setButtonDisabled(!buttonDisabled)}>Click!</Button>
        {/*
        //^ 4. size 
        //? Button size를 mui에서 지정되어있는 사이즈로 지정할 때
        //? small, medium, large
        */}
        <Button variant='contained' size='small'>Small Button</Button>
        <Button variant='contained' size='medium'>Medium Button</Button>
        <Button variant='contained' size='large'>Large Button</Button>
        {/*
        //^ 5. Icon (startIcon, endIcon)
        //? Button 내부에 시작 혹은 종료 지점에 Icon을 추가하고 싶을 때 지정
        //? 값: Icon Componenet
        //! npm install @mui/icons-material 을 추가해야 MUI Icon을 사용할 수 있음 
        */}
        <Button variant='outlined' startIcon={(<DeleteIcon />)}>Delete</Button>
        <Button variant='contained' endIcon={(<SearchOutlinedIcon />)}>Search</Button>
        {/*
        //# IconButton Component 
        //? Button을 Icon으로만 구성하고자 할 때 사용하는 컴포넌트
        //? Button Component의 모든 기능을 동일하게 사용 가능
        //? 자식 컴포넌트에 Icon Componet가 와야함
        //? import { IconButton } from '@mui/material';
        //? import IconButton from '@mui/material/IconButton'; 
        */}
        <IconButton>
            <AlarmOutlinedIcon />
        </IconButton>
        {/*
        //^ Color 
        //? default, primary, success..
        */}
        <IconButton color='primary'>
            <AlarmOutlinedIcon />
        </IconButton>
        <IconButton color='error'>
            <AlarmOutlinedIcon />
        </IconButton>
        {/*
        //^ Color Customization
        */}
        <IconButton color='error'>
            <AlarmOutlinedIcon />
        </IconButton>
    </>
  )
}
