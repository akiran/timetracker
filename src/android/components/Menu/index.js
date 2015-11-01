'use strict';

var React = require('react-native');

var {
  View,
  DrawerLayoutAndroid,
  StyleSheet,
} = React;

var styles = StyleSheet.create({

});

var Menu = React.createClass({
  render: function() {
    return (
      <DrawerLayoutAndroid
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        drawerWidth={Dimensions.get('window').width - DRAWER_WIDTH_LEFT}
        keyboardDismissMode="on-drag"
        ref={(drawer) => { this.drawer = drawer; }}
        renderNavigationView={this._renderNavigationView}>
        {this._renderNavigation()}
      </DrawerLayoutAndroid>
      );
  },
});

module.exports =  Menu;    