import * as React from 'react';
import { Drawer, IconButton, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import TemporaryDrawer from './TemporaryDrawer';
import { MobileMenuBarProps } from '../../types/Types';

const MobileMenuDrawer = ({ open, toggleDrawer }: MobileMenuBarProps) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                <TemporaryDrawer toggleDrawer={toggleDrawer} />
            </Drawer>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                <MenuIcon sx={{ fontSize : 25, paddingLeft : isMobile ? 1.7 : 0}}/>
            </IconButton>
        </>
    );
}

export default MobileMenuDrawer;