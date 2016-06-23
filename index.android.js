'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  MapView,
  Navigator,
  TouchableHighlight
} from 'react-native';


var LoginPage = React.createClass({
  // Fill this page with login contnet
  render(){
    return(
        <View>

        </View>
    );
  }
});

var FaceIt = React.createClass({

  renderScene(route, navigator) {
		return <route.component navigator={navigator} {...route.passProps} />
  },

  render() {
    return (
      <Navigator
      barTintColor='#655EF4'
  		style={ styles.container }
      renderScene={ this.renderScene }
  		initialRoute={{
        title:'Face It' ,
        titleTextColor:'white',
        component: firstPage,
      }}
  		/>
    );
  }
});


var firstPage = React.createClass({

  _navigate() {
  	this.props.navigator.push({
    	component: Two
    })
  },

	render() {
  	return (
    	<View style={styles.backgroundgrayColor , styles.container}>
        <TouchableHighlight onPress={ this._navigate } style={ styles.button }>
            <Text>Will be pressed</Text>
        </TouchableHighlight>
      </View>
    )
  }
})

var Two = React.createClass({

  _navigate() {
  	this.props.navigator.push({
    	component: Three
    })
  },

	render() {
  	return (
    	<View>
      	<Text style={ styles.text }>Hello From Two</Text>
      	<TouchableHighlight onPress={ this._navigate } style={ styles.button }>
				  <Text>Go To Three</Text>
      	</TouchableHighlight>
      </View>
    )
  }
})

var Three = React.createClass({

  _navigate() {
  	this.props.navigator.push({
    	component: Four
    })
  },

  _goForward(){
  		this.props.navigator.jumpForward() // THROWS ERROR IF NO FUTURE ROUTE IN STACK
  },

  _resetRouteStack() {
  	this.props.navigator.immediatelyResetRouteStack([{ component: One }, { component: Four }]) /* Reset every scene with an array of routes */
  },

	render() {
  	return (
    	<View>
      	<Text style={ styles.text }>Hello From Three</Text>
      	<TouchableHighlight onPress={ this._navigate } style={ styles.button }>
				  <Text>Go To Four</Text>
      	</TouchableHighlight>

        <TouchableHighlight onPress={ this._goForward } style={ styles.button }>
           <Text>Go Forward</Text>
        </TouchableHighlight>

      	 <TouchableHighlight onPress={ this._resetRouteStack } style={ styles.button }>
           <Text>RESET ROUTE STACK</Text>
         </TouchableHighlight>
      </View>
    )
  }
})

var Four = React.createClass({

	render() {
  	return (
      <View>
       <MapView
         style={styles.map}
         followUserLocation={true}
         showsUserLocation={true}
       />
     </View>
    )
  }
});
// Styles
var styles = StyleSheet.create({
  container: {
    flex:1,


  },
  map: {
    height: 150,
    width: 150,
    margin: 10,
    borderWidth: 1,
    borderColor: '#000000',
  },
  text: {
  	fontSize:20
  },
  button: {
  	backgroundColor: '#efefef',
    height:50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:120
  },
  whiteHeaderTitle:
  {
    color:'rgb(0,0,0)',
  },
  backgroundPurpleColor:
  {
    backgroundColor:'#655EF4'
  },
  backgroundgrayColor:
  {
    backgroundColor:'#F3F3F3'
  }

});

AppRegistry.registerComponent('TestProject', () => FaceIt);
