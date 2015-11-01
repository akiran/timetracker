'use strict';

var React = require('react-native');

var {
  Navigator,
  StyleSheet,
} = React;

var TaskList = require('./scenes/TaskList');
var TaskCreate = require('./scenes/TaskCreate');
var TaskView = require('./scenes/TaskView');
var _ = require("lodash");

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

var Timetracker = React.createClass({
  getInitialState: function () {
    return {
      tasks: [
        {
          id: 1,
          title: 'complete react-native demo app',
          timeSpent: {
            hours: 0,
            minutes: 0,
            seconds: 0
          }, 
          status: ''
        },
        {
          id: 2,
          title: 'prepare for presentation',
          timeSpent: {
            hours: 0,
            minutes: 0,
            seconds: 0
          }, 
          status: ''
        },
        {
          id: 3,
          title: 'Watch a movie',
          timeSpent: {
            hours: 0,
            minutes: 0,
            seconds: 0
          }, 
          status: ''
        },
      ],
      selectedTask: {}
    }
  },
  addTask: function (task) {
    console.log('a', this.state.tasks.concat(task), 'z')
    this.setState({
      tasks: this.state.tasks.concat(task)
    });
  },
  updateTask: function (task, cb) {
    var index = _.findIndex(this.state.tasks, {id: task.id});
    var tasks = this.state.tasks;
    tasks[index] = task;
    this.setState({
      tasks: tasks,
      selectedTask: _.assign({}, task)
    });
  },
  selectTask: function (task) {
    this.setState({
      selectedTask: task
    })
  },
  renderScene: function (route, navigator) {
    if (route.name === 'TaskList') {
      return (
        <TaskList 
          tasks={this.state.tasks}
          selectTask={this.selectTask}
          route={route} 
          navigator={navigator} />
      );
    } else if (route.name === 'TaskCreate') {
      return (
        <TaskCreate 
          addTask={this.addTask}
          route={route} 
          navigator={navigator} />
      );
    } else if (route.name === 'TaskView') {
      return (
        <TaskView 
          task={this.state.selectedTask}
          updateTask={this.updateTask}
          route={route} 
          navigator={navigator} />  
      );
    } else {
      return null
    }
  },
  render: function () {
    return (
      <Navigator
        initialRoute={{
          name: 'TaskList'
        }}
        renderScene={this.renderScene}
      />
    );
  }
});

module.exports =  Timetracker;    