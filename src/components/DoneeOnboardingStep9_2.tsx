import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import DoneeOnboardingStep7_2 from "./DoneeOnboardingStep7_2";

const BorderedTextField = styled(TextField)({
  "& .MuiInputBase-root": {
    padding: "15px",
    textAlign: "center",
  },
});

export default function FormPropsTextFields() {
  return (
    <Box
      sx={{
        maxHeight: 250,
        overflowY: "auto",
        "& .MuiTextField-root": { m: 1, width: "45ch" },
      }}
      component="form"
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          disabled
          id="outlined-disabled"
          defaultValue="Please fill in detail and description of the donee of the donation and the surroundings. So that Zakat payers and the committee know the qualification and needs of donors."
          InputProps={{ style: { fontSize: "10px" } }}
        />
      </div>

      <div>
        <span
          style={{
            alignSelf: "flex-start",
            color: "gray",
            fontSize: "10px",
          }}
        >
          Photo of donee
        </span>
        <TextField
          disabled
          id="outlined-disabled"
          defaultValue="Used for donee profile"
          InputProps={{ style: { fontSize: "10px" } }}
          variant="outlined"
          size="small"
        />
      </div>

      <div>
        <DoneeOnboardingStep7_2 />
      </div>

      <div>
        <span
          style={{
            alignSelf: "flex-start",
            color: "gray",
            fontSize: "10px",
          }}
        >
          Additional Photo (Limit 5 files)
        </span>
        <TextField
          disabled
          id="outlined-disabled"
          defaultValue="Used for donee profile"
          InputProps={{ style: { fontSize: "10px" } }}
          variant="outlined"
          size="small"
        />
      </div>

      <div>
        <DoneeOnboardingStep7_2 />
      </div>
    </Box>
  );
}
