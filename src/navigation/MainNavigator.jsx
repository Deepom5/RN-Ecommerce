import React,{useEffect, useState}from 'react';
import AuthNavigator from './AuthNavigator';
import BottomTabNavigator from './BottomTabNavigator';
import { useDispatch, useSelector } from 'react-redux';
import { useGetProfileImageQuery } from '../services/shopAPI';
import { setProfileImage, setUser } from '../features/auth/authSlice';
import { fetchSession } from '../db';

function MainNavigator() {
  const {user, localId} = useSelector(state => state.auth);
  const {data} = useGetProfileImageQuery(localId);
  const dispatch = useDispatch();
  
  useEffect(() => {
    getSession();
  }, []);
  
  useEffect(() => {
    if(data)
      dispatch(setProfileImage(data.image))
  }, [data]);


  const getSession = async () => {
    try {
      const sessions = await fetchSession();
      if(sessions.rows.length > 0){
        const user = sessions.rows._array[0]
        dispatch(setUser(user))
      }
    } catch (error) {
      console.log("Error getting user", error.message)
    }
  }

  return  <BottomTabNavigator/> 
}

export default MainNavigator;