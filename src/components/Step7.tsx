import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { Box } from "@mui/material";

export default function AssetInformation() {
  return (
    <>
      {" "}
      <Box sx={{ maxHeight: 200, overflowY: "auto" }}>
        <FormGroup>
          <span style={{ alignSelf: "flex-start", fontSize: "16px" }}>
            Multiple selection
          </span>

          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Zakat administrators"
            style={{ fontSize: "8px" }}
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="The needy"
            style={{ fontSize: "8px" }}
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="The Poor"
            style={{ fontSize: "8px" }}
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Those whose hearts are to be reconciled"
            style={{ fontSize: "8px" }}
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Those in bondage (slaves and captives)"
            style={{ fontSize: "8px" }}
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="The debt-ridden"
            style={{ fontSize: "8px" }}
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="In the cause of God"
            style={{ fontSize: "8px" }}
          />

          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton aria-label="info" size="small">
              <InfoIcon style={{ fontSize: "16px" }} />
            </IconButton>

            <span
              style={{ color: "gray", marginRight: "5px", fontSize: "8px" }}
            >
              Learn more about Zakat type
            </span>
            <span style={{ color: "blue", fontSize: "8px" }}>click</span>
          </div>
        </FormGroup>
      </Box>
    </>
  );
}
