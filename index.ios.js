'use strict';

import React, { Component } from 'react';
import GridView from "react-native-easy-grid-view";
var { PropTypes } = React;
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  StatusBar,
  MapView,
  Navigator,
  TouchableOpacity,
  NavigatorIOS,
  ActivityIndicatorIOS,
  TouchableHighlight,
  SegmentedControlIOS,
} from 'react-native';

var dontShowHiddenFile = true;
// Make the first Login page without

var LoginPage = React.createClass({
 // Fill this page with login contnet
 getIcon(routeName,imageName){
   var finName = "";
     // this.props.active ? require('./'+routeName+'/'+imageName+'.png') : require('./'+routeName+'/'+imageName+'.png'),
   return finName;
 },
 getInitialState() {
    return {
      trueSwitchIsOn: true,
      falseSwitchIsOn: false,
    };
 },
 _navigate() {
     this.props.navigator.push({
       component: InputOne
   })
 },
 render(){
   return(
       <View style= {{ flex:1 , backgroundColor: '#655EF4'}}  >
         <Text style={{ textAlign:'center', marginTop:100 ,color:'white' ,fontSize:40 ,  fontFamily:'Helvetica' }}>
           Face It
         </Text>
         <Image
           style={{ marginLeft:130, marginTop:40 }}
           source={require('./Resources/splash/logoface.png')} />
         <SegmentedControlIOS style={
           {borderRadius:4 , borderColor: "#655EF4" , marginLeft:100, marginTop:40 , width:160 , height:35 , backgroundColor:'#FFBA00' }} values={['Sign in', 'Sign up']} />
         <TextInput
           style={{height: 56  , marginLeft:40 ,textAlign:'left' ,borderRadius:4  ,backgroundColor:"white" , marginTop:20 , width:296, borderColor: 'gray', borderWidth: 1}}
           defaultValue = "  Name:"
         />
         <TextInput
           style={{height: 56 , marginLeft:40,textAlign:'left' ,borderRadius:4 , backgroundColor:"white",marginTop:30 , width:296, borderColor: 'gray', borderWidth: 1}}
           defaultValue = "  Passsword:"
         />
         <Text style={{ textAlign:'left', marginTop:30 ,marginLeft:40 ,color:'white' ,fontSize:14 ,  fontFamily:'Helvetica' }}>
           also Login with:
         </Text>
         <TouchableOpacity onPress={ this._navigate }>
           <Image
             style={{ marginLeft:290, marginTop: 20}}
             source={require('./Resources/splash/arrowface@2x.png')} />
         </TouchableOpacity>
       </View>
   );
 }
});

var FaceIt = React.createClass({
  renderScene(route, navigator) {
        return <route.component navigator={navigator} {...route.passProps} />
  },
  ShowHidden (sceneName) {
    return sceneName;
  },
  render() {
    return (
      <View style={{flex:1}}>
        <StatusBar
          backgroundColor="#655EF4"
          barStyle="light-content"
        />
        <NavigatorIOS
          barTintColor='#655EF4'
          style={ styles.container }
          renderScene={ this.renderScene }
          initialRoute={{
            name:'LoginInScene',
            title:'Back' ,
            titleTextColor:'#655EF4',
            component: LoginPage,
          }}
          tintColor="#fff"
        />
      </View>
    );
  }
});
var InputOne = React.createClass({
   blablaChangeValue(){
   dontShowHiddenFile = false
 },
 _navigate() {
     this.props.navigator.push({
       component: Two
   })
 },
    render() {
     return (
       <View style={{flex:1 , backgroundColor:"#F3F3F3"}}>
         <Text style={{textAlign:'center',marginTop:80, width:375 ,fontSize:23 , fontFamily:'Helvetica' , color:'#95989A' }}>
           Where are you now?
         </Text>
         <Text style={{textAlign:'center' ,marginTop:20, width:375 ,fontSize:16 ,fontFamily:'Helvetica', color:'#95989A' }}>
           if you dont fill noting here,{"\n"}
           we will try our best to find you.
         </Text>
         <Text style={{textAlign:'left'
           ,marginTop:20,width:293,
           marginLeft:40,
         width:375 ,fontSize:16 ,fontFamily:'Helvetica', color:'#95989A' }}>
           Street:
         </Text>
         <TextInput
           style={{height: 56 , marginLeft:40,textAlign:'left' ,borderRadius:4 ,
           backgroundColor:"white", width:296, borderColor: '#F3F3F3', borderWidth: 1}}
           defaultValue = "  Rotschild Boulevard 22"
         />
         <Text style={{textAlign:'left'
           ,marginTop:10, marginLeft:40
         ,width:293 ,fontSize:16 ,fontFamily:'Helvetica', color:'#95989A' }}>
           Number:
         </Text>
         <TextInput
           style={{height: 56 , marginLeft:40,textAlign:'left' ,borderRadius:4
           ,backgroundColor:"white",width:60, borderColor: '#F3F3F3', borderWidth: 1}}
           defaultValue = "  22"
         />
         <TouchableOpacity onPress={ this._navigate }>
           <Image
             style={{ marginLeft:290, marginTop: 240}}
             source={require('./Resources/splash/arrowface@2x.png')} />
         </TouchableOpacity>
     </View>
   )
 }
});

