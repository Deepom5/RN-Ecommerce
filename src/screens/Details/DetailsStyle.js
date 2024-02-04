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
    cardContainer:{
        borderRadius: 20,
        margin: 10,
        width: '80%',
        height: 'auto',
        backgroundColor: COLORS.backgroundGray1,
        alignItems:'flex-start'
    },
    image:{
        width: '100%',
        height: 300,
        borderRadius: 20,
    },
    textStyle: {
        fontFamily: 'PTSansRegular',
        color: COLORS.primary,
        margin: 5,
        marginHorizontal: 10,
    },
    title:{
        fontSize: 30,
        fontWeight: "bold"
    },
    description: {
        fontSize: 20
    },
    price:{
        fontSize: 30
    },
    addCartButton:{
        // marginTop: 40,
        alignSelf:'center',
        borderRadius: 20,
        padding: 10,
        width: '80%',
        backgroundColor: COLORS.secondary,
        alignItems: 'center'
    },
    buttonText:{
        fontSize: 30,
        color: COLORS.primary,
    }
    
})