import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import {Header} from 'react-native-elements';
export default class HomeScreen extends Component{
  render() {
    <TextInput 
    style={styles.inputBox}
    onChangeText={text => {
      this.setState({
        text: text,
        isSearchPressed: false,
        word: "Loading...",
        lexicalCategory :'',
        examples :[],
        definition: ""
      });
    }}
    value={this.state.text}
    />
      
    </TextInput>
    
    <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
      <Text style={styles/detailsTitle}>
        Definition :{" "}
      </Text>
      <Text style={{fontSize:18}}>
        {this.state.definition}
      </Text>
    </View>

    <TouchableOpacity
      style={styles.searchButton}
      onPress={() => {
        this.setState({ isSearchPressed: true});
        this.getWord(this.state.text)
      }}>
    </TouchableOpacity>

    <View style={styles.detailsContainer}>
      <Text style={styles.detailsTitle}>
        Word: {""}
      </Text>
      <Text style={{fontSize:18}}>
        {this.state.word}
      </Text>
    </View>

    <View style={styles.outputBox}>
      <Text style={{fontSize:20}}>
        {
          this.state.isSearchPressed && this.state.word === "Loading..."
          ?this.state.word
          :""
        }
      </Text>
    </View>


  }
  getWord=(word)=>{
    var searchKeyword=word.toLowerCase()
    var url = https://rupinwhitehatjr.github.io/dictionary/%22+searchKeyword+%22.json
    return fetch(url)
    .then((data)=>{
      if(data.status===200)
      {
        return data.json()
      }
      else
      {
        return null
      }
    })

    .then((response)=>{
      var responseObject = response 
      
      if(responseObject)
      {
        var wordData = responseObject.definitions[0]
        var definition = wordData.description
        var lexicalCategory=wordData.wordtype

        this.setState({
          "word":this.state.definition,
          "definition":definition,
          "lexicalCategory": lexicalCategory
        })
      }
      else
      {
        this.setState({
          "word": this.state.text,
          "definition": "Not Found"
        })
      }
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: {
    marginTop: 200,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  displayText: {
    textAlign: 'center',
    fontSize: 30,
  },
  searchButton: {
    width:'60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    margin: 5,
    borderRadius: 10,
    backgroundColor: 'red'
  }
  outputBox: {
    marginTop: 400,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
});