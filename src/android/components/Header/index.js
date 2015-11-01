'use strict';

var React = require('react-native');

var {
  View,
  Text,
  Image,
  TouchableHighlight,
  StyleSheet,
  PixelRatio
} = React;

var styles = StyleSheet.create({
  header: {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1 / PixelRatio.get()
  },
  titleContainer: {
    flex: 1
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
  icon: {
    width: 20,
    height: 20
  },
  leftIcon: {
    paddingLeft: 10
  },
  rightIcon: {
    paddingRight: 10
  }
});

var Header = React.createClass({
  goToTaskCreate: function () {
    this.props.navigator.push({
      name: 'TaskCreate'
    });
  },
  goBack: function () {
    this.props.navigator.jumpBack();
  },
  renderLeftNavIcon: function () {
    if (this.props.route.name === 'TaskList') {
      return (
        <TouchableHighlight onPress={this.goToTaskCreate}>
          <View style={styles.leftIcon}>
            <Image  
              style={styles.icon}
              source={require('image!menu')} />
          </View>
        </TouchableHighlight>
      );
    } else {
      return (
        <TouchableHighlight onPress={this.goBack}>
          <View style={styles.leftIcon}>
            <Image  
              style={styles.icon}
              source={require('image!chevron_left')} />
          </View>
        </TouchableHighlight>
      );
    }
  },
  render: function () {
    return (
        <View style={styles.header}>
          {this.renderLeftNavIcon()}
          <View style={styles.titleContainer}>
            <Text style={styles.title}>TIMETRACKER</Text>
          </View>
          <TouchableHighlight onPress={this.goToTaskCreate}>
            <View style={styles.rightIcon}>
              <Image 
                style={[styles.icon, styles.rightIcon]}
                source={require('image!add')} />
            </View>
          </TouchableHighlight>
        </View>
    );
  }
});

module.exports =  Header;    