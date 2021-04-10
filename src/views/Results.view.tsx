import { CircularProgress, Grid, Typography } from "@material-ui/core";
import { Item } from "../models/Item";
import useObtainItems from "../hooks/obtainItems.hook";

interface IProps {
    query: string;
}

const Results = ({ query }: IProps) => {

    const items = useObtainItems(query);

    return (
        <>
            {items.length > 0 ?
                <Grid>
                    {items.map((item: Item, i: number) => <Typography key={i}>{item.title}</Typography>)}
                </Grid>
                :
                <CircularProgress />
            }
        </>
    );
}

export default Results;