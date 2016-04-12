/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
import {Header,Footer,Layout} from '../common/Layout';
import {styles} from '../common/Css';

import {UserVideoList} from '../component/UserVideoList';
var {
    View
    } = React;



module.exports = React.createClass({
    render: function() {
        return (
            <View style={styles.container}>
                <Header title={this.props.title} />

                <View style={[styles.content]}>
                    <UserVideoList  {...this.props} />
                </View>
                <Footer navigator={this.props.navigator} active='users'/>

            </View>
        );
    },
});



