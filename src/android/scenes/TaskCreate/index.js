'use strict';

var React = require('react-native');
var Dimensions = require('Dimensions');
var Header = require('../../components/Header')


var {
  View,
  Text,
  TouchableHighlight,
  TextInput,
  StyleSheet,
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 50,
  },
  buttonContainer: {
    alignItems: 'center',
    width: Dimensions.get('window').width*0.8,
    height: 40
  },
  button: {
    backgroundColor: '#000',
    color: '#fff',
  }
});

var TaskCreate = React.createClass({
  getInitialState: function () {
    return {
      title: ''
    }
  },
  addTask: function () {
    var task = {
      id: parseInt(Math.random()*10e7),
      title: this.state.title,
      timeSpent: {
        hours: 0,
        minutes: 0,
        seconds: 0
      },
      status: ''
    }
    this.props.addTask(task);
    this.props.navigator.push({
      name: 'TaskList'
    })
  },
  render: function () {
    return (
      <View style={styles.container}>
        <Header route={this.props.route} navigator={this.props.navigator} />
        <View style={styles.content}>
          <Text style={styles.title}>Add Task</Text> 
          <TextInput
            style={{height: 40, borderColor: 'gray', marginBottom: 20, borderWidth: 1}}
            onChangeText={(title) => this.setState({title})}
            value={this.state.title}
            placeholder="Task title"
          />
          <TouchableHighlight onPress={this.addTask}>
            <View style={styles.buttonContainer}>
              <Text style={styles.button}>Add</Text>
            </View>
          </TouchableHighlight>  
        </View>
      </View>
    );
  }

});

module.exports =  TaskCreate;    