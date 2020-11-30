import React from 'react';
import { render } from 'react-dom';
import {     // These are the components
  StyleSheet,
  View,
  Text,
  Platform
  } from 'react-native';

import Header from './components/Header'

export default class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      todoInput: '', 
      todos: [
        { id: 0, title: 'Walk the dog!', done: false },
        { id: 1, title: 'React Homework!', done: false },
        { id: 2, title: 'Exam: 10:45', done: false }
      ]
    }
  };

  render(){
    return (
        <View style={styles.container}>
    
          {<View style={styles.statusbar}></View>}

          <Header title="< CodingTasks />"/>
          
        </View>
    )

  };

  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  statusbar: {
    backgroundColor: '#FFCE00',
    height: 42

  }

});
