import React from "react";
import { CircularProgress, Grid, Typography } from "@material-ui/core";
import { useParams } from "react-router";
import useObtainItemById from "../../hooks/obtainItemById.hook";
import useObtainDescriptionById from "../../hooks/obtainDescriptionById.hook";
import Search from "../Search/Search.view";
import { useStyles } from "./Detail.style"
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb.component";
import { texts } from "../../assets/texts";
import ButtonBlue from "../../components/ButtonBlue/ButtonBlue.component";

interface ParamTypes {
    id: string;
}

const Details = () => {
    const { id } = useParams<ParamTypes>();
    const item = useObtainItemById(id);
    const description = useObtainDescriptionById(id);
    const classes = useStyles();

    const isNew = (val: string | undefined) => {
        if (val === "new")
            return texts.NUEVO;
        return texts.USADO;
    }

    return (
        <Grid container justify="center" className={classes.container}>
            <Search />
            {item !== undefined && description !== undefined ?
                <>
                    <Grid item xs={11}>
                        <Grid container justify="flex-start">
                            <Grid item xs={11}>
                                <Breadcrumb />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={11} className={classes.item}>
                        <Grid container direction="row">
                            <Grid item xs={8}>
                                <img src={item.thumbnail} alt="Imagen producto" width={680} />
                            </Grid>
                            <Grid item xs={4}>
                                <Grid container direction="column">
                                    <Grid item xs={12} className={classes.marginTop32}>
                                        <Typography className={classes.textoCantidadTipo}>
                                            {`${isNew(item.condition)} - ${item.sold_quantity} vendidos`}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} className={classes.marginTop16}>
                                        <Typography className={classes.textoTituloProducto}>
                                            {item.title}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} className={classes.marginTop32}>
                                        <Typography className={classes.precio}>
                                            {`$ ${item.price}`}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} className={classes.button}>
                                        <ButtonBlue textButton="Buscar" />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>
                                    {"Descripción del producto"}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>
                                    {description}
                                </Typography>
                            </Grid>

                        </Grid>
                    </Grid>
                </>
                :
                <CircularProgress />
            }
        </Grid>
    );
}

export default Details;