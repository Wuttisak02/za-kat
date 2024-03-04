import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "45ch", overflow: "auto" },
      }}
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

      <div
        style={{
          marginBottom: "10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span
          style={{
            alignSelf: "flex-start",
            color: "gray",
            fontSize: "10px",
          }}
        >
          Details & Descripts
        </span>

        <TextField
          id="contact-person-name"
          variant="outlined"
          size="small"
          maxRows={1}
          fullWidth
          placeholder=""
          InputProps={{ style: { fontSize: "10px" } }}
        />
      </div>
    </Box>
  );
}
