'use strict';

var React = require('react-native');

var {
  View,
  Text,
  Image,
  ScrollView,
  TouchableHighlight,
  StyleSheet,
} = React;

var Header = require('../../components/Header');

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  taskList: {
    flex: 1
  },
  task: {
    borderColor: '#ddd',
    borderBottomWidth: 1,
    padding: 10,
    flex: 1,
    flexDirection: 'row'
  },
  taskText: {
    flex: 8
  },
  taskNav: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  title: {
    fontSize: 16,
    paddingBottom: 10,
  },
  description: {
    fontSize: 12,
    color: '#333'
  },
  icon: {
    width: 45,
    height: 45
  },
});


var TaskList = React.createClass({
  goToTaskView: function (task) {
    this.props.selectTask(task);
    this.props.navigator.push({
      name: 'TaskView'
    });
  },
  renderTask: function (task) {
    return (
      <View style={styles.task}>
        <View style={styles.taskText}>
          <Text style={styles.title}>{task.title}</Text>
          <Text style={styles.description}>{"Timespent: " + task.timeSpent.hours + ':' + task.timeSpent.minutes + ':' + task.timeSpent.seconds}</Text>
        </View>  
        <View style={styles.taskNav}>
          <View>
            <TouchableHighlight onPress={this.goToTaskView.bind(null, task)}>
              <Image
                source={require('image!chevron_right')}
                style={styles.icon}
              />
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  },
  render: function () {
    return (
      <View style={styles.container}>
        <Header route={this.props.route} navigator={this.props.navigator} />
        <View style={styles.taskList}>
          <ScrollView>
            {this.props.tasks.map(this.renderTask)}
          </ScrollView>
        </View>
      </View>
    );
  }

});

module.exports =  TaskList;    
