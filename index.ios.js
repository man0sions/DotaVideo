'use strict';

var React = require('react-native');
var List = require('./include/tpl/list');
var List2 = require('./include/tpl/list2');
var List3 = require('./include/tpl/list3');
var Video = require('./include/tpl/video');
var Users = require('./include/tpl/users');

var {
    AppRegistry,
    Navigator,
    StatusBarIOS

    } = React;
StatusBarIOS.setHidden(true);

var DotaVideo = React.createClass({



  renderScene(router, navigator){
    var Component = null;this._navigator = navigator;
    switch(router.name){
      case "list":
        Component = List;
        break;
      case "list2":
        Component = List2;
        break;
      case "list3":
        Component = List3;
        break;
      case "users":
        Component = Users;
        break;

        break;
      case "video":
        Component = Video;
        break;

      default: //default view
        Component = List;
    }
    //console.log("==>renderScene",router,(new Date));

    return <Component navigator={navigator} {...router.passProps}/>
  },

  componentDidMount() {
    //var navigator = this._navigator;

  },




  render() {
    return (
        <Navigator
            initialRoute={{name: 'list'}}
            renderScene={this.renderScene}
            configureScene={(route) => {
            if (route.sceneConfig) {
              return route.sceneConfig;
            }
            return Navigator.SceneConfigs.FadeAndroid;
          }}
        />
    );
  }
});

AppRegistry.registerComponent('DotaVideo', () => DotaVideo);
