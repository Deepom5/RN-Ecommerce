import { StyleSheet } from "react-native";
import { COLORS } from "../../../global/COLORS";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.secondary,
        padding: 20,
        borderRadius: 25,
        //backgroundColor: 'transparent',
        margin: 10,
        elevation: 1,
    },
    name:{
        color: COLORS.secondary,
        fontSize: 30
    },
    
    image:{
        width: '30%',
        height: 80,
        borderRadius: 10
    },
    details:{
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: 'space-between'
    },
    detailsText:{
        fontSize: 20,
        color: COLORS.secondary,
    }

})
