import React from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import { styles } from './HeaderStyle';
import Feather from '@expo/vector-icons/Feather';
import { COLORS } from '../../global/COLORS';

const hasBack = ['Home', 'Cart', "Profile", "Orders"]


const Header = ({title, navigation}) => {
    return (
        <View style={styles.container}>
            
            <View style={styles.actionHeaderContainer}>
                {!hasBack.includes(title) ? 
                    <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.goBack()}>
                            <Feather name="arrow-left" size={20} color={COLORS.primary}/>
                            {/* <Text style={styles.buttonBackText}>
                                back
                            </Text> */}
                    </TouchableOpacity>
                    :<></>
                }
            </View>
            
            <Text style={{...styles.text}}>{title}</Text>
        </View>
    );
}

export default Header;
