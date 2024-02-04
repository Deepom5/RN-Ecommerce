import { StyleSheet } from "react-native";
import { COLORS } from "../../global/COLORS";

export const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        width: '100%',
        shadowColor: '#000',
        shadowOffset: {height: 5, width: 3},
        elevation: 10,
        shadowOpacity: 1,
        shadowRadius: 1,
    },
    textInput:{
        color: COLORS.primary,
        backgroundColor: COLORS.backgroundGray1,
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
        borderColor: COLORS.primary,
        width: '80%',
        fontSize: 20,
    },
    pressableContainer:{
        width: '25%',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-evenly'
    }
})
