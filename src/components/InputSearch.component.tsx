import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import iconSearch from "../assets/ic_Search.png";
import { useStyles } from "./InputSearch.style";
import { IconButton, InputBase } from "@material-ui/core";

const InputSearch = () => {

    const classes = useStyles();
    const [value, setValue] = useState("");

    return (
        <Paper component="form" className={classes.root}>
            <InputBase
                className={classes.input}
                placeholder="Nunca dejes de buscar"
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <img src={iconSearch} alt="Lupa" />
            </IconButton>
        </Paper>
    );
}

export default InputSearch;