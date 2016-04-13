var React = require('react-native');
var {
    AppRegistry,
    AsyncStorage
    } = React;


import App from './app';
var DotaVideo = React.createClass({
    //componentWillMount:function(){
    //    AsyncStorage.setItem('app','android',(e)=>{
    //        //console.log(e,r);
    //    });
    //},
    render:function(){
        return (
            <App ></App>
        );
    }
});



AppRegistry.registerComponent('DotaVideo', () => DotaVideo);