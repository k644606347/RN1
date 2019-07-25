import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { todoStore } from './mobx/todolist/TodoStore';
import { observableTodoStore } from './mobx/todolist/ObservableTodoStore';
import { TodoList } from './mobx/todolist/TodoList';

export default function App() {
    return (
        <View style={styles.container}>
            <Button title="click me" onPress={e => {
                console.log(e);
                }}></Button>
            <Button title={'addTodo'} onPress={e => {
                observableTodoStore.addTodo("read MobX tutorial");
                observableTodoStore.addTodo("try MobX");
                observableTodoStore.todos[0].completed = true;
                observableTodoStore.todos[1].task = "try MobX in own project";
                observableTodoStore.todos[0].task = "grok MobX tutorial";                
                // todoStore.addTodo("read MobX tutorial");
                // console.log(todoStore.report());
                
                // todoStore.addTodo("try MobX");
                // console.log(todoStore.report());
                
                // todoStore.todos[0].completed = true;
                // console.log(todoStore.report());
                
                // todoStore.todos[1].task = "try MobX in own project";
                // console.log(todoStore.report());
                
                // todoStore.todos[0].task = "grok MobX tutorial";
                // console.log(todoStore.report());                
            }}></Button>
            <TodoList store={ observableTodoStore } />
            <Image source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
            }} style={{width: 193, height: 110}}></Image>
            <Text>Open up App.tsx to start working on your app!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
