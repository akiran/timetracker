'use strict';

var React = require('react-native');
var Header = require('../../components/Header');
var _ = require('lodash');

var {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
  },
  timeContainer: {
    flex: 1,
  },
  time: {
    fontSize: 50,
  },
  buttons: {
    height: 50,
    flex: 1,
    flexDirection: 'row',
  },
  buttonContainer: {
    margin: 20
  },
  button: {
    width: 100,
    backgroundColor: '#000',
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  }
});

var TaskView = React.createClass({
  timer: function () {
    var task = _.assign({}, this.props.task);
    var timeSpent = task.timeSpent;
    timeSpent.seconds = timeSpent.seconds + 1;
    if (timeSpent.seconds >= 60) {
      timeSpent.minutes += 1;
      timeSpent.seconds = 0;
    }
    if (timeSpent.minutes >= 60) {
      timeSpent.hours += 1;
      timeSpent.minutes = 0; 
    }
    task.timeSpent = timeSpent;
    this.props.updateTask(task);
  },
  startDoneTask: function () {
    var task = this.props.task;
    if ((this.props.task.status === '') ) {
      task.status = 'in progress';
      this._timer = setInterval(this.timer, 1000);
    } else {
      task.status = 'completed';
      clearInterval(this._timer);
      this.props.navigator.push({
        name: 'TaskList'
      })
    } 
    this.props.updateTask(task);
  },
  pauseResumeTask: function () {
    var task = this.props.task;
    if (this.props.task.status === 'in progress') {
      task.status = 'paused';
      clearInterval(this._timer);
    } else {
      this._timer = setInterval(this.timer, 1000);
      task.status === 'in progress';
    }
    this.props.updateTask(task)
  },
  render: function () {
    var timeSpent = this.props.task.timeSpent;
    var task = this.props.task;
    console.log(task);
    return (
      <View style={styles.container}>
        <Header route={this.props.route} navigator={this.props.navigator} />
        <View style={styles.content}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{this.props.task.title}</Text>
          </View>
          <View style={styles.timeContainer}>
            <Text style={styles.time}>{timeSpent.hours + ':' + timeSpent.minutes + ':' + timeSpent.seconds}</Text>
          </View>
          <View style={styles.buttons}>
            {task.status ? <TouchableHighlight onPress={this.pauseResumeTask}>
              <View style={styles.buttonContainer}>
                <Text style={styles.button}>{task.status === 'in progress'? 'Pause':'Resume'}</Text>
              </View>
            </TouchableHighlight>: null}
            <TouchableHighlight onPress={this.startDoneTask}>
              <View style={styles.buttonContainer}>
                <Text style={styles.button}>{task.status === '' ? 'Start': 'Done'}</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>  
      </View>
    );
  }

});

module.exports =  TaskView;    