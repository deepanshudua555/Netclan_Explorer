import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import * as Progress from 'react-native-progress';

const Card = ({
  name,
  friendshipStatus,
  place,
  role,
  distance,
  statusBar,
  likes,
  status,
  dataId,
}) => {
  const [friendshipStatuss, setStatus] = useState('INVITE'); // Default status is 'invite'

  const handleToggle = () => {
    setStatus(friendshipStatuss === 'INVITE' ? 'PENDING' : 'INVITE'); 
    console.log(friendshipStatuss);
    // Toggle between 'invite' and 'pending'
  };
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity onPress={handleToggle}>
        <Text
          style={
            friendshipStatuss.toUpperCase() === 'PENDING'
              ? styles.friendshipStatus
              : styles.friendshipStatusI
          }>
          {friendshipStatuss.toUpperCase() === 'INVITE' ? '+ ' : ''}
          {friendshipStatuss.toUpperCase()}
        </Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.dpContainer}>
          <Text style={styles.initials}>
            {name
              .split(' ')
              .map(word => word.charAt(0).toUpperCase())
              .join('')
              .substring(0, 2)}
          </Text>
        </View>
        <View style={{marginTop: -5}}>
          <Text style={{fontWeight: '500', color: '#0e2e43', fontSize: 16}}>
            {name}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#5a7484', fontSize: 14}}>{place} | </Text>
            <Text style={{color: '#5a7484', fontSize: 14}}>{role} </Text>
          </View>
          <Text
            style={{
              color: '#0e2e51',
              fontSize: 14,
              fontWeight: 500,
              marginBottom: 8,
            }}>
            With in {distance} m
          </Text>
          <Progress.Bar
            color="#74858F"
            unfilledColor="#d2d2d2"
            borderColor="#fff"
            progress={statusBar / 100}
            width={150}
            height={15}
            borderRadius={50}
          />
        </View>
      </View>
      <Text
        style={{
          color: '#0e2e51',
          fontSize: 14,
          fontWeight: 500,
          marginLeft: 25,
          // marginTop: 15,
        }}>
        {likes.split(' ').join(' | ')}
      </Text>
      <Text
        style={{
          color: '#5a7484',
          fontSize: 14,
          marginLeft: 25,
          paddingRight: 50,
        }}>
        {status}
      </Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    // minHeight:"30%",
    maxHeight: '40%',
    width: '85%',
    alignSelf: 'center',
    marginLeft: 50,
    marginRight: 15,
    borderRadius: 25,
    // borderWidth:2,
    backgroundColor: '#fff',
    elevation: 5,
    marginVertical: 10,
    // flex:1
    // shadowRadius:25
  },
  dpContainer: {
    height: '80%',
    width: '25%',
    alignSelf: 'flex-start',
    marginLeft: -25,
    marginTop: -20,
    marginRight: 20,
    borderRadius: 15,
    // borderWidth:2,
    backgroundColor: '#b8c5cd',
    elevation: 5,
    // marginVertical: 10,
    justifyContent: 'center',
    // shadowRadius:25
  },
  friendshipStatus: {
    alignSelf: 'flex-end',
    padding: 15,
    fontWeight: '500',
    color: '#999999',
    fontSize: 15,
  },
  friendshipStatusI: {
    alignSelf: 'flex-end',
    padding: 15,
    fontWeight: '500',
    color: '#0e2e51',
    fontSize: 15,
  },
  initials: {
    fontSize: 32,
    fontWeight: '500',
    color: '#133d58',
    alignSelf: 'center',
  },
});
