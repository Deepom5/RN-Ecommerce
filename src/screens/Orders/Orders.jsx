import React from 'react';
import {ActivityIndicator, FlatList, Pressable, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './OrdersStyle';
import { CartItem, Header } from '../../components';
import { useGetOrdersQuery } from '../../services/shopAPI'
import { useSelector } from 'react-redux';
import { COLORS } from '../../global/COLORS';


const Orders = ({navigation}) => {
    const user = useSelector(state => state.auth.user);
    const {data, isLoading} = useGetOrdersQuery(user);

    return (
        <View style={styles.container}>
            <Header title={'Orders'} navigation={navigation}/>
            {isLoading ?
                <ActivityIndicator style={styles.loader} size="large" color={COLORS.secondary}/>
            : data?.length > 0 ?
            <FlatList
                style={styles.flatList}
                data={data}
                keyExtractor={itemCart => itemCart.id}
                renderItem={({itemCart}) => <CartItem navigation={navigation} itemCart={itemCart}/>}
            />
            :
            <Text style={styles.noResultsText}>You didn't buy anything yet</Text>
            }  
        </View>
    );
}


export default Orders;
