import { StyleSheet } from "react-native";
import { COLORS } from "../../global/COLORS";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        backgroundColor: COLORS.primary,
        alignItems:'center',
        padding: 20
    },
    withOutLocation:{
        width: 'auto',
        height: 200,
        borderWidth: 2,
        padding: 10,
        borderColor: COLORS.secondary,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    textDescription:{
        fontSize: 80
    }
})