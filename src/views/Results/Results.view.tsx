import React from "react";
import { CircularProgress, Grid, Typography } from "@material-ui/core";
import { Item } from "../../models/Item";
import useObtainItems from "../../hooks/obtainItems.hook";
import { Link } from "react-router-dom";

interface IProps {
    query: string;
}

const Results = ({ query }: IProps) => {

    const items = useObtainItems(query);

    return (
        <>
            {items.length > 0 ?
                <Grid>
                    {items.map((item: Item, i: number) => {
                        return (
                            <Link to={"/items/" + item.id}>
                                <Typography key={i}>
                                    {item.title}
                                </Typography>
                            </Link>)
                    })
                    }
                </Grid>
                :
                <CircularProgress />
            }
        </>
    );
}

export default Results;