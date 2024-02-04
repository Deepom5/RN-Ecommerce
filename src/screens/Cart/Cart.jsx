import React, { useEffect, useState } from 'react';
import {FlatList, Pressable, Text, TouchableOpacity, View, Share} from 'react-native';
import {styles} from './CartStyles';
import { CartItem, Header } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../../features/cart/cartSlice';
import { Ionicons } from "@expo/vector-icons";

const Cart = ({navigation}) => {
    const {user, localId} = useSelector(state => state.auth)
    const cart = useSelector(state => state.cart.items);
    const total = useSelector(state => state.cart.total); 
   
    
    const dispatch = useDispatch();
    const [itemsCart, setItemsCart] = useState([]);

    const handleDeleteItem = (item) => {
        dispatch(removeItem(item))
    }
    const shareFunc = async (id) => {
       
        var cartShare = id.map( e => {
            
            return e.title
         })
         console.log("cart", cartShare)
        try {
        
          const result = await Share.share({
            message: `Check out this cart! ${cartShare}`,
           
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };
    const handleConfirmCart = () => {
       console.log("buy");
    }

    useEffect(() => {
        setItemsCart(cart)
    }, [cart]);

    return (
        <View style={styles.container}>
            <Header title={'Cart'} navigation={navigation}/>
            {cart?.length > 0 ?
            <FlatList
                style={styles.flatList}
                data={itemsCart}
                keyExtractor={item => item.id}
                renderItem={({item}) => <CartItem navigation={navigation} itemCart={item} handleDeleteItem={handleDeleteItem}/>}
            />: 
                <Text style={styles.noResultsText}>Add some products to your cart!</Text>
            }
            
            <View style={styles.finalDetailsContainer}>
                
                <View style={styles.finalPriceContainer}>
                    <Text style={styles.finalPrice}>{`Total: ₹ ${total}`}</Text>
                    <TouchableOpacity onPress={() => shareFunc(itemsCart)}>
            <Ionicons name="share-social" size={24} color="black" />
          </TouchableOpacity>
                </View>
                <View style={styles.cartActionsContainer}>
                    <TouchableOpacity style={[styles.button, styles.buttonConfirm]} onPress={handleConfirmCart}>
                        <Text style={styles.buttonText}>Buy</Text>
                    </TouchableOpacity >
                    <TouchableOpacity style={[styles.button, styles.buttonDelete]} onPress={() => handleDeleteItem({type:"all", itemId: undefined})}>
                        <Text style={styles.buttonText}>Delete</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}


export default Cart;
