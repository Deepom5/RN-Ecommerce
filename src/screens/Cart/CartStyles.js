import { StyleSheet } from "react-native";
import { COLORS } from "../../global/COLORS";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        backgroundColor: COLORS.primary,
        alignItems:'center',
        justifyContent: 'space-between',
        padding: 20,
    },
    flatList:{
        width: '100%'
    },
    finalDetailsContainer:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderTopColor: 'white',
    },
    cartActionsContainer:{
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
    },
    button:{
        width: '100%',
        height: 'auto',
        margin: 5,
        paddingVertical: 5,
        alignItems:'center',
        borderRadius: 20
    },
    buttonConfirm:{
        backgroundColor: COLORS.actionConfirm,
    },
    buttonDelete: {
        backgroundColor: COLORS.actionDelete
    },
    buttonText:{
        fontSize: 30
    },
    finalPriceContainer:{
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    finalPrice:{
        fontSize: 30,
        color: COLORS.secondary
    },
    noResultsText:{
        fontSize: 30,
        textAlign: 'center',
        color: COLORS.backgroundWhite
    }
})