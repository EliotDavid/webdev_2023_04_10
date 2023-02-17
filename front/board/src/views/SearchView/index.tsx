import React, { useEffect } from 'react'

import { Box, Grid, Pagination, Stack, Typography } from '@mui/material'
import PopularCard from 'src/components/PopularCard'
import { useParams } from 'react-router-dom'

export default function SearchView() {

    const { content } = useParams();

    useEffect(() => {
        
    }, [])

  return (
    <Box sx={{ p: '40px 120px', backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        <Box sx={{ fontSize: '24px', fontWeight: 500 }}>
            <Box component='strong'>{content}</Box>
            <Typography component='span' sx={{ fontSize: '24px', fontWeight: 500, opacity: 0.7 }}>에 대한 검색결과 입니다. </Typography>
            <Box component='strong'>12</Box>
        </Box>
        <Box sx={{ pt: '20px', pb: '80px' }}>
            <Grid container spacing={3}>
                <Grid item sm={12} md={8}>
                    <Stack spacing={2}>

                    </Stack>
                </Grid>
                <Grid item sm={12} md={4}>
                    <PopularCard title='연관 검색어' />
                </Grid>
            </Grid>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Pagination count={10} />
        </Box>
    </Box>
  )
}
