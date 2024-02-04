import { StyleSheet } from "react-native";
import { COLORS } from "../../global/COLORS";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        backgroundColor: COLORS.primary,
        alignItems:'center',
        padding: 20,
    },
    flatList:{
        width: '100%'
    },
    noResultsText:{
        fontSize: 30,
        textAlign: 'center',
        color: COLORS.backgroundWhite
    }
})