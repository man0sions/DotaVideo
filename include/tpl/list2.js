/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
import {Header,Footer,Layout} from '../common/Layout';
import {styles} from '../common/Css';

import {HotList} from '../component/Style';
var {
    View
    } = React;



module.exports = React.createClass({
    render: function() {
        return (
            <View style={styles.container}>
                <Header title={this.props.title} />

                <View style={[styles.content]}>
                    <HotList navigator={this.props.navigator} url={this.props.url}/>
                </View>
                <Footer navigator={this.props.navigator} active="list2"/>

            </View>
        );
    },
});