class Two extends Component {

  constructor(props) {
        super(props);
        var ds = new GridView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithCells([
                {
                    text: 'Sports',
                    backgroundColor:'#67FA9F'
                }
                , {
                    text: 'Music',
                    backgroundColor:'#FD8AA6'

                }, {
                    text: 'Movies',
                    backgroundColor:'#78D6FD'

                }, {
                    text: 'TV',
                    backgroundColor:'#FAAB76'

                }, {
                    text: 'Games',
                    backgroundColor:'#FEE28A'

                }, {
                    text: 'Comics',
                    backgroundColor:'#C993F9'

                }], 2),
            cellWidth: 0,
            cellHeight: 0
        };
    }

    _navigate(props){
      console.log(this)
      console.log(props);
      this.props.navigator.push({
        component: Three
      })
    }

    _renderCell(cell) {
        return <View onLayout={event => {
          var width = event.nativeEvent.layout.width;
         if(this.state.cellWidth!=width){
         this.setState({cellWidth:width})
         }
         if(this.state.cellHeight!=width){
         this.setState({cellHeight:width})
         }
        }}>
            <View style={{width:this.state.cellWidth,height:this.state.cellHeight,justifyContent:'center'
            ,backgroundColor:cell.backgroundColor}}
                   resizeMode={Image.resizeMode.stretch} source={cell.image}>
                   <TouchableOpacity
                     onPress={this._navigate.bind(this)}>
                     <Text style={{textAlign:'center',color:'#fff',fontSize:24}}>{cell.text}</Text>
                   </TouchableOpacity>
            </View>
        </View>
    }

    render() {
        return <View>
            <GridView dataSource={this.state.dataSource}
                      spacing={8}
                      style={{padding:16}}
                      renderCell={this._renderCell.bind(this)}

            />
        </View>
    }
}

// var Three = React.createClass({
//   _navigate() {
//     this.props.navigator.push({
//         component: Four
//     })
//   },
//   // _goForward(){
//   //       this.props.navigator.jumpForward() // THROWS ERROR IF NO FUTURE ROUTE IN STACK
//   // },
//   // _resetRouteStack() {
//   //   this.props.navigator.immediatelyResetRouteStack([{ component: One }, { component: Four }]) /* Reset every scene with an array of routes */
//   // },
//     render() {
//     return (
//         <View>
//           <Text style={ styles.text }>Hello From Three</Text>
//           <TouchableHighlight onPress={ this._navigate } style={ styles.button }>
//             <Text>Go To Four</Text>
//           </TouchableHighlight>
//           {/*<TouchableHighlight onPress={ this._goForward } style={ styles.button }>
//             <Text>Go Forward</Text>
//             </TouchableHighlight>
//             <TouchableHighlight onPress={ this._resetRouteStack } style={ styles.button }>
//             <Text>RESET ROUTE STACK</Text>
//           </TouchableHighlight>*/}
//       </View>
//     )
//   }
// })

