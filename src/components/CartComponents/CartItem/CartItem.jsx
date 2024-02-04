import React, { useEffect } from 'react';
import {Pressable, Text, TouchableOpacity, View,Image, useWindowDimensions} from 'react-native';
import { styles } from './CartItemStyles';
import Feather from '@expo/vector-icons/Feather';
import { COLORS } from '../../../global/COLORS';
import Card from '../../Card/Card';


const CartItem = ({itemCart, navigation, handleDeleteItem}) => {
console.log(itemCart)
    return (
        <Card style={styles.container}>
            <View>
                <Text style={styles.name}>{itemCart?.title}</Text>
            </View>
            <View style={styles.details}>
            <Image 
                style={styles.image}
                source={{uri: itemCart.images[0]}}
            />
                <View>
                    <Text style={styles.detailsText}>{`Quantity: ${itemCart?.quantity}`}</Text>
                    <Text style={styles.detailsText}>{`Price: ${itemCart?.price}`}</Text>
                </View>
                <TouchableOpacity onPress={() => handleDeleteItem({type:"single",itemId:itemCart.id})}>
                    <Feather name="trash" size={30} color={COLORS.secondary }/>
                </TouchableOpacity>
            </View>
        </Card>
    );
}

export default CartItem;
