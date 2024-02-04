import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './DetailsStyle';
import { Card, Header } from '../../components'
import { useDispatch } from 'react-redux';
import { addItem } from '../../features/cart/cartSlice';

const Details = ({route, navigation}) => {
  const { product } = route.params;
  const dispatch = useDispatch();

  const handleAddTocart = () => {
    dispatch(addItem({...product,quantity: 1}))
  }

  return (
    <View style={styles.container}>
      <Header title={'Details'} navigation={navigation}/>
        <Card style={styles.cardContainer}>
          <Image 
            style={styles.image}
            source={{uri: product.images[0]}}
            />
          <Text   style={[styles.title, styles.textStyle]}>{product.title}</Text>
          <Text  style={[styles.description, styles.textStyle]}>{product.description}</Text>
          <Text  style={[styles.price, styles.textStyle]}>${product.price}</Text>
          <TouchableOpacity onPress={() => {
            navigation.navigate("Home")
            handleAddTocart()}} style={styles.addCartButton}>
            <Text style={styles.buttonText}> Add to cart </Text>
          </TouchableOpacity>
      </Card>
    </View>
  )
}

export default Details