var Three = React.createClass({

  _navigate() {
  	// this.props.navigator.resetTo({ component: One })
    // this.props.navigator.jumpBack()
    // console.log(this.props.navigator.getCurrentRoutes)
   	// this.props.navigator.replace({ component: Two })
    // this.props.navigator.replaceAtIndex({ component: One}, 2)
    // this.props.navigator.replacePrevious({ component: One })
    this.props.navigator.popToTop()
  },

  _goBack(){
  	this.props.navigator.jumpBack() // JUMPS BACK WITHOUT REMOVING ROUTE FROM STACK
  },

  _pop(){
  	this.props.navigator.pop() // REMOVES ROUTE FROM STACK
  },

  getInitialState() {
      return {
        isFirstLoad: true,
        annotations: [{
          title: 'Eyal Ohayon',
          image: require('./Resources/founditsub/22@2x.png'),
          rightCalloutView: (
            <TouchableOpacity
              onPress={() => {
                alert('Sport, Bike, Cars');
              }}>
              <Image
                style={{width:30, height:30}}
                source={require('./group-1@2x.png')}
                />
            </TouchableOpacity>
          ),
          longitude: 34.771643,
          latitude: 32.063216,
        },{
          title: 'Alex Sorochan',
          image: require('./Resources/founditsub/23@2x.png'),
          rightCalloutView: (
            <TouchableOpacity
              onPress={() => {
                alert('Rap, Boxing, Flight');
              }}>
              <Image
                style={{width:30, height:30}}
                source={require('./group-1@2x.png')}
                />
            </TouchableOpacity>
          ),

          longitude: 34.770343,
          latitude: 32.064816,
        },{
          title: 'Lio Fleishman',
          image: require('./Resources/founditsub/evita@2x.png'),
          rightCalloutView: (
            <TouchableOpacity
              onPress={() => {
                alert('Tattoo, Read, Coding');
              }}>
              <Image
                style={{width:30, height:30}}
                source={require('./group-1@2x.png')}
                />
            </TouchableOpacity>
          ),

          longitude: 34.772679,
          latitude: 32.063638,
        },{
          title: 'Idan Ofek',
          image: require('./Resources/founditsub/me@2x.png'),
          rightCalloutView: (
            <TouchableOpacity
              onPress={() => {
                alert('SkyDiving, Tools, Sea');
              }}>
              <Image
                style={{width:30, height:30}}
                source={require('./group-1@2x.png')}
                />
            </TouchableOpacity>
          ),

          longitude: 34.771643,
          latitude: 32.062716,
        },{
          title: 'Amir Gorsky',
          image: require('./Resources/founditsub/scorce@2x.png'),
          rightCalloutView: (
            <TouchableOpacity
              onPress={() => {
                alert('Painting, Graphics');
              }}>
              <Image
                style={{width:30, height:30}}
                source={require('./group-1@2x.png')}
                />
            </TouchableOpacity>
          ),

          longitude: 34.772343,
          latitude: 32.062716,
        },{
          title: 'Shay Vilk',
          image: require('./logoface@2x.png'),
          rightCalloutView: (
            <TouchableOpacity
              onPress={() => {
                alert('FB, iOS, Groups');
              }}>
              <Image
                style={{width:30, height:30}}
                source={require('./group-1@2x.png')}
                />
            </TouchableOpacity>
          ),

          longitude: 34.770286,
          latitude: 32.063275,
        },{
          title: 'Uri Pintov',
          image: require('./logoface@2x.png'),
          rightCalloutView: (
            <TouchableOpacity
              onPress={() => {
                alert('Dogs, Ski, Eat');
              }}>
              <Image
                style={{width:30, height:30}}
                source={require('./group-1@2x.png')}
                />
            </TouchableOpacity>
          ),

          longitude: 34.771064,
          latitude: 32.063816,
        },{
          title: 'Sasha Shapirov',
          image: require('./logoface@2x.png'),
          rightCalloutView: (
            <TouchableOpacity
              onPress={() => {
                alert('Cook, Fishing, Food');
              }}>
              <Image
                style={{width:30, height:30}}
                source={require('./group-1@2x.png')}
                />
            </TouchableOpacity>
          ),

          longitude: 34.772491,
          latitude: 32.062075,
        },{
          title: 'Or Ofek',
          image: require('./logoface@2x.png'),
          rightCalloutView: (
            <TouchableOpacity
              onPress={() => {
                alert('Code, Games');
              }}>
              <Image
                style={{width:30, height:30}}
                source={require('./group-1@2x.png')}
                />
            </TouchableOpacity>
          ),

          longitude: 34.771043,
          latitude: 32.062716,
        },{
          title: 'Riki Gorsky',
          image: require('./logoface@2x.png'),
          rightCalloutView: (
            <TouchableOpacity
              onPress={() => {
                alert('Run, Computers, Cars');
              }}>
              <Image
                style={{width:30, height:30}}
                source={require('./group-1@2x.png')}
                />
            </TouchableOpacity>
          ),

          longitude: 34.769975,
          latitude: 32.061993,
        },{
          title: 'Nadav Lahav',
          image: require('./logface@2x.png'),
          rightCalloutView: (
            <TouchableOpacity
              onPress={() => {
                alert('Sport, Music, Movies');
              }}>
              <Image
                style={{width:30, height:30}}
                source={require('./group-1@2x.png')}
                />
            </TouchableOpacity>
          ),

          longitude: 34.771643,
          latitude: 32.062216,
        }],
      };
    },

	render() {
  	return (
      <View style={styles.container}>
       <MapView
          style={styles.map}
          region={{
          latitude: 32.062916,
          longitude: 34.771643,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005
        }}
        annotations={this.state.annotations}
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
    flex: 1

  },
  text: {
  	fontSize:20
  },
  heightOnePer:{
    height:100
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
  },
  icon: {
    flex:1,
    marginLeft: 260,
    marginTop:500
  },
  list: {
      justifyContent: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap'
  },
  item: {
      backgroundColor: '#CCC',
      margin: 10,
      width: 100,
      height: 100
  }

});

AppRegistry.registerComponent('TestProject', () => FaceIt);
