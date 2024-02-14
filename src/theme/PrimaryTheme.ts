import { createTheme } from "@mui/material/styles"; 

const primaryTheme = createTheme ({
    palette : {
        mode: "dark",
        primary: {
            main: '#FFFFFF',
            light: '#FFFFFF',
            dark: '#FFFFFF'
        }
    },
    typography :{
        fontFamily: [
            "DB Helvethaica X",
            "Helvetica", 
            "Arial", 
            "sans-serif"
        ].join(",")
    }
});

export default primaryTheme;