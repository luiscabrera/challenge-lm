import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../assets/colors";

export const useStyles = makeStyles(() => ({
    breadcrumb: {
        marginTop: 16,
        marginBottom: 16
    },
    fontColor: {
        color: colors.GREY_999_MELI,
        fontWeight: "normal"
    },
    fontColorBold: {
        fontWeight: "bold"
    }
}));