'use strict';

var React = require('react-native');
import Home from './app/tpl/home';
import TopList from './app/tpl/topList';
import Users from './app/tpl/users';
import UserVideo from './app/tpl/userVideos';
import Video from './app/tpl/video';

var {
    Navigator,
    } = React;

var App = React.createClass({



    renderScene(router, navigator){
        var Component = null;this._navigator = navigator;
        switch(router.name){
            case "Home":
                Component = Home;
                break;
            case "TopList":
                Component = TopList;
                break;
            case "Users":
                Component = Users;
                break;
            case "UserVideo":
                Component = UserVideo;
                break;
            case "Video":
                Component = Video;
                break;

            default: //default view
                Component = Home;
        }

        return <Component navigator={navigator} {...router.passProps}/>
    },



    render() {
        return (
            <Navigator
                initialRoute={{name: 'Home'}}
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

module.exports = App;