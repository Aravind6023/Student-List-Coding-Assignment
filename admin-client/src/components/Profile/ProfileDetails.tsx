import React from 'react';
import { Avatar, Box, Stack, Typography, useMediaQuery } from '@mui/material';

const ProfileDetails = () => {
    const isMediumScreen = useMediaQuery('@media (min-width:600px) and (max-width:899px)');

    return (
        <Box sx={{ background: 'linear-gradient(90deg, #1E40AF 0%, #9333EA 100%);', height: '100%', width: '100%' }}>
            <Stack direction='row' alignItems='center' flexWrap='wrap' py={3} px={1}
                sx={{ justifyContent: { xs: 'flex-start', sm: 'center', md: 'flex-start' } }}>
                <Avatar alt='Profile-Image' sx={{ margin: '1rem' }}></Avatar>
                <Box>
                    <Typography variant='h5' sx={{ color: 'white', fontSize: '18px', fontWeight: '600', lineHeight: '28px', textAlign: isMediumScreen ? 'center' : '' }}>Yellow Owl</Typography>
                    <Typography variant='h6' sx={{ fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', color: 'white', fontSize: '14px', fontWeight: '400', lineHeight: '20px', textAlign: isMediumScreen ? 'center' : ''  }}>Admin</Typography>
                </Box>
            </Stack>
        </Box>
    )
}

export default ProfileDetails;