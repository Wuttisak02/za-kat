import Box from "@mui/material/Box";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function AssetInformation() {
  return (
    <Box sx={{ maxHeight: 200, overflowY: "auto" }}>
      <FormGroup>
        <span style={{ alignSelf: "flex-start", fontSize: "12px" }}>
          Select documents tosupporting nomination
        </span>

        <FormControlLabel
          control={<Checkbox size="small" />}
          label="Copy of ID card"
          style={{ fontSize: "8px" }}
        />
        <FormControlLabel
          control={<Checkbox size="small" />}
          label="Copy of house registration"
          style={{ fontSize: "8px" }}
        />
        <FormControlLabel
          control={<Checkbox size="small" />}
          label="Copy of book bank"
          style={{ fontSize: "8px" }}
        />
        <FormControlLabel
          control={<Checkbox size="small" />}
          label="Copy of disability card"
          style={{ fontSize: "8px" }}
        />
        <FormControlLabel
          control={<Checkbox size="small" />}
          label="Copy of evidence of load"
          style={{ fontSize: "8px" }}
        />
        <FormControlLabel
          control={<Checkbox size="small" />}
          label="Copy of academic transcript"
          style={{ fontSize: "8px" }}
        />
        <FormControlLabel
          control={<Checkbox size="small" />}
          label="Copy of proof of marriage"
          style={{ fontSize: "8px" }}
        />
        <FormControlLabel
          control={<Checkbox size="small" />}
          label="Evidence of medical treatment"
          style={{ fontSize: "8px" }}
        />
        <FormControlLabel
          control={<Checkbox size="small" />}
          label="Evidence of installment payments"
          style={{ fontSize: "8px" }}
        />
      </FormGroup>
    </Box>
  );
}
