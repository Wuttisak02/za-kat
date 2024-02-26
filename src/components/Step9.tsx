import { TextField, InputAdornment, IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

export default function MultilineTextFields() {
  return (
    <TextField
      variant="filled"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton aria-label="info" size="small">
              <InfoIcon style={{ fontSize: "16px" }} />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
