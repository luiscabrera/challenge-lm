import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../assets/colors";

export interface IProps {
    textButton: string,
}

function ButtonBlue({ textButton }: IProps) {
    const classes = useStyles();
    return (
        <Button className={classes.buttonBlue}>
            {textButton}
        </Button>
    )
}

export const useStyles = makeStyles(() => ({
    buttonBlue: {
        color: colors.WHITE,
        backgroundColor: colors.BLUE_MELI,
        width: "100%",
        borderRadius: 4,
        textTransform: 'none',
        fontSize: 18,
        '&:hover': {
            backgroundColor: colors.BLUE_MELI,
        },
        '&:active': {
            backgroundColor: colors.BLUE_MELI,
        },
        '&:focus': {
            backgroundColor: colors.BLUE_MELI,
        }
    },
}));

export default ButtonBlue;
