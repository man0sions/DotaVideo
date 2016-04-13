var React = require('react-native');
var {
        AppRegistry,
    } = React;


import App from './app';
var DotaVideo = React.createClass({

  render:function(){

      return (
        <App></App>
    );
  }
});



AppRegistry.registerComponent('DotaVideo', () => DotaVideo);