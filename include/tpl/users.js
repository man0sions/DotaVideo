/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
import {Header,Footer,Layout} from '../common/Layout';
import ListUsers from '../component/ListUsers';
import {styles} from '../common/Css';

var {
    View
    } = React;



module.exports = React.createClass({

    getInitialState: function() {

        return {};
    },


    render: function() {
        return (
            <View style={styles.container}>
                <Header title={this.props.title} />

                <View style={[styles.content]}>
                    <ListUsers navigator={this.props.navigator} />
                </View>
                <Footer navigator={this.props.navigator} active="users"/>

            </View>
        );
    },
});