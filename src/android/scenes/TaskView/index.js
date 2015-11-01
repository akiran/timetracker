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
    flex: 1
  },
  content: {
    padding: 10,
    flex: 1
  },
  title: {
    fontSize: 20,
    marginBottom: 50,
    flex: 1,
  },
  time: {
    fontSize: 50,
    flex: 1,
  },
  buttons: {
    flex: 1,
    flexDirection: 'row'
  },
  button: {
    padding: 10,
    backgroundColor: '#000',
    color: '#fff',
    margin: 10,
  }
});

var TaskView = React.createClass({
  // componentDidMount: function () {
  //   this.resumeTimer();
  // },
  // componentWillUnmount: function () {
  //   this.pauseTimer();
  // },
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
      <View className='container'>
        <Header route={this.props.route} navigator={this.props.navigator} />
        <View style={styles.content}>
          <View style={styles.title}>
            <Text>{this.props.task.title}</Text>
          </View>
          <View style={styles.time}>
            <Text>{timeSpent.hours + ':' + timeSpent.minutes + ':' + timeSpent.seconds}</Text>
          </View>
          <View style={styles.buttons}>
            <View>
              <Text style={styles.button}>{task.status === 'paused'? 'Resume':'Pause'}</Text>
            </View>
            <TouchableHighlight onPress={this.resumeTimer}>
              <View>
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