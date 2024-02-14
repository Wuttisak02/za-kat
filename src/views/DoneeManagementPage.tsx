import { useAppDispatch } from "../redux/RouteStore";
import PageTitle from "../components/PageTitle";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Typography from '@mui/material/Typography';
import { useRef, useState } from "react";
import DoneeOnboardingModal from "../components/DoneeOnboardingModal";

export default function DoneeManagementPage() {
    const [doneeOnboardingModalShown, setDoneeOnboardingModalShown] = useState(false);
    const doneeOnboardingButtonRef = useRef<HTMLButtonElement>(null);
    const dispatch = useAppDispatch();

    const showDoneeOnboardingModal = () => {
        setDoneeOnboardingModalShown(true);
    };

    const closeDoneeOnboardingModal = () => {
        setDoneeOnboardingModalShown(false);
    };

    return (
        <>
            <PageTitle>Donee List</PageTitle>
            <Box
                component="section"
                display="flex"
                width="100%"
            >
                <Box sx={{ border: '1px dashed grey' }}>
                    <FilterAltIcon />
                    <Typography variant="caption">Filter</Typography>
                </Box>
                <Box sx={{ border: '1px dashed grey' }}>
                    <Button
                        style={{ textTransform: 'none' }}
                        variant="outlined"
                        ref={doneeOnboardingButtonRef}
                        onClick={showDoneeOnboardingModal}
                    >
                        Create new Donee
                    </Button>
                </Box>
            </Box>
            
            <DoneeOnboardingModal
                isOpen={doneeOnboardingModalShown}
                closeModal={closeDoneeOnboardingModal}
                onSubmit={undefined}
            />

        </>
    );
}