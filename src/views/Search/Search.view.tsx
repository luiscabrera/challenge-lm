import React from "react";
import { Grid } from "@material-ui/core";
import InputSearch from "../../components/InputSearch.component";
import { useStyles } from "./Search.style";
import logoMeli from "../../assets/Logo_ML.png";

const Search = () => {

    const styles = useStyles();

    return (
        <Grid container justify="center" alignItems="center" className={styles.container}>
            <Grid item xs={11}>
                <Grid container justify="space-around" alignItems="center">
                    <Grid item xs={1}>
                        <img src={logoMeli} alt="Logo Mercado Libre" />
                    </Grid>
                    <Grid item xs={11}>
                        <InputSearch />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Search;