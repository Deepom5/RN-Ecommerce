import { StyleSheet } from "react-native";
import { COLORS } from "../../global/COLORS";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        backgroundColor: COLORS.primary,
        alignItems:'center',
        justifyContent:'center',
    },
    loginContainer: {
        flex:1,
        width: '100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
    loginCard: {
        alignItems:'center',
        flex: 0,
        height:'auto',
        width: '70%',
        padding: 15,
        borderRadius: 20,
    },
    title: {
        color: COLORS.primary,
        fontSize: 30,
    },
    formLabelContainer: {
        marginTop: 10,
        alignItems:'center',
        flexDirection: "row",
        width: '100%',
    },
    formLabel:{
        width: '100%',
        paddingHorizontal: 5,
        fontSize: 15
    },
    formInput: {
        fontSize: 20,
        color: COLORS.secondary,
        borderRadius: 10,
        paddingHorizontal: 5,
        backgroundColor: COLORS.backgroundGray2,
        width: '100%',
        height: 50,
        marginVertical: 15,
    },
    notAccountText:{
        marginBottom: 20,
        marginTop: 20,
        fontSize: 20,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        backgroundColor: COLORS.secondary,
        width: '50%',
        alignSelf: 'center',
    },
    buttonText:{
        alignSelf: 'center',
        fontSize: 20,
        color: COLORS.primary
    }
})