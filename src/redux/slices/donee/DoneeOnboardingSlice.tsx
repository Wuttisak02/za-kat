import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../RouteStore";
import { DoneeInfoResponse } from "../../../types/DoneeManagementTypes"

const initialState: DoneeInfoResponse = {
    userId: 0,
    userName: "",
    email: "",
    firstName: "",
    lastName: ""
}

const doneeOnboardingSlice = createSlice({
    name: "doneeOnboarding",
    initialState,
    reducers: {
        updateStep1_1: (state, action: PayloadAction<DoneeInfoResponse>) => {
            state.userId = action.payload.userId;
            state.userName = action.payload.userName;
            state.email = action.payload.email;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
        },
        updateStep2_1: (state, action: PayloadAction<DoneeInfoResponse>) => {

        },
        updateStep2_2: (state, action: PayloadAction<DoneeInfoResponse>) => {
            
        }
    }
});

export const { updateStep1_1, updateStep2_1, updateStep2_2 } = doneeOnboardingSlice.actions;
export default doneeOnboardingSlice.reducer;