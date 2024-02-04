import React, { useState } from 'react';
import { Pressable, TextInput, View } from 'react-native';
import { styles } from './SearchInputStyle';
import AntDesing from "@expo/vector-icons/AntDesign";

const SearchInput = ({onSearch}) => {
    const [searchInputValue, setSearchInputValue] = useState('');
    
    const search = () => {
        onSearch(searchInputValue);
    }


    const clearInput = () => {
        setSearchInputValue('');
        onSearch('');
    }
    
    return (
        <View style={styles.container}>
            <TextInput
                value={searchInputValue}
                style={styles.textInput}
                onChangeText={setSearchInputValue}
                placeholder="Search product"
            />
            <View style={styles.pressableContainer}>
                <Pressable onPress={search}>
                    <AntDesing
                        name="search1"
                        size={30}
                        color={"white"}
                    />
                </Pressable>
                <Pressable onPress={clearInput}>
                    <AntDesing
                        name="delete"
                        size={30}
                        color={"white"}
                    />
                </Pressable>
            </View>
        </View>
    );
}

export default SearchInput;
