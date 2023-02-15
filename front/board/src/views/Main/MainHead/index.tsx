import { Box, Card, Grid, Typography } from '@mui/material'
import React from 'react'
import PreviewCard from 'src/components/PreviewCard'

export default function MainHead() {
  return (
    <Box sx={{ pb: '40px' }}>
        {/* 점보트론 텍스트 */}
        <Box sx={{ pt: '80px', pb: '32px', textAlign: 'center' }}>
            <Typography sx={{ fontSize: '40px', fontWeight: 400 }}>Hoons Board에서</Typography>
            <Typography sx={{ fontSize: '40px', fontWeight: 400 }}>다양한 이야기를 나눠보세요.</Typography>
        </Box>
        {/* 주간 TOP 3 게시물 */}
        <Box>
            <Typography sx={{ fontSize: '24px', fontWeight: 400, p: '24px', textAlign: 'center' }}>주간 TOP 3 게시물</Typography>
            <Grid container spacing={3}>
                <Grid item sm={12} md={4}>
                    <PreviewCard />
                </Grid>
                <Grid item sm={12} md={4}>
                    <PreviewCard />
                </Grid>
                <Grid item sm={12} md={4}>
                    <PreviewCard />
                </Grid>
            </Grid>
        </Box>
    </Box>
  )
}
