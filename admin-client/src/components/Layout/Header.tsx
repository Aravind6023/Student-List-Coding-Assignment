import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useMediaQuery, useTheme } from '@mui/material';
import MobileMenuDrawer from '../MobileNavigation/MobileMenuDrawer';

export default function Header() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    return (
        <Box>
            <AppBar position="static" sx={{ boxShadow: 'none', background: 'linear-gradient(90deg, #4ADE80 0%, #3B82F6 100%)', }}>
                <Toolbar sx={{ height: '76px' }} >
                    {isMobile && (
                        <MobileMenuDrawer open={open} toggleDrawer={toggleDrawer} />
                    )}
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize:'18px', fontWeight: '600', padding: { sm : '5px' } }}>
                        Students
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
