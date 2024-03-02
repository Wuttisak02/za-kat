import React from "react";
import Fab from "@mui/material/Fab";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";

export default function CombinedComponent() {
  return (
    <>
      <div
        style={{
          marginBottom: "3px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span style={{ alignSelf: "flex-start", fontSize: "10px" }}>
          Income information
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
          marginBottom: "3px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span style={{ alignSelf: "flex-start", fontSize: "10px" }}>
          Career title
        </span>
        <TextField
          id="career-title"
          variant="outlined"
          size="small"
          maxRows={1}
          fullWidth
          placeholder="Career"
          InputProps={{ style: { fontSize: "10px" } }}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ alignSelf: "flex-start", fontSize: "10px" }}>
          Income per month
        </span>
        <TextField
          id="income-per-month"
          variant="outlined"
          size="small"
          maxRows={1}
          fullWidth
          placeholder="Donee First Name"
          InputProps={{ style: { fontSize: "10px" } }}
        />
      </div>
      <br />

      <div style={{ display: "flex", flexDirection: "column" }}>
        <TextField
          id="income-per-month"
          variant="outlined"
          size="small"
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
                style={{ marginRight: "10px", width: "40px", height: "20px" }}
              >
                <AddIcon style={{ fontSize: "16px" }} />{" "}
              </Fab>
            ),
            style: { fontSize: "10px" },
          }}
          InputLabelProps={{
            style: {
              color: "black",
              fontWeight: "bold",
              fontSize: "10px",
            },
          }}
          inputProps={{
            style: {
              color: "black",
              fontWeight: "bold",
              fontSize: "10px",
            },
          }}
        />
      </div>
      <br />
      <br />
      <br />
      <br />

      <div style={{ borderBottom: "1px solid #ccc", marginBottom: "3px" }} />
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
