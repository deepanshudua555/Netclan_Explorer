import {View, Text, StyleSheet, TextInput, Animated} from 'react-native';
import React, {useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import Slider from '@react-native-community/slider';

const Refine = () => {
  const data = [
    {label: 'Available | Hey Let Us Connect', value: '1'},
    {label: 'Away | Stay Discrete And Watch', value: '2'},
    {label: 'Busy | Do Not Disturb | will Catch Up Later', value: '3'},
    {label: 'SOS | Emergency! Need Assistance! HELP!', value: '4'},
  ];
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [text, setText] = useState(
    'Hi community! I am open to new connections 😊',
  );

  const handleChange = inputText => {
    setText(inputText);
  };
  const [valuee, setValuee] = useState(50);
  const animatedValue = new Animated.Value(valuee);

  const handleValueChange = newValue => {
    setValuee(Math.round(newValue));
    animatedValue.setValue(newValue);
  };
  const translateX = animatedValue.interpolate({
    inputRange: [-12, 100],
    outputRange: [0, 320], // Change the output range based on your UI
  });

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
        placeholder={!isFocus ? 'Select item' : '...'}
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
          height: 100,
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
          marginTop: 30,
          marginBottom: 5,
        }}>
        Select Hyper local Distance
      </Text>

      <View style={styles.sliderContainer}>
        <Animated.Text
          style={[styles.currentValue, {transform: [{translateX}]}]}>
          {valuee}
        </Animated.Text>
        <Slider
          style={{width: '90%', height: 40, marginHorizontal: 25}}
          minimumValue={1}
          maximumValue={100}
          minimumTrackTintColor="#00FF00"
          maximumTrackTintColor="#000000"
          onValueChange={handleValueChange}
          value={valuee}
        />
      </View>
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
});
