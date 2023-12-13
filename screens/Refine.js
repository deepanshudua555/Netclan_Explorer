import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Animated,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import Slider from '@react-native-community/slider';
import {useNavigation} from '@react-navigation/native';

const Refine = () => {
  const navigation = useNavigation();
  const data = [
    {label: 'Available | Hey Let Us Connect', value: '1'},
    {label: 'Away | Stay Discrete And Watch', value: '2'},
    {label: 'Busy | Do Not Disturb | will Catch Up Later', value: '3'},
    {label: 'SOS | Emergency! Need Assistance! HELP!', value: '4'},
  ];
  const purpose = [
    'Coffee',
    'Business',
    'Hobbies',
    'Friendship',
    'Movies',
    'Dinning',
    'Dating',
    'Matrimony',
  ];
  const [value, setValue] = useState(data[0].value);
  const [isFocus, setIsFocus] = useState(false);
  const [text, setText] = useState(
    'Hi community! I am open to new connections 😊',
  );

  const handleChange = inputText => {
    setText(inputText);
  };
  const [valuee, setValuee] = useState(50);
  const [selectedItems, setSelectedItems] = useState([purpose[0]]);
  const handleItemPress = item => {
    let updatedSelection = [...selectedItems];
    if (updatedSelection.includes(item) && updatedSelection.length > 1) {
      updatedSelection = updatedSelection.filter(selected => selected !== item);
    } else if (!updatedSelection.includes(item)) {
      updatedSelection.push(item);
    }
    setSelectedItems(updatedSelection);
  };
  const isItemSelected = item => {
    return selectedItems.includes(item);
  };

  const handleSavePress = () => {
    console.log(isFocus + text + value + selectedItems + valuee);
    navigation.navigate('explore')
  };

  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
      }}>
      <Text
        style={{
          fontWeight: '500',
          color: '#0e2e43',
          fontSize: 16,
          marginLeft: 25,
          marginTop: 30,
          marginBottom: 5,
        }}>
        Select Your Availability
      </Text>

      <Dropdown
        style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        // search
        maxHeight={300}
        labelField="label"
        valueField="value"
        // placeholder={!isFocus ? 'Select item' : '...'}
        // searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
      <Text
        style={{
          fontWeight: '500',
          color: '#0e2e43',
          fontSize: 16,
          marginLeft: 25,
          marginTop: 30,
          marginBottom: 5,
        }}>
        Add Your Status
      </Text>
      <TextInput
        multiline
        numberOfLines={10}
        placeholder=""
        onChangeText={handleChange}
        value={text}
        maxLength={250}
        style={{
          borderWidth: 1,
          borderColor: '#0e2e43',
          padding: 10,
          marginBottom: 20,
          textAlignVertical: 'top', // Align text to the top
          marginHorizontal: 25,
          borderRadius: 5,
          height: 70,
        }}
      />
      <Text style={{alignSelf: 'flex-end', marginRight: 25}}>
        {text.length}/250
      </Text>
      <Text
        style={{
          fontWeight: '500',
          color: '#0e2e43',
          fontSize: 16,
          marginLeft: 25,
          marginBottom: 5,
        }}>
        Select Hyper local Distance
      </Text>

      <View style={styles.sliderContainer}>
        {/* <Animated.Text
          style={[styles.currentValue, {transform: [{translateX}]}]}>
          {valuee}
        </Animated.Text> */}
        <View style={[styles.thumbTextView, {left: valuee * 3.0}]}>
          <Text style={[styles.thumbText]}>{Math.round(valuee)}</Text>
        </View>
        <Slider
          style={{width: '95%', height: 40, marginLeft: 10}}
          minimumValue={1}
          maximumValue={100}
          minimumTrackTintColor="#0e2e43"
          maximumTrackTintColor="#000000"
          thumbTintColor="#0e2e43"
          value={valuee}
          onValueChange={newValue => setValuee(Math.round(newValue))}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 25,
            marginTop: -10,
          }}>
          <Text style={{color: '#0e2e43'}}>1 km</Text>
          <Text style={{color: '#0e2e43'}}>100 km</Text>
        </View>
      </View>
      <Text
        style={{
          fontWeight: '500',
          color: '#0e2e43',
          fontSize: 16,
          marginLeft: 25,
          marginTop: -70,
          marginBottom: 10,
        }}>
        Select Purpose
      </Text>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          marginLeft: 20,
        }}>
        {purpose.map((item, index) => (
          <TouchableOpacity
            key={item}
            onPress={() => handleItemPress(item)}
            style={{
              marginHorizontal: 10,
              backgroundColor: isItemSelected(item) ? '#0e2e43' : '#fff',
              paddingHorizontal: 10, // Add horizontal padding for spacing
              borderRadius: 50,
              height: 30,
              justifyContent: 'center',
              marginBottom: 10,
              borderColor: '#0e2e43',
              borderWidth: 1,
            }}>
            <Text
              style={{
                color: isItemSelected(item) ? '#fff' : '#0e2e43',
                alignSelf: 'center',
              }}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        onPress={() => handleSavePress()}
        style={{
          marginHorizontal: 10,
          backgroundColor: '#0e2e43',
          paddingHorizontal: 10, // Add horizontal padding for spacing
          borderRadius: 50,
          height: 30,
          justifyContent: 'center',
          marginBottom: 10,
          borderColor: '#0e2e43',
          borderWidth: 1,
          width: '50%',
          alignSelf: 'center',
          marginTop: 15,
        }}>
        <Text style={{color: '#fff', alignSelf: 'center'}}>Save & Explore</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Refine;

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    borderColor: '#0e2e43',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    // marginLeft: 25,
    marginTop: 5,
    marginHorizontal: 25,
  },
  icon: {
    marginRight: 5,
  },

  placeholderStyle: {
    fontSize: 16,
    color: '#0e2e51',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#0e2e51',
  },
  iconStyle: {
    width: 20,
    height: 20,
    tintColor: '#0e2e43',
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  numberInput: {
    height: 100,
    width: '90%',
    fontSize: 14,
    borderColor: '#0e2e43',
    borderWidth: 1,
    color: '#0e2e43',
    marginVertical: 20,
    marginHorizontal: 25,
    borderRadius: 19,
  },
  customThumbStyle: {
    width: 10, // Adjust width of the thumb
    height: 10, // Adjust height of the thumb
    borderRadius: 15, // Make the thumb circular
    borderWidth: 2, // Add a border if desired
    borderColor: '#0e2e43', // Border color of the thumb
  },
  thumbText: {
    fontSize: 16,
    color: '#fff',
    alignSelf: 'center',
  },
  thumbTextView: {
    backgroundColor: '#0e2e43',
    justifyContent: 'center',
    width: '10%',
    height: '20%',
    marginLeft: 10,
  },
});
