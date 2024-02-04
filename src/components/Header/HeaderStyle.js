import { StyleSheet } from "react-native";
import { COLORS } from "../../global/COLORS";

export const styles = StyleSheet.create({
    container:{
        backgroundColor: COLORS.primary,
        height: 'auto',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text:{
        width: '100%',
        margin: 20,
        marginHorizontal: 30,
        fontSize: 50,
        fontWeight: '500',
        color: COLORS.secondary,
        fontFamily: 'PTSansRegular'
    },
    actionHeaderContainer:{
        width: '20%',
        justifyContent: 'center',
        alignItems:'flex-start',
    },
    buttonBack: {
        padding: 10,
        textAlign:'center',
        opacity: 0.8,
        backgroundColor: COLORS.secondary,
        fontSize: 20,
        borderRadius: 50,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: COLORS.primary
    }

})
