import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";

export default function CombinedComponent() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div
        style={{
          marginBottom: isExpanded ? "10px" : "3px",
          display: "flex",
          flexDirection: "column",
          transition: "margin-bottom 0.5s ease-in-out",
        }}
      >
        <span
          style={{
            alignSelf: "flex-start",
            fontSize: "10px",
            fontWeight: "bold",
          }}
        >
          Asset information
        </span>
      </div>

      <div
        style={{
          marginBottom: isExpanded ? "10px" : "3px",
          display: "flex",
          flexDirection: "column",
          transition: "margin-bottom 0.5s ease-in-out",
        }}
      >
        <span style={{ alignSelf: "flex-start", fontSize: "10px" }}>
          Asset title
        </span>

        <TextField
          id="asset-title"
          variant="outlined"
          size="small"
          maxRows={1}
          fullWidth
          placeholder="Asset"
          InputProps={{ style: { fontSize: "10px" } }}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "10px",
        }}
      >
        <span style={{ alignSelf: "flex-start", fontSize: "10px" }}>
          Asset Amount / Value
        </span>

        <TextField
          id="asset-amount"
          variant="outlined"
          size="small"
          maxRows={1}
          fullWidth
          placeholder="..."
          InputProps={{ style: { fontSize: "10px" } }}
        />
      </div>

      {isExpanded && (
        <div style={{ marginBottom: "10px" }}>
          <span style={{ alignSelf: "flex-start", fontSize: "10px" }}>
            Asset Additional Information
          </span>

          <TextField
            id="asset-additional"
            variant="outlined"
            size="small"
            maxRows={1}
            fullWidth
            placeholder="..."
            InputProps={{ style: { fontSize: "10px" } }}
          />
        </div>
      )}

      <div style={{ marginBottom: "20px" }}>
        <TextField
          id="asset-additional"
          variant="outlined"
          size="medium"
          maxRows={1}
          fullWidth
          defaultValue="Add more Asset input"
          disabled
          InputProps={{
            startAdornment: (
              <Fab
                size="small"
                color="primary"
                aria-label="add"
                onClick={handleToggleExpand}
              >
                <AddIcon />
              </Fab>
            ),
          }}
          InputLabelProps={{
            style: { color: "black", fontWeight: "bold", fontSize: "10px" },
          }}
          inputProps={{
            style: { color: "black", fontWeight: "bold", fontSize: "10px" },
          }}
        />
      </div>

      <br />
      <br />
      <br />
      <div style={{ borderBottom: "1px solid #ccc", marginBottom: "20px" }} />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "15px",
          fontWeight: "bold",
        }}
      >
        <span>Total Asset Value</span>
        <span>0.00฿</span>
      </div>
      <br />
    </div>
  );
}
