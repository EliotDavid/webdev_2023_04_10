import { useState } from 'react'
//? Box 컴포넌트 : mui에서 공간을 할당하는 모든 태그를 포함
//? Grid 컴포넌트 : mui에서 공간을 12등분하여 가로 사이즈에 따라 반응형 웹 개발을 지원
//? Typography 컴포넌트 : mui에서 글자를 출력하는 모든 태그를 포함
import { Box, Card, Grid, TextField, Typography, FormControl, InputLabel, Input, InputAdornment, IconButton, Button } from '@mui/material';
import ContentPasteTwoToneIcon from '@mui/icons-material/ContentPasteTwoTone';


export default function LoginView() {
    const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <Box sx={{pr: "120px", pl: "120px"}}>
        <Grid container spacing={2}>
            <Grid item lg={7} sm={12}>
                <Box sx={{display: 'flex', height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <ContentPasteTwoToneIcon sx={{fontSize: 40}} />
                    <Typography variant="h4">환영합니다.</Typography>
                    <Typography variant="h4">HOONS BOARD입니다.</Typography>
                </Box>
            </Grid>
            <Grid item lg={5} sm={12}>
                <Card sx={{height: '630px', mt: '100px', mb: '80px', pt: '50px', pb: '30px', pl: '50px', pr: '50px'}}>
                    {/*//? 카드안의 요소를 분리할 부모 공간 */}
                    <Box display='flex' sx={{height: '100%', flexDirection: 'column', justifyContent: 'space-between'}}>
                        {/*//? 인풋 공간 */}
                        <Box>
                            <Typography variant='h5' fontWeight='900'>로그인</Typography>
                            <TextField sx={{mt: '40px'}} fullWidth label="이메일 주소" variant="standard" />
                            <FormControl fullWidth variant="standard" sx={{ mt: '40px' }}>
                                <InputLabel>비밀번호</InputLabel>
                                <Input
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        onClick={() => setShowPassword(!showPassword)}
                                        >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </Box>
                         {/*//? 버튼 공간 */}
                        <Box>
                            <Button sx={{mb: '20px'}} fullWidth variant="contained" size='large'>로그인</Button>
                            <Typography textAlign={'center'}>신규사용자 이신가요? <Typography component='span' fontWeight={900}>회원가입</Typography></Typography>
                        </Box>
                    </Box>
                </Card>
            </Grid>
        </Grid>
    </Box>
  )
}
