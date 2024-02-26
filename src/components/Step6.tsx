import * as React from "react";

import TextField from "@mui/material/TextField";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function MultipleSelectPlaceholder() {
  return (
    <div>
      <Box sx={{ maxHeight: 250, overflowY: "auto" }}>
        <FormControl fullWidth>
          <InputLabel id="prefix-label" style={{ fontSize: "8px" }}>
            Tital
          </InputLabel>
          <Select
            labelId="prefix-label"
            id="prefix"
            style={{ fontSize: "8px" }}
          >
            <MenuItem value={"Mr."}>Mr.</MenuItem>
            <MenuItem value={"Mrs."}>Mrs.</MenuItem>
            <MenuItem value={"Miss"}>Miss</MenuItem>
          </Select>
          <br />
          <div
            style={{
              marginBottom: "10px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                alignSelf: "flex-start",
                color: "gray",
                fontSize: "10px",
              }}
            >
              Contact Person Name
            </span>

            <TextField
              id="contact-person-name"
              variant="outlined"
              size="small"
              maxRows={1}
              fullWidth
              placeholder="Contact Person Name"
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
              style={{
                alignSelf: "flex-start",
                color: "gray",
                fontSize: "10px",
              }}
            >
              Entity / Relationship
            </span>

            <TextField
              id="entity-relationship"
              variant="outlined"
              size="small"
              maxRows={1}
              fullWidth
              placeholder="Entity / Relationship"
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
              style={{
                alignSelf: "flex-start",
                color: "gray",
                fontSize: "10px",
              }}
            >
              Phone Number
            </span>

            <TextField
              id="phone-number"
              variant="outlined"
              size="small"
              maxRows={1}
              fullWidth
              placeholder="0-00-000-0000"
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
              style={{
                alignSelf: "flex-start",
                color: "gray",
                fontSize: "10px",
              }}
            >
              Email
            </span>

            <TextField
              id="email"
              variant="outlined"
              size="small"
              maxRows={1}
              fullWidth
              placeholder="Email@service.com"
              InputProps={{ style: { fontSize: "10px" } }}
            />
          </div>
        </FormControl>
      </Box>
    </div>
  );
}
