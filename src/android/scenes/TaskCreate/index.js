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

var TaskCreate = React.createClass({
  
  render: function () {
    return (
      <View>
        <Header 
          route={this.props.route}
          navigator={this.props.navigator} />
        <Text>
          TaskCreate
        </Text>
      </View>
    );
  }

});

module.exports =  TaskCreate;    