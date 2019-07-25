import React from 'react';
import { observer } from 'mobx-react';
import { View, Button, FlatList, TextInput, Text, CheckBox, AlertIOS, Alert, Switch } from 'react-native';
import { ObservableTodoStore } from './ObservableTodoStore';

@observer
class TodoList extends React.PureComponent<{
  store: ObservableTodoStore;
}> {
  render() {
    const store = this.props.store;
    console.log('rerender todolist');
    return (
      <View>
        <Text>{ store.report() }</Text>
        <View>
        { store.todos.map(
          (todo, idx) => <TodoView todo={ todo } key={ idx } />
        ) }
        </View>
        { store.pendingRequests > 0 ? <Text>Loading...</Text> : null }
        <Button title={'New Todo'} onPress={ this.onNewTodo }></Button>
        <Text>(double-click a todo to edit)</Text>
      </View>
    );
  }

  onNewTodo = () => {
    Alert.prompt('Enter a new todo:', 'coffee plz', (text) => {
      this.props.store.addTodo(text);
    });
  }
}

@observer
class TodoView extends React.PureComponent<{
  todo: any
}> {
  render() {
    const todo = this.props.todo;

    console.log('rerender todoview');
    return (
      <React.Fragment>
        <Switch
          value={ todo.completed }
          onValueChange={ this.onToggleCompleted }
        />
        <Text>{ todo.task }</Text>
        { todo.assignee
          ? <Text>{ todo.assignee.name }</Text>
          : null
        }
        {/* <RenderCounter /> */}
      </React.Fragment>
    );
  }

  onToggleCompleted = () => {
    const todo = this.props.todo;
    todo.completed = !todo.completed;
  }

  onRename = () => {
    const todo = this.props.todo;
    Alert.prompt('Task name', (text) => {
      todo.task = text || todo.task;
    });
    // todo.task = prompt('Task name', todo.task) || todo.task;
  }
}

export {
  TodoList,
  TodoView,
}