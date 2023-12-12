import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Card from '../components/Card';
import {Dialog} from 'react-native-paper';

const Personal = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const hideOpenDialog = () => {
    setOpenDialog(!openDialog);
  };
  const data = [
    {
      name: 'Vishal Dua',
      friendshipStatus: 'Pending',
      place: 'New Delhi',
      role: 'Student',
      distance: '100-200',
      statusBar: 50,
      likes: 'Coffee Business Friendship',
      status: 'Hi community I am open to new connection "😊"',
      _id: '00001',
    },
    {
      name: 'Madhav Gupta',
      friendshipStatus: 'invite',
      place: 'Assam',
      role: 'Software Engineer',
      distance: '10-20',
      statusBar: 30,
      likes: 'Coffee Business Dinning',
      status:
        'Hi community I am open to new connection,I am a student of Btech IT at BVCOE.I have 2+ years of experience in Frontend development. ',
      _id: '00002',
    },
    {
      name: 'Amrender Gill',
      friendshipStatus: 'invite',
      place: 'Assam',
      role: 'Software Engineer',
      distance: '10-20',
      statusBar: 30,
      likes: 'Coffee Business Dinning',
      status:
        'Hi community I am open to new connection,I am a student of Btech IT at BVCOE.I have 2+ years of experience in Frontend development. ',
      _id: '00003',
    },
  ];
  return (
    <>
      <View
        style={{
          backgroundColor: '#fff',
          flex: 1,
          // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        }}>
        <View
          style={{flexDirection: 'row', width: '85%', alignItems: 'center'}}>
          <Icon style={styles.icon} name="search" size={14} color="#Ccd1D7" />
          <TextInput
            style={styles.numberInput}
            selectionColor="#CBD3D9"
            placeholder="search"
          />
          <TouchableOpacity onPress={hideOpenDialog}>
            <Icon name="options-outline" size={28} color="#0e2e43" />
          </TouchableOpacity>
        </View>
        <SafeAreaView style={{flex: 1}}>
          <ScrollView style={{flex: 1}}>
            <View style={{marginBottom: 140}}>
              {data.map(item => (
                <Card
                  key={item._id}
                  name={item.name}
                  friendshipStatus={item.friendshipStatus}
                  place={item.place}
                  role={item.role}
                  distance={item.distance}
                  statusBar={item.statusBar}
                  likes={item.likes}
                  status={item.status}
                  dataId={item._id}
                />
              ))}
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
      <Dialog visible={openDialog} onDismiss={hideOpenDialog}>
      <Dialog.Title>Filter</Dialog.Title>
      </Dialog>
    </>
  );
};

export default Personal;

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 50,
    height: '5%',
    // flex:1,
  },
  numberInput: {
    height: 30,
    width: '90%',
    fontSize: 14,
    borderColor: '#CAD2D7',
    borderWidth: 1,
    color: '#CBD3D9',
    marginVertical: 20,
    marginHorizontal: 20,
    borderRadius: 19,
    paddingLeft: 45,
    paddingVertical: -15,
  },
  icon: {
    position: 'absolute',
    left: 40,
  },
  cardContainer: {
    height: '40%',
    width: '85%',
    alignSelf: 'center',
    marginLeft: 50,
    marginRight: 15,
    borderRadius: 25,
    // borderWidth:2,
    backgroundColor: '#fff',
    elevation: 5,
    marginVertical: 10,
    // shadowRadius:25
  },
});
