import { StatusBar } from 'expo-status-bar';
import { AntDesign, Fontisto, FontAwesome, Octicons } from '@expo/vector-icons';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import Post from './Post';

export default function App() {
  const [text, setText] = useState('');
  const [emoji, setEmoji] = useState([]);
  const [list, setList] = useState([]);





  function transform(my_Post) {
    return <Post text={my_Post.text} Feeling={my_Post.emoji} />
  }

  function addPost() {
    setList([{ text: text, Feeling: emoji }, ...list])
    setText('')
    setEmoji('')
  }



  return (
    <View style={styles.container}>
      <View style={styles.checkIn}>
        <View style={{ backgroundColor: '#d8d8d8', fontSize: 16, fontWeight: 'bold', width: 130, flexDirection: 'row', alignItems: 'center', marginLeft: 10, marginTop: 4 }}>Text Only <Octicons name="question" size={20} color="black" /></View>
        <View style={{ backgroundColor: '#d8d8d8', fontSize: 16, fontWeight: 'bold', marginLeft: 270, marginTop: -18, borderWidth: 1 }}>Go To Text Only</View>
      </View>
      <View style={styles.line}><AntDesign name="left" size={24} color="white" /><FontAwesome name="sliders" size={24} color="white" padding-left={5} /></View>
      <View style={styles.line2}> <FontAwesome name="search" size={24} color="white" /></View>

      <View style={styles.header}>
        <Image
          style={styles.photo}
          source={require('./assets/fish.jpg')}
        />
        <View style={styles.postDetails}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Mohlabi Johannes</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', }}>
            <Text style={styles.share}>
              <Fontisto name='world-o' size={15} color='#9E9E9E' />
              Public <Octicons name="triangle-down" size={24} color="black" marginVertical={5} /></Text>

          </View>
        </View>

      </View>
      <View style={styles.inputFields}>
        <View style={styles.click}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 50, color: 'black' }}>Create Post</Text>
          <TouchableOpacity onPress={addPost} >
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'blue', marginLeft: 320, marginTop: -20 }}>Post</Text>
          </TouchableOpacity>


        </View>

        <TextInput placeholder='What is on your mind'
          multiline={true}
          style={styles.input} value={text} onChangeText={setText} />


        <TextInput placeholder='Feeling/Activity'
          style={styles.make} value={emoji} onChangeText={setEmoji} />
      </View>


      {list.map(item => transform(item))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d8d8d8',
  },

  checkIn: {
    justifyContent: 'space-between',
    paddingHorizontal: 2
  },

  line: {
    height: 50,
    width: '100%',
    backgroundColor: '#616161',
    marginTop: 5,
    marginVertical: 5,
    borderRadius: 2,
    justifyContent: 'space-between',
    borderWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',

    padding: 10,
  },

  line2: {
    width: '60%',
    height: 30,
    backgroundColor: '#283593',
    alignItems: 'center',
    marginTop: -45,
    borderRadius: 8,
    flexDirection: 'row',
    marginLeft: 80,
    padding: 10,
  },
  inputFields: {
    marginVertical: -10,
    alignItems: 'flex-start',
    width: '100%',
    padding: 10,
    marginBottom: 20,
    justifyContent: 'center',
    paddingHorizontal: 10
  },

  share: {
    color: '#9E9E9E',
    marginRight: 5,
    fontSize: 13,
    borderWidth: 0.1,
    justifyContent: 'space-between',

    paddingHorizontal: 5,
    alignItems: 'center'
  },
  input: {
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: '100%',
    padding: 10,
    marginVertical: 2

  },
  click: {
    alignSelf: 'flex-end',
    paddingHorizontal: 18,
    marginTop: -55,
  },

  make: {
    borderWidth: 1,
    paddingHorizontal: 10
  },

  photo: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 30,
  },
  header: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 5
  },

});
