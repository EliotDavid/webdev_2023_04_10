import { MouseEvent, useState } from 'react'

import { Avatar, Box, Divider, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function BoardDetailView() {

    const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const onMenuClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorElement(event.currentTarget);
        setMenuOpen(true);
    }

    const onMenuCloseHandler = () => {
        setAnchorElement(null);
        setMenuOpen(false);
    }

  return (
    <Box sx={{ p: '100px 222px' }}>
        <Box>
            <Box>
                <Typography>Title</Typography>
                <Box>
                    <Box>
                        <Avatar />
                        <Typography></Typography>
                        <Divider orientation='vertical' variant='middle' />
                        <Typography></Typography>
                    </Box>
                    <IconButton onClick={(event) => onMenuClickHandler(event)}>
                        <MoreVertIcon />
                    </IconButton>
                    <Menu anchorEl={anchorElement} open={menuOpen} onClose={onMenuCloseHandler}>
                        <MenuItem sx={{ p: '10px 59px', opacity: 0.5 }}>수정</MenuItem>
                        <Divider />
                        <MenuItem sx={{ p: '10px 59px', color: '#ff0000', opacity: 0.5 }}>삭제</MenuItem>
                    </Menu>
                </Box>
            </Box>
            <Divider />
            <Box></Box>
            <Box></Box>
        </Box>
        <Box></Box>
        <Box></Box>
    </Box>
  )
}
