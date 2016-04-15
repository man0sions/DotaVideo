/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
import {Header,Footer,Layout} from '../common/Layout';
import ListBox from '../component/ListBox';
import {styles} from '../common/Css';
import Config from '../common/Config';
var {
    View,

    } = React;



module.exports = React.createClass({
    getInitialState:function(){
        return {
        }
    },
    render: function() {
        var url = this.props.url? this.props.url: Config.jx;
        var active = this.props.title ? 'users' : 'list';
        return (
            <View style={styles.container}>
                <Header title={this.props.title} />
                <View style={[styles.content]}>
                        <ListBox navigator={this.props.navigator} url={url} {...this.props}/>


            </View>
                <Footer navigator={this.props.navigator} active={active}/>

            </View>



        );

    },
});



