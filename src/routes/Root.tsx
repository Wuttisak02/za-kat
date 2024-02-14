import { useState } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { useAppDispatch } from "../redux/RouteStore";
import primaryTheme  from "../theme/PrimaryTheme";
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DnsIcon from '@mui/icons-material/Dns';
import Chip from "@mui/material/Chip";

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://www.cogiving.co/">
                CoGiving
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: 280,
            backgroundColor: '#192A41',
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

const CustomListItemButton = styled(ListItemButton)({
    color: 'white'
});

const CustomListItemIcon = styled(ListItemIcon)({
    color: 'white'
});

export default function Root() {
    const [open, setOpen] = useState(true);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const navigateTo = (text: string) => {
        console.log("navigateTo: "+text);
        navigate("/" + text.toLocaleLowerCase());
    };

    const toggleDrawer = () => {
        setOpen(!open);
    };

    const handleLogoutClick = () => {
        //dispatch(logout());
        //navigate("/login");
    };

    return (
        <ThemeProvider theme={primaryTheme}>
            <Box sx={{ display: 'flex'}}>
                <CssBaseline />
                <Drawer variant="permanent" open={open} >
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            px: [1],
                        }}
                    >
                        {open && (
                        <Box sx={{width: '230px', mt: '16px', mb: '10px'}}>
                            <Typography component="h6" variant="h6" color="primary">
                                CoGiving Admin Tool
                            </Typography>
                            <Chip label="Role Name" size="small" sx={{backgroundColor: '#D991B7', color: '#FFFFFF'}} />
                        </Box>
                        )}
                        <IconButton onClick={toggleDrawer} sx={{mt: '22px', mb: '22px'}}>
                            <ChevronLeftIcon sx={{color: '#FFFFFF'}} />
                        </IconButton>
                    </Toolbar>
                    
                    <List component="nav">
                        <CustomListItemButton onClick={() => navigateTo('')}>
                            <CustomListItemIcon>
                                <DashboardIcon />
                            </CustomListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </CustomListItemButton>
                        <CustomListItemButton onClick={() => navigateTo('doneeManagement')}>
                            <CustomListItemIcon>
                                <DnsIcon />
                            </CustomListItemIcon>
                            <ListItemText primary="Donee Management" />
                        </CustomListItemButton>
                    </List>
                </Drawer>
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : '#111418',
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Container maxWidth="lg" sx={{ pt: 0, pb: 4 }}>
                        <Outlet />
                        <Copyright sx={{ pt: 4 }} />
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}