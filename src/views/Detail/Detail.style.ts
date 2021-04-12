import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../assets/colors";

export const useStyles = makeStyles(() => ({
    container: {
        backgroundColor: colors.GREY_EEE_MELI,
        height: "100%"
    },
    item: {
        backgroundColor: colors.WHITE,
    },
    textoCantidadTipo: {
        fontSize: 14,
        color: colors.GREY_666_MELI
    },
    textoTituloProducto: {
        fontSize: 24,
        color: colors.GREY_333_MELI,
        fontWeight: "bold"
    },
    precio: {
        fontSize: 46,
        color: colors.GREY_333_MELI,
    },
    button: {
        marginTop: 32,
        paddingRight: 32
    },
    paddingLeft32: {
        paddingLeft: 32
    },
    marginTop32: {
        marginTop: 32,
    },
    marginTop16: {
        marginTop: 16,
    },
    fontSize14: {
        fontSize: 14
    },
    fontSize24: {
        fontSize: 24
    },
    fontSize46: {
        fontSize: 46
    },
    fontSize28: {
        fontSize: 28
    },
    color999: {
        color: colors.GREY_999_MELI
    },
    color666: {
        color: colors.GREY_666_MELI
    },
    color333: {
        color: colors.GREY_333_MELI
    }
}));