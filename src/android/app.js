'use strict';

var React = require('react-native');

var {
  View,
  Text,
  StyleSheet,
} = React;

var Header = require('./components/Header');

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

var Timetracker = React.createClass({
  render: function () {
    return (
      <View>
        <Header />
        <Text>
          Timetracker
        </Text>
      </View>
    );
  }
});

module.exports =  Timetracker;    