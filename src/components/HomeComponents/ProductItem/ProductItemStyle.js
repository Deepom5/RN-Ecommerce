import { StyleSheet } from "react-native";
import { COLORS } from "../../../global/COLORS";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'transparent',
        elevation: 1,
        padding: 10,
        marginHorizontal: 10,
        marginVertical: 20,
        borderWidth: 1,
        borderColor: COLORS.backgroundGray1,
        backgroundColor: COLORS.backgroundGray1,
        borderRadius: 20,
    },
    image:{
        width: '100%',
        height: 150,
        borderRadius: 10
    },
    name:{
        color: COLORS.text,
        fontSize: 20,
        margin: 10,
        textTransform: 'uppercase',
    },
    details:{
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: 'space-between'
    },
    detailsText:{
        fontSize: 30,
        margin: 10,
        color: COLORS.text,
    }

})
