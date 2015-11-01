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
  render: function () {
    return (
        <View style={styles.header}>
          <TouchableHighlight onPress={this.props.openMenu}>
            <View style={styles.leftIcon}>
              <Image  
                style={styles.icon}
                source={require('image!home')} />
            </View>
          </TouchableHighlight>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>TIMETRACKER</Text>
          </View>
          <View style={styles.rightIcon}>
            <Image 
              style={[styles.icon, styles.rightIcon]}
              source={require('image!plus')} />
          </View>
        </View>
    );
  }

});

module.exports =  Header;    