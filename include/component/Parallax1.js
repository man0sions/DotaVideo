var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    Animated
    } = React;
var Dimensions = require('Dimensions');

var { width, height } = Dimensions.get('window');


var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        backgroundColor: 'transparent',
    },
    content: {
        shadowColor: '#222',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        backgroundColor: '#fff'
    }
});

var ParallaxView = React.createClass({
    propTypes: {
        windowHeight: React.PropTypes.number,
        backgroundSource: React.PropTypes.object,
        header: React.PropTypes.node,
        contentInset: React.PropTypes.object,
    },

    getDefaultProps: function () {
        return {
            windowHeight: 300,
            contentInset: {
                top: 64
            }
        };
    },

    getInitialState: function () {
        return {
            offset: 0,
            marginTop: 0,
            height: this.props.windowHeight + 64,
            opacity : 1,
            windowIsInView: true,
            scrollY: new Animated.Value(0)


        };
    },

    onScroll: function (event) {

        var { scrollY } = this.state;


        var offset = event.nativeEvent.contentOffset.y + event.nativeEvent.contentInset.top;
        var windowIsInView = offset <= this.props.windowHeight;

        if (windowIsInView || this.state.windowIsInView) {

            var pullingDown = offset <= 0;
            var srcHeight = this.props.windowHeight + this.props.contentInset.top;
            var marginTop = pullingDown ? 0 : -offset / 3;
            var hheight = srcHeight + (pullingDown ? -offset : 0);
            var opacity = (1 - Math.min(1, 1.3 * Math.max(0, offset) / this.props.windowHeight));

            var aa = {
                inputRange: [ -height, 0, height],
                outputRange: [height/2, 0, -height/3]
            };
            var bb = {
                inputRange: [ -height, 0, height],
                outputRange: [2, 1, 1]
            }

            this.refs.header.setNativeProps({

                style:{
                    opacity,
                    top: this.state.marginTop,
                    width: width,

                }
            });




        }
    },

    renderBackground: function () {
        var { windowHeight, backgroundSource, blur } = this.props;
        var { scrollY } = this.state;
        if (!windowHeight || !backgroundSource) {
            return null;
        }
        return (
            <Animated.Image
                style={[styles.background, {
                    height: windowHeight,
                    transform: [{
                        translateY: scrollY.interpolate({
                            inputRange: [ -windowHeight, 0, windowHeight],
                            outputRange: [windowHeight/2, 0, -windowHeight/3]
                        })
                    },{
                        scale: scrollY.interpolate({
                            inputRange: [ -windowHeight, 0, windowHeight],
                            outputRange: [2, 1, 1]
                        })
                    }]
                }]}
                source={backgroundSource}>

                {this.props.header}

            </Animated.Image>
        );
    },

    renderHeader: function () {
        var { scrollY } = this.state;
        console.log(scrollY);
        return (
            <Animated.View ref="header" style={[{
                position: 'relative',
                opacity: this.state.opacity,
            },{
                    height: height,
                    transform: [{
                        translateY: scrollY.interpolate({
                            inputRange: [ -height, 0, height],
                            outputRange: [height/2, 0, -height/3]
                        })
                    },{
                        scale: scrollY.interpolate({
                            inputRange: [ -height, 0, height],
                            outputRange: [2, 1, 1]
                        })
                    }]
                }]}>
                {this.props.header}
            </Animated.View>
        );
    },

    render: function () {
        return (
            <View {...this.props} style={[styles.container, this.props.style]}>
                {this.renderBackground()}


                <ScrollView
                    style={styles.scrollView}
                    onScroll={this.onScroll}
                    scrollEventThrottle={16}>

                </ScrollView>
            </View>
        );
    }
});

module.exports = ParallaxView;