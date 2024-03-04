import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { MenuItem, Select, FormControl } from "@mui/material";

const BorderedTextField = styled(TextField)({
  "& .MuiInputBase-root": {
    padding: "15px",
    textAlign: "center",
  },
});

export default function FormPropsTextFields() {
  return (
    <Box sx={{ maxHeight: 250, overflowY: "auto" }}>
      <FormControl fullWidth>
        <div
          style={{
            marginBottom: "10px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span
            style={{ alignSelf: "flex-start", color: "gray", fontSize: "10px" }}
          >
            Copy of ID card สำเนาบัตรประชาชน
          </span>
          <TextField
            disabled
            id="outlined-disabled"
            defaultValue=""
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
            style={{ alignSelf: "flex-start", color: "gray", fontSize: "10px" }}
          >
            Copy of houseregistration สำเนาทะเบียนบ้าน
          </span>
          <BorderedTextField
            disabled
            id="outlined-disabled"
            defaultValue="Upload File"
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
            style={{ alignSelf: "flex-start", color: "gray", fontSize: "10px" }}
          >
            Copy of book bank สำเนาสมุดบัญชีธนาคาร
          </span>
          <Select labelId="prefix-label" id="prefix" size="small">
            <MenuItem value={"Mr."}>KBank</MenuItem>
            <MenuItem value={"Mrs."}>SCB</MenuItem>
            <MenuItem value={"Miss"}>BAAC</MenuItem>
            <MenuItem value={"Mr."}>Ibank</MenuItem>
            <MenuItem value={"Mrs."}>GSB</MenuItem>
            <MenuItem value={"Miss"}>TTB</MenuItem>
          </Select>
        </div>

        <div
          style={{
            marginBottom: "10px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TextField
            id="expense-title"
            variant="outlined"
            size="small"
            maxRows={1}
            fullWidth
            placeholder="000-0-00000-0"
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
            style={{ alignSelf: "flex-start", color: "gray", fontSize: "10px" }}
          >
            Copy of houseregistration สำเนาทะเบียนบ้าน
          </span>
          <BorderedTextField
            disabled
            id="outlined-disabled"
            defaultValue="Upload File"
            InputProps={{ style: { fontSize: "10px" } }}
          />
        </div>
      </FormControl>
    </Box>
  );
}
