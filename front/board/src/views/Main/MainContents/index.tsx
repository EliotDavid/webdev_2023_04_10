import { useEffect, useState } from 'react';

import { Box, Grid, Pagination, Typography, Stack } from '@mui/material'

import BoardListItem from 'src/components/BoardListItem'
import PopularCard from 'src/components/PopularCard'
import { IPreviewItem } from 'src/interfaces';
import { BOARD_LIST } from 'src/mock';

export default function MainContents() {

  const COUNT = 5;

  const [boardList, setBoardList] = useState<IPreviewItem[]>([]);
  const [viewList, setViewList] = useState<IPreviewItem[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);

  //? 한 페이지에 5개의 게시물을 보여주고자 할 때
  //? 배열의 시작 인덱스    5 * pageNumber - 5 -> 5 * (pageNumber - 1)
  //? 배열의 마지막 인덱스  5 * pageNumber - 1

  const onPageHandler = (page: number) => {
    setPageNumber(page);
    const tmpList: IPreviewItem[] = [];

    const startIndex = COUNT * (pageNumber - 1);
    const endIndex = COUNT * pageNumber - 1;

    for (let index = startIndex; index <= endIndex; index++)
      tmpList.push(boardList[index]);

    setViewList(tmpList);
  }


  useEffect(() => {
    setBoardList(BOARD_LIST);

    const tmpList: IPreviewItem[] = [];

    const startIndex = COUNT * (pageNumber - 1);
    const endIndex = COUNT * pageNumber - 1;

    for (let index = startIndex; index <= endIndex; index++)
      tmpList.push(BOARD_LIST[index]);

    setViewList(tmpList);
  }, []);



  return (
    <Box sx={{ p: '40px 120px', backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      <Box>
        <Typography sx={{ fontSize: '24px', fontWeight: 500 }}>최신 게시물</Typography>
      </Box>
      <Box sx={{ pt: '20px', pb: '80px' }}>
        <Grid container spacing={3}>
          <Grid item sm={12} md={8}>
            <Stack spacing={2}>
              {viewList.map((boardItem) => (<BoardListItem item={boardItem} />))}
            </Stack>
          </Grid>
          <Grid item sm={12} md={4}>
            <PopularCard />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination page={pageNumber} count={10} onChange={(event, value) => onPageHandler(value)} />
      </Box>
    </Box>
  )
}
