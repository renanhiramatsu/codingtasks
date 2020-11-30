import React from 'react';
import { render } from 'react-dom';
import {     // These are the components
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
  } from 'react-native';



const InputBar = (props) => {
    return(
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.input} 
                onChangeText={(todoInput) => props.textChange(todoInput)}
                value={props.todoInput}
            />
            <TouchableOpacity style={styles.addButton} onPress={props.addNewTodo}>
                <Text style={styles.addButtonText}>+ task!</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowOffset: {width: 0, height: 3},
        shadowColor: '#171717',
        shadowOpacity: .1
    },
    input: {
        backgroundColor: 'lightgray',
        flex: 1,
        fontSize: 18,
        height: 35
    },
    addButton: {
        backgroundColor: '#FFCE00',
        width: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    addButtonText: {
        color: '#171717',
        fontSize: 18,
        fontWeight: '700'

    }

})

export default InputBar;