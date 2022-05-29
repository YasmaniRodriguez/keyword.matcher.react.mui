import React from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import TemplateListWidget from "../TemplateListWidget/TemplateListWidget";
import StyledKeywordWidget from "./StyledKeywordWidget";
import Category from "../Category/Category";

const KeywordWidget = () => {
  return (
    <StyledKeywordWidget>
      <Typography className="order-title" variant="h5" component={"h5"}>
        Keywords
      </Typography>
      <Box className="order-content">
        <TemplateListWidget />
        <TextField
          id="keywords"
          // value={props.keyword}
          placeholder="Add keywords to find"
          fullWidth
        />
        <Category />
        <Button
          sx={{ marginLeft: "50%", transform: "translateX(-50%)" }}
          variant="outlined"
        >
          send to process
        </Button>
      </Box>
    </StyledKeywordWidget>
  );
};

export default KeywordWidget;
