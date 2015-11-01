'use strict';

var React = require('react-native');
var Header = require('../../components/Header')

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
    var task = this.props.task;
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
    this.props.updateTask(task)
  },
  pauseTimer: function () {
    this.setState({paused: true});
    clearInterval(this._timer);
  },
  resumeTimer: function () {
    var task = this.props.task;
    if (!task.status) {
      
    }
    this._timer = setInterval(this.timer, 1000);
  },
  toggleHandler: function (e) {
    this.setState({paused: !this.state.paused});
  },
  render: function () {
    var timeSpent = this.props.task.timeSpent;
    var task = this.props.task;
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
            <View style={styles.buttonContainer}>
              <Text style={styles.button}>{task.status === 'paused'? 'Resume':'Pause'}</Text>
            </View>
            <TouchableHighlight onPress={this.resumeTimer}>
              <View style={styles.buttonContainer}>
                <Text style={styles.button}>{task.status ? 'Done': 'Start'}</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>  
      </View>
    );
  }

});

module.exports =  TaskView;    