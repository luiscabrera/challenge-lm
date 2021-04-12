import React from "react";
import { Breadcrumbs, Link, Typography } from "@material-ui/core";
import { useStyles } from "./Breadcrumb.style";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const Breadcrumb = () => {
    const classes = useStyles();
    const handleClick = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
    }
    return (
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" className={classes.fontColor} />} aria-label="breadcrumb" className={classes.breadcrumb}>
            <Link className={classes.fontColor} href="/" onClick={handleClick}>
                Material-UI
      </Link>
            <Link className={classes.fontColor} href="/getting-started/installation/" onClick={handleClick}>
                Core
      </Link>
            <Typography className={`${classes.fontColor} ${classes.fontColorBold}`}>Breadcrumb</Typography>
        </Breadcrumbs>
    );
}

export default Breadcrumb;