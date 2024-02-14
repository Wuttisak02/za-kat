import * as React from "react";
import { useAppDispatch } from "../redux/RouteStore";
import { useNavigate } from "react-router";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Chart from '../components/Chart';
import RecentDeposits from '../components/RecentDeposits';
import RecentDoneeApplication from '../components/RecentDoneeApplications';
import PageTitle from "../components/PageTitle";

export default function DashboardPage() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate;

    return (
        <>
            <PageTitle>Dashboard</PageTitle>
            <Grid container spacing={3}>
                {/* Chart */}
                <Grid item xs={12} md={8} lg={9}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 240,
                        }}
                    >
                        <Chart />
                    </Paper>
                </Grid>
                {/* Recent Deposits */}
                <Grid item xs={12} md={4} lg={3}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 240,
                        }}
                    >
                        <RecentDeposits />
                    </Paper>
                </Grid>
                {/* Recent Donee Application */}
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <RecentDoneeApplication />
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
}
