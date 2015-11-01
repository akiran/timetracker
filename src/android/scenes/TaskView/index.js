'use strict';

var React = require('react-native');

var {
  View,
  Text,
  StyleSheet,
} = React;

var Header = require('../../components/Header');
var styles = StyleSheet.create({

});

var TaskView = React.createClass({
  render: function () {
    return (
      <View>
        <Header 
          route={this.props.route}
          navigator={this.props.navigator}
        />
        <Text>
          TaskView
        </Text>
      </View>
    );
  }
});

module.exports =  TaskView;    