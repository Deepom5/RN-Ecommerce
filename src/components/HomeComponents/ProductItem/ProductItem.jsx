import React, { useEffect ,useState} from 'react';
import {Image, Pressable, Text, Share, TouchableOpacity, View, useWindowDimensions} from 'react-native';
import { styles } from './ProductItemStyle';
import Card from '../../Card/Card';
import { Ionicons } from "@expo/vector-icons"; 

const ProductItem = ({product, navigation}) => {
    const [isLiked, setIsliked] = React.useState(false);
    const toggleLike = (id) =>{
        setIsliked(!isLiked)
    }

    const shareFunc = async (id) => {
        console.log("ID: ", id);
        try {
        
          const result = await Share.share({
            title: "Check out this Product!",
             message: `Check out this Product!  ${id.title} worth ₹ ${id.price}`,
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
    return (
        <Card style={styles.container}>
            <Image 
                style={styles.image}
                source={{uri: product.images[0]}}
            />
            <View>
                <Text style={styles.name}>{product?.title}</Text>
            </View>
            <View style={styles.details}>
                <View>
                    <Text style={styles.detailsText}>₹{product?.price}</Text>
                </View>
                <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 150,
          }}
        >
          <TouchableOpacity onPress={() => toggleLike()}>
            <Ionicons
              name="heart"
              size={24}
              color={isLiked ? "red" : "black"}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => shareFunc(product)}>
            <Ionicons name="share-social" size={24} color="black" />
          </TouchableOpacity>
        </View>
            </View>
        </Card>
    );
}

export default ProductItem;
