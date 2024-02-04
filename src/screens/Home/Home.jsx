import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Card, Header, SearchInput } from '../../components'
import { styles } from './HomeStyles'
import { DATA_PRODUCTS } from '../../data/products'
import ProductItem from '../../components/HomeComponents/ProductItem/ProductItem'
import { useSelector } from 'react-redux'
import { useGetProductsByCategoryQuery, useGetProductsQuery } from '../../services/shopAPI'
import { COLORS } from '../../global/COLORS'


const Home = ({navigation}) => {
  const [productsList, setProductsList] = useState([]);
  const [keyword, setKeyword] = useState('');
  const categorySelected = useSelector(state => state.shop.categorySelected)
  const {data, isLoading} = categorySelected === 'all' ? useGetProductsQuery() : useGetProductsByCategoryQuery(categorySelected)

  useEffect(() => {
    if(data && keyword !== ''){
      let productsData = data?.filter(prod => prod.title.includes(keyword));
      setProductsList(productsData)
    } else{
      setProductsList(data)
    }
      
  }, [keyword, data, categorySelected]);

return (
    <View style={styles.container}>
      <Header title={"Home"} navigation={navigation}/>
      <SearchInput
        onSearch={setKeyword}
      />
     
      <View style={styles.productsListContainer}>
        {isLoading ?
          <ActivityIndicator style={styles.loader} size="large" color={COLORS.secondary}/>
        : productsList?.length > 0 
        ?
          <FlatList
            style={styles.flatList}
            numColumns={2}
            horizontal={false}
            data={productsList}
            keyExtractor={item => item.id}
            renderItem={({item}) => 
            <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate("Details", {product: item})}>
              <ProductItem product={item}/>
            </TouchableOpacity>}
          />
        : 
          <Text style={styles.noResultsText}>No results for your search</Text>
        }
      </View>
    </View>
  )
}

export default Home
