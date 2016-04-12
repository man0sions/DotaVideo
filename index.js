
var React = require('react-native');
var Home = require('./include/tpl/home');
var List = require('./include/tpl/list');
var Detail = require('./include/tpl/detail');
var Video = require('./include/tpl/video');
var Authors = require('./include/tpl/Authors');
var SplashPage = require('./include/tpl/SplashPage');

var {
    AppRegistry,
    StyleSheet,
    ListView,
    Image,
    Text,
    View,
    TouchableOpacity,
    Navigator

    } = React;
//StatusBarIOS.setHidden(true);

React.createClass({



    renderScene(router, navigator){
        console.log(router.name);
        var Component = null;this._navigator = navigator;
        switch(router.name){
            case "SplashPage":
                Component = SplashPage;
                break;
            case "home":
                Component = Home;
                break;
            case "list":
                Component = List;
                break;
            case "detail":
                Component = Detail;
                break;
            case "video":
                Component = Video;
                break;
            case "authors":
                Component = Authors;
                break;

            default: //default view
                Component = Home;
        }
        return <Component navigator={navigator} {...router.passProps}/>
    },

    componentDidMount() {
        var navigator = this._navigator;

    },




    render() {
        return (
            <Navigator
                initialRoute={{id: 'SplashPage', name: 'SplashPage'}}
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