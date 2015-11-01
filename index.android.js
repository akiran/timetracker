var React = require('react-native');
var {
  AppRegistry
} = React;

var timetracker = require('./src/android/app');

AppRegistry.registerComponent('timetracker', () => timetracker);
