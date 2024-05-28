import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ProfileDetails from '../Profile/ProfileDetails';
import { Stack } from '@mui/material';

const AsideLayout = () => {
    const theme = useTheme();
    const showAside = useMediaQuery(theme.breakpoints.up('sm'));
        
    return (
        <Stack width={{ sm : '20%' }}>
            { showAside && <ProfileDetails/> }
        </Stack>
    )
}

export default AsideLayout;