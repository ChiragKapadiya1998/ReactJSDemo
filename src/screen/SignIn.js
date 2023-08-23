import {
  Autocomplete,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const top100Films = [
  { label: "Spirited Away", year: 2001 },
  { label: "Saving Private Ryan", year: 1998 },
  { label: "Once Upon a Time in the West", year: 1968 },
  { label: "American History X", year: 1998 },
  { label: "Interstellar", year: 2014 },
  { label: "Casablanca", year: 1942 },
];

const SignIn = () => {
  const [value, setValue] = React.useState(2);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#7FBCD2",
      }}
    >
      <div
        style={{
          display: "flex",
          //  alignItems: 'center',
          //  justifyContent: 'center',
          height: "500px",
          width: "500px",
          backgroundColor: "#FAF7F0",
          flexDirection: "column",
          padding: "16px",
          borderRadius: 10,
          boxShadow:
            "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
        }}
      >
        <h2 style={{ alignSelf: "center" }}>Sign In</h2>
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          style={{ marginTop: "20px" }}
        />
        <Button
          variant="contained"
          size="small"
          style={{
            marginTop: "50px",
            width: "300px",
            alignSelf: "center",
            height: "45px",
          }}
        >
          Log in
        </Button>
        <div style={{flexDirection:'row',display:'flex',alignSelf:'center'}}>

        <h5 style={{ alignSelf: "center" }}>Don't have an account? </h5>
        <h4 onClick={()=>{}} style={{marginLeft:5}}><Link to="/SignUp">Sign Up</Link></h4>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
