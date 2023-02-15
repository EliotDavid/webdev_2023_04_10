import { Box } from '@mui/material'
import MainContents from './MainContents'
import MainHead from './MainHead'

export default function Main() {
  return (
    <Box sx={{ pl: '120px', pr: '120px' }}>
        <MainHead />
        <MainContents />
    </Box>
  )
}
