import React, { useState } from 'react';
import {Image, Pressable, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './ProfileStyles';
import { Header } from '../../components';

import { useDispatch, useSelector } from 'react-redux';
import ProfilePicture from '../../../assets/profilePic.png';
import { logOut, setProfileImage } from '../../features/auth/authSlice';

import { deleteSession } from '../../db';
import Feather from '@expo/vector-icons/Feather';
import { COLORS } from '../../global/COLORS';



const Profile = ({navigation}) => {
  const {user, localId, profileImage} = useSelector(state => state.auth);
  // const [triggerSaveProfileImage] = usePostProfileImageMutation();
  const dispatch = useDispatch();



  const handleLogOut = async () => {
    navigation.navigate("Login")
  }

  return (
      <View style={styles.container}>
         <Header title={"Profile"}/>
         <View style={styles.profileContainer}>
            <View style={styles.imageProfileContainer}>
              <Image 
                style={styles.image}
                source={profileImage ? {uri: profileImage } : ProfilePicture}
              />
              <TouchableOpacity style={styles.cameraButton}>
                <Feather name="edit" size={30} color={COLORS.primary}/>
                <Text style={styles.buttonText}>{profileImage ? 'Modify profile picture' : 'Add profile picture'}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.userInfoContainer}>
              <Text style={styles.infoText}>{user}</Text>
              {/* <TouchableOpacity style={[styles.cameraButton, {width: '50%', marginTop: 50}]} onPress={() => navigation.navigate("Location")}>
                <Text style={styles.buttonText}>Location</Text>
              </TouchableOpacity> */}
              <TouchableOpacity style={[styles.cameraButton, {width: '30%', marginTop: 20}]} onPress={handleLogOut}>
                <Text style={styles.buttonText}>Logout</Text>
              </TouchableOpacity>
            </View>

         </View>
      </View>
  );
}


export default Profile;
