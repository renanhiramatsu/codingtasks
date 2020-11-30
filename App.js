/*
             < CODINGTASKS />
Author: Renan Hiramatsu
Website: renanhiramatsu.com
Github: github.com/renanhiramatsu

*/


import React from 'react';
import { render } from 'react-dom';
import {     // These are the components
  StyleSheet,
  View,
  Text,
  Platform,
  FlatList
  } from 'react-native';

import Header from './components/Header'
import InputBar from './components/InputBar'
import TodoItem from './components/TodoItem'

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

  addNewTodo() {
    let todos = this.state.todos;

    todos.unshift({
      id: todos.length + 1,
      title: this.state.todoInput,
      done: false
    })

    this.setState({
      todos,
      todoInput: ''
    })
  }

  toggleDone(item){
    let todos = this.state.todos

    todos = todos.map((todo) => {
      if (todo.id == item.id){
        todo.done = !todo.done;
      }

      return todo;

    })

    this.setState({todos});
  }

  removeTodo(item){
    let todos = this.state.todos;

    todos = todos.filter((todo) => todo.id !== item.id);

    this.setState({todos});
  }

  render(){
    return (
        <View style={styles.container}>
    
          {<View style={styles.statusbar}></View>}

          <Header title="< CodingTasks />"/>
          <InputBar
            addNewTodo={ () => this.addNewTodo() }
            textChange={todoInput => this.setState({ todoInput  })}
            todoInput={this.state.todoInput}
          />

          <FlatList 
            data={this.state.todos}
            extraData={this.state}
            keyExtractor={(item, index) => index.toString()}
            renderItem={ ({item, index}) => {
              return (
                <TodoItem todoItem={item} toggleDone={() => this.toggleDone(item)} removeTodo={() => this.removeTodo(item)}/>
              )
            }}
          />

          <Text>{this.state.todoInput}</Text>
          
        </View>
    )

  };

  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightyellow',
  },
  statusbar: {
    backgroundColor: '#FFCE00',
    height: 42

  }

});
