import * as React from 'react';
import Box from '@mui/material/Box';
import ProfileDetails from '../Profile/ProfileDetails';
import { TemporaryDrawerProps } from '../../types/Types';

const TemporaryDrawer = ({ toggleDrawer }: TemporaryDrawerProps) => {
    return (
        <Box sx={{ width: 250, height: '100%' }} role="presentation" onClick={toggleDrawer(false)}>
            <ProfileDetails />
        </Box>
    );
}

export default TemporaryDrawer;
