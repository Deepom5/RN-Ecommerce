import React, { useState } from 'react';
import {FlatList, Pressable, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './LocationStyles';
import { useEffect } from 'react';
import * as expoLocation from 'expo-location';
import { Header } from '../../components';

const Location = ({navigation}) => {
    const [location, setLocation] = useState({latitude: '', longitude: ''})
    const [error, setError] = useState('');

    useEffect(() => {
        let hasPermission = verifyLocationPermission();
        if(hasPermission) getPosition();
        else setError ('Access to position was denied');
    }, []);

    const verifyLocationPermission = async () => {
        let {status} = await expoLocation.requestForegroundPermissionsAsync();
        return (status !== 'gerented');
    }

    const getPosition = async () => {
        let location = await expoLocation.getCurrentPositionAsync({});
        setLocation({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
        });
    }

    return (
        <View style={styles.container}>
            <Header title={'Location'} navigation={navigation}/>
            <Text style={styles.textDescription}>My adress</Text>
            {location ? 
                <View style={styles.withOutLocation}>
                    <Text style={styles.textDescription}>{`Lat: ${location.latitude}`}</Text>
                    <Text style={styles.textDescription}>{`Longitude: ${location.longitude}`}</Text>
                </View> 
                : 
                <View style={styles.withOutLocation}>
                    <Text style={styles.textDescription}>{error}</Text>    
                </View>}
        </View>
    );
}


export default Location;
