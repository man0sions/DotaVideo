/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
import {Header,Footer,Layout} from '../common/Layout';
import {styles} from '../common/Css';
import ListBox from '../component/ListBox';

import Config from '../common/Config';
import Main from '../common/Main';


var {
    View
    } = React;



module.exports = React.createClass({
    getInitialState:function(){
        return {
            modalShow:false
        }
    },
    render: function() {
        var url = Main.sprintf(Config.jx, '%s',30); //获取本月排行


        return (
            <View style={styles.container}>
                <Header title={this.props.title} parent={this}/>

                <View style={[styles.content]}>
                    <ListBox navigator={this.props.navigator} url={url}/>
                </View>
                <Footer navigator={this.props.navigator} active="list2"/>

            </View>
        );
    },
});



