import { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

interface DoneeOnboardingModalProps {
    isOpen: boolean,
    closeModal: any,
    onSubmit: any
}

export default function DoneeOnboardingModal(props: DoneeOnboardingModalProps) {
    const [currentStep, setCurrentStep] = useState("2.1");

    return (
        <>
            <Modal
                open={props.isOpen}
                onClose={props.closeModal}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box
                    sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}
                >
                    <h2 id="modal-title" style={{ textAlign: 'center' }}>Create New Donee</h2>
                    <div style={{ display: 'flex' }}>
                        <div style={{ flex: 0.1, backgroundColor: 'red' }}>
                            <div>1</div>
                            <div>2</div>
                        </div>
                        <div style={{ flex: 0.9, backgroundColor: 'blue' }}>

                            {currentStep === "1.1" && (
                                <>
                                    <p id="modal-description" style={{ textAlign: 'center' }}>Recipient Type</p>
                                    <InputLabel id="recipient-type-label">Select Recipient Type</InputLabel>
                                    <Select
                                        sx={{ width: 200, color: 'grey' }}
                                        labelId="demo-simple-select-label"
                                        id="recipient-type"
                                    >
                                        <MenuItem value={'individual'}>Individual</MenuItem>
                                        <MenuItem value={'juristic'}>Juristic</MenuItem>
                                    </Select>
                                </>
                            )}

                            {currentStep === "2.1" && (
                                <>
                                    <p id="modal-description" style={{ textAlign: 'center' }}>Personal Information</p>
                                    <FormControl fullWidth>
                                        <InputLabel id="prefix-label">Select an option</InputLabel>
                                        <Select
                                            labelId="prefix-label"
                                            id="prefix"
                                        >
                                            <MenuItem value={'Mr.'}>Mr.</MenuItem>
                                            <MenuItem value={'Mrs.'}>Mrs.</MenuItem>
                                            <MenuItem value={'Miss'}>Miss</MenuItem>
                                        </Select>
                                    </FormControl>
                                </>
                            )}

                        </div>
                    </div>
                    <Button onClick={props.closeModal}></Button>
                </Box>
            </Modal>
        </>);
}