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
    <>
      <div
        style={{
          marginBottom: isExpanded ? "10px" : "3px",
          display: "flex",
          flexDirection: "column",
          transition: "margin-bottom 0.5s ease-in-out",
        }}
      >
        <span style={{ alignSelf: "flex-start", fontSize: "10px" }}>
          Expense information
        </span>
        <TextField
          id="income-info"
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
        <span style={{ alignSelf: "flex-start", fontSize: "10px" }}>
          Expense title
        </span>
        <TextField
          id="career-title"
          variant="outlined"
          size="small"
          maxRows={1}
          fullWidth
          placeholder="Expense"
          InputProps={{ style: { fontSize: "10px" } }}
        />
      </div>

      <div style={{ display: "flex", marginBottom: "10px" }}>
        <div style={{ flex: 1, marginRight: "10px" }}>
          <span style={{ alignSelf: "flex-start", fontSize: "10px" }}>
            Income
          </span>
          <TextField
            id="career-title-1"
            variant="outlined"
            size="small"
            maxRows={1}
            fullWidth
            placeholder="Income"
            InputProps={{ style: { fontSize: "10px" } }}
          />
        </div>
        <div style={{ flex: 1, marginLeft: "10px" }}>
          <span style={{ alignSelf: "flex-start", fontSize: "10px" }}>
            Amount per month
          </span>
          <TextField
            id="career-title-2"
            variant="outlined"
            size="small"
            maxRows={1}
            InputProps={{
              endAdornment: (
                <span style={{ color: "gray", fontSize: "10px" }}>0.00</span>
              ),
            }}
            placeholder="0.00฿"
            InputLabelProps={{ style: { fontSize: "10px" } }}
          />
        </div>
      </div>

      {isExpanded && (
        <div style={{ marginBottom: "10px" }}>
          <span style={{ alignSelf: "flex-start", fontSize: "10px" }}>
            Amount per month
          </span>
          <TextField
            id="income-per-month"
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
          id="income-per-month"
          variant="outlined"
          size="medium"
          maxRows={1}
          fullWidth
          defaultValue="Add more income input"
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
        }}
      >
        <span>Total Income</span>
        <span>0.00฿</span>
      </div>
    </>
  );
}
