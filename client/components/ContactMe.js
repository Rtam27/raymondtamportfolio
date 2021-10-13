import React, { useState, useEffect, useRef } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import {sendContactThunk} from "../store/ContactMe"
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const ContactMe = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Content, setContent] = useState("");
  const dispatch = useDispatch();
  const infoSent = {
    Name,
    Email,
    Content
  }

  function handleName() {
    setName(event.target.value);
  }

  function handleEmail() {
    setEmail(event.target.value);
  }

  function handleContent() {
    setContent(event.target.value);
  }

  function handleSubmit(){
    dispatch(sendContactThunk(infoSent))
    setName("")
    setEmail("")
    setContent("")
  }

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "300ch" },
        }}
        noValidate
        autoComplete="off"
        inputProps={{
          style:{
            display:"flex"
          }
        }}
      >
        <div id="contactmefield">
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            inputProps={{
              onChange: handleName,
              value: Name,
              style: { textAlign: "left" },
            }}
          />

          <TextField
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            inputProps={{
              onChange: handleEmail,
              value: Email,
              style: { textAlign: "left" },
            }}
          />

          <TextField
            id="standard-multiline-flexible"
            label="Message Content"
            multiline
            maxRows={20}
            // value={value}
            // onChange={handleChange}
            inputProps={{
              onChange: handleContent,
              value: Content,

              style: { textAlign: "left", height: 100 },
            }}
          />
        </div>
      </Box>
      <Button
        onClick={() => {
          handleSubmit()
        }}
      >
        Click me
      </Button>
    </div>
  );
};

export default ContactMe;
