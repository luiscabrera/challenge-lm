import { makeStyles, Theme } from "@material-ui/core";
import { colors } from "../../assets/colors";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        fontSize: 18
    },
    iconButton: {
        padding: 10,
        backgroundColor: colors.GREY_EEE_MELI
    },
}));