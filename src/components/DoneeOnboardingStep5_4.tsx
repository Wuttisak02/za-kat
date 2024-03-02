import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";

export default function CombinedComponent() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
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
          Debt information
        </span>
        <TextField
          id="debt-info"
          variant="outlined"
          size="small"
          maxRows={1}
          fullWidth
          placeholder=""
          InputProps={{ style: { fontSize: "10px" } }}
        />
      </div>

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
          Debt title
        </span>
        <TextField
          id="debt-title"
          variant="outlined"
          size="small"
          maxRows={1}
          fullWidth
          placeholder="Debt"
          InputProps={{ style: { fontSize: "10px" } }}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <span
          style={{
            alignSelf: "flex-start",
            marginBottom: "5px",
            fontSize: "10px",
            fontWeight: "bold",
          }}
        >
          Total Amount / Value
        </span>
        <div style={{ display: "flex", alignItems: "center" }}>
          <TextField
            id="debt-amount"
            variant="outlined"
            size="small"
            maxRows={1}
            fullWidth
            style={{ marginRight: "5px", fontSize: "10px" }}
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position="end"
                  style={{
                    color: "gray",
                    fontSize: "10px",
                    fontWeight: "bold",
                  }}
                >
                  0.00฿
                </InputAdornment>
              ),
            }}
          />
        </div>
      </div>
      <br />

      <div style={{ marginBottom: "20px" }}>
        <TextField
          id="debt-additional"
          variant="outlined"
          size="medium"
          maxRows={1}
          fullWidth
          defaultValue="Add more Debt input"
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

      <div style={{ borderBottom: "1px solid #ccc", marginBottom: "20px" }} />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "15px",
          fontWeight: "bold",
        }}
      >
        <span>Total Debt</span>
        <span>0.00฿</span>
      </div>
    </div>
  );
}
