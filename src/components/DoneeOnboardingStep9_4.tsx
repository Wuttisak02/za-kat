import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Checkbox, FormControlLabel, MenuItem, Select } from "@mui/material";
import { styled } from "@mui/material/styles";

const DarkGrayBox = styled(Box)({
  border: "1px solid #555",
  borderRadius: "4px",
  padding: "10px",
  backgroundColor: "#333333",
  color: "#ffffff",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
  width: "50ch",
});

const GrayBox = styled(Box)({
  border: "1px solid #555",
  borderRadius: "4px",
  padding: "10px",
  backgroundColor: "#333333",
  color: "#ffffff",
  marginTop: "10px",
  width: "100px",
  height: "100px",
});

// ส่วนหลักของ React component
export default function FormPropsTextFields() {
  return (
    <form noValidate autoComplete="off">
      <DarkGrayBox
        sx={{
          maxHeight: 200,
          overflowY: "auto",
          "& .MuiTextField-root": { m: 1, width: "40ch" },
        }}
        component="form"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            color: "gray",
            fontSize: "10px",
          }}
        >
          <span>Photo File:</span>
          <GrayBox />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            color: "gray",
            fontSize: "10px",
          }}
        >
          <div style={{ marginRight: "10px" }}>
            <span>Donee Name:</span>
            <br />
            <TextField
              id="contact-person-name"
              variant="outlined"
              size="small"
              maxRows={1}
              fullWidth
              placeholder=""
              InputProps={{ style: { fontSize: "10px", width: "240px" } }}
            />
          </div>
          <div>
            <span>Recipient Type:</span>
            <br />
            <Select
              sx={{ width: "27ch" }}
              id="recipientType"
              name="recipientType"
              size="small"
            >
              <MenuItem value={"individual"}>Individual</MenuItem>
              <MenuItem value={"juristic"}>Juristic</MenuItem>
            </Select>
          </div>
        </div>
      </DarkGrayBox>
      <br />

      <div>
        <TextField
          disabled
          id="outlined-disabled"
          defaultValue="Please fill in detail and description of the donee of the donation and the surroundings. So that Zakat payers and the committee know the qualification and needs of donors."
          InputProps={{
            style: { fontSize: "10px", width: "445px", height: "100px" },
          }}
        />
      </div>

      <FormControlLabel
        control={<Checkbox size="small" />}
        label="Donee has accepts the condition."
        style={{ fontSize: "8px" }}
      />
    </form>
  );
}
