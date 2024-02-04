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
    profileContainer:{
        width: '100%',
        justifyContent:'center',
        alignItems:'center'
    },  
    imageProfileContainer:{
        width: '50%',
        justifyContent:'center',
        alignItems:'center'
    },  
    image:{
        height: 200,
        width: 200,
        borderRadius: 300,
        marginBottom: 20
    },
    cameraButton: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 10,
        padding: 10,
        paddingHorizontal: 5,
        backgroundColor: COLORS.secondary
    },
    buttonText: {
        fontSize: 20,
        color: COLORS.primary,
        alignSelf:'center'
    },
    userInfoContainer:{
        marginTop: 20,
        width: '100%',
        justifyContent:'center',
        alignItems:'center'
    },
    infoText:{
        fontSize: 30,
        color: COLORS.secondary
    }
})