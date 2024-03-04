import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

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

      <div>
        <span
          style={{
            alignSelf: "flex-start",
            color: "gray",
            fontSize: "10px",
          }}
        >
          Additional Photo (Limit 5 filles)
        </span>
        <TextField
          disabled
          id="outlined-disabled"
          defaultValue="Used as an image to accompapy the recipient's details."
          InputProps={{ style: { fontSize: "10px" } }}
          variant="outlined"
          size="small"
        />

        <TextField
          id="contact-person-name"
          variant="outlined"
          size="small"
          maxRows={1}
          fullWidth
          placeholder=""
          InputProps={{ style: { fontSize: "10px" } }}
        />
        <TextField
          id="contact-person-name"
          variant="outlined"
          size="small"
          maxRows={1}
          fullWidth
          placeholder=""
          InputProps={{ style: { fontSize: "10px" } }}
        />
        <TextField
          id="contact-person-name"
          variant="outlined"
          size="small"
          maxRows={1}
          fullWidth
          placeholder=""
          InputProps={{ style: { fontSize: "10px" } }}
        />
        <TextField
          id="contact-person-name"
          variant="outlined"
          size="small"
          maxRows={1}
          fullWidth
          placeholder=""
          InputProps={{ style: { fontSize: "10px" } }}
        />
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