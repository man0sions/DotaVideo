var React = require('react-native');
import {styles,colors,fontSize,size,Icon} from './Css';
var {width,height} = size;

var {
    Component,
    StyleSheet,
    TouchableOpacity,
    Image,
    Text,
    View,
    ScrollView,
    ListView
    } = React;



/**
 *
 * @param type
 * @returns {{fontSize: number}}
 */
function getFontSize(type) {
    var size = fontSize.default;
    if (Number.isInteger(type))
        size = type;
    else
        size = fontSize[type] || fontSize.default;

    return {fontSize: size}
}

/**
 * 取得h1-h5的样式
 * 用法: <Htag  text={"这是一个标题"} type={"h1"}/>
 * @param text - 文本
 * @param type - { h1,h2,h3,h4 }
 */

const Htag = React.createClass({

    render: function () {
        var type = this.props.type ? styles[this.props.type] : styles.h1;
        var color = this.props.color ? {color: this.props.color} : {color: colors.default};

        return (
            <Text style={[type,color]}>{this.props.text}</Text>

        );
    }
});
/**
 * 取得五种不同颜色的label
 * 用法: <Hlabel  text={"这是一个标题"} type={"default"}/>
 * @param text - 文本
 * @param type - { default,primary,success,info,warning,danger }
 */
const Hlabel = React.createClass({
    labelClass: function (color) {
        let defaultClass = {
            paddingVertical:3,
            fontWeight: 'bold',
            fontSize: 9,
            color: '#fff',
            borderRadius: 2,
            width:width/100*10,
            textAlign: 'center',
            backgroundColor: colors[color] || colors.default
        }
        return defaultClass;

    },
    render: function () {
        var className = this.labelClass(this.props.type);

        return (
            <Text style={className}>{this.props.text}</Text>
        );
    }
});
/**
 * 取得五种不同颜色的alert
 * 用法: <Halert  text={"这是一个标题"} type={"danger"}/>
 * @param text - 文本
 * @param type - { default,primary,success,info,warning,danger }
 */
const Halert = React.createClass({
    labelClass: function (color) {
        let defaultClass = {
            flex: 1,
            flexDirection: 'row',
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 10,
            paddingRight: 10,
            borderColor: 'transparent',
            borderWidth: 2,
            borderRadius: 3,
            backgroundColor: colors[color] || colors.default
        }
        return defaultClass;

    },
    render: function () {
        var className = this.labelClass(this.props.type);

        return (
            <View style={className}>
                <Icon
                    name='info'
                    size={14}
                    color='#fff'
                    style={{width:14,height:14}}/>
                <Text style={{fontWeight: 'bold',fontSize:12,color:'#fff'}}>{this.props.text}</Text>
            </View>
        );

    }
});





/**
 * 返回按钮
 * 用法  : <PlayBtn size={40}/>
 * @param  size - 按钮的大小
 */

const PlayBtn = React.createClass({

    render: function () {

        return (
            <View
                style={{paddingLeft:2.5,paddingTop:1,borderWidth:1,borderRadius:15,borderColor:'#fff',width:30,height:30,marginBottom:10}}>
                <Icon name='ios-play-outline' size={26} color='#fff' style={{width:26,height:26}}/>
            </View>
        );

    }
});




const Style = {
    Htag: Htag,
    Hlabel: Hlabel,
    Halert: Halert,
    PlayBtn: PlayBtn,
}
module.exports = Style;
