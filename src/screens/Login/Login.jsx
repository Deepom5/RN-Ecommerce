import React, { useState } from 'react';
import {FlatList, Pressable, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './LoginStyles';
import { Card } from '../../components';

import { useDispatch } from 'react-redux';

import Feather from '@expo/vector-icons/Feather';
import { COLORS } from '../../global/COLORS';


const Login = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  


  return (
      <View style={styles.container}>
          <View style={styles.loginContainer}>
            <Card style={styles.loginCard}>
              <Text style={styles.title}>Login to start</Text>
                <View style={styles.formLabelContainer}>
                  <Feather name="mail" size={30} color={COLORS.primary}/>
                  <Text style={styles.formLabel}>Email</Text>
                </View>
                <TextInput style={styles.formInput}  value={email} onChangeText={setEmail} placeholder='example@...'/>
                <View style={styles.formLabelContainer}>
                  <Feather name="lock" size={30} color={COLORS.primary}/>
                  <Text style={styles.formLabel}>Password</Text>
                </View>
                <TextInput style={styles.formInput} value={password} onChangeText={setPassword}/>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
                <Text style={styles.notAccountText}>No have an account?</Text>
                <TouchableOpacity  style={styles.button} onPress={() => navigation.navigate("Signup")}>
                  <Text style={styles.buttonText}>Sign up</Text>
                </TouchableOpacity>
            </Card>
          </View>
          
      </View>
  );
}


export default Login;
