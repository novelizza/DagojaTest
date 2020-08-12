import React, { Component, Profiler } from 'react';
import {Text, View, Image, TextInput} from 'react-native';

const App = () => {
  return (
    <View>
      <View style={{width:80, height:80, backgroundColor:'#3498db'}} />
      <Text>ACFA</Text>
      <Text>Tipat</Text>
      <Tiban />
      <Text>CIA</Text>
      <Gambar />
      <TextInput style={{borderWidth: 1}} />
      <Kotakan />
      <Profile />
    </View>
  );
};

const Tiban = () => {
  return (
    <View>
      <Text>Nabenn</Text>
      <Text>Arvee</Text>
    </View>
  );
};

const Gambar = () => {
  return <Image source={{uri: 'https://placeimg.com/100/100/tech'}} style={{width: 100, height: 100}}/>
};

class Kotakan extends Component {
  render(){
    return <Text>Coba Class</Text>;
  }
}

class Profile extends Component {
  render(){
    return <Image source={{uri: 'https://placeimg.com/100/100/people'}} style={{width: 100, height: 100, borderRadius: 50}}/>
  }
}

export default App;
