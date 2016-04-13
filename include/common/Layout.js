var React = require('react-native');
import {styles,colors,fontSize,Icon,size} from './Css';
var {width,height} = size;

import Main from './Main';


var {
    TouchableOpacity,
    Image,
    Text,
    View,
    } = React;


/**
 * 全局header
 * 用法  : <Header />
 * @param
 */

const Header = React.createClass({
    getInitialState:function(){
        return{
            title:'每日精选'
        }
    },
    render: function () {
        var title = this.props.title || this.state.title;
        return (
            <View style={[styles.header,styles.bgColor]}>
                <View style={[styles.items3,styles.itemLeft,styles.paddingHorizontalA]}>
                    <Icon name='android-menu' size={23} color='#000'/>
                </View>
                <View style={[styles.items3,styles.itemCenter]}>
                    <Text style={[styles.headtitle]}>{title}</Text>
                </View>
                <View style={[styles.items3,styles.itemRight,styles.paddingHorizontalA]}>
                    <Icon name='ios-eye-outline' size={30} color='#000'/>
                </View>
            </View>
        );
    }
});


/**
 * Footer
 * 用法  : <Footer />
 * @param
 */


const Footer = React.createClass({
    getInitialState: function () {
        return {}
    }
    ,
    _renderText: function (name, router) {
        var textCss = {};
        if (this.props.active == router) {
            textCss = {color: '#000'};
        }


        return <Text style={[styles.footerItemsFont,textCss]}>{name}</Text>;

    },
    _renderItem(){
        var nav = [
            {label:'list',text:'每日精选'},
            {label:'users',text:'发现更多'},
            {label:'list2',text:'热门排行'},
        ];
        return nav.map(function(item,key){
            var center = key ==1 ? styles.footerItemsCenter : {};
            var params = {title:item.text};
           return(
               <TouchableOpacity
                   key={key}
                   style={[styles.items3,styles.itemCenter,center]}
                   onPress={()=>{Main.goRouter(this,item.label,params)}}
               >
                   {this._renderText(item.text, item.label)}
               </TouchableOpacity>
           );
        }.bind(this));
    },

    render: function () {
        return (
            <View style={[styles.footer,styles.bgColor]}>
                {this._renderItem()}
            </View>
        );
    }
});


/**
 * 全局layout
 * 用法  : <Layout content={content}/>
 * @param  content 中间内容
 */

const Layout = React.createClass({
    componentDidMount: function () {

    },
    render: function () {

        return (
            <View style={styles.container}>
                <Header />

                <View style={[styles.content]}>
                    <ListBox/>
                </View>
                <Footer />

            </View>
        );
    }
});


/**
 * loading 按钮
 * 用法  : <Loading size={40}/>
 * @param  size - 按钮的大小
 */

const Loading = React.createClass({

    render: function () {
        var size = this.props.size || 30;
        return (
            <View style={[styles.itemCenter]}>
                <Icon name='ios-eye' size={size} color='#000'
                         style={{width:size,height:size,opacity:size*0.01+0.3}}/>
                <Text style={{color:colors.default,fontSize:fontSize.small,marginBottom:10}}>{this.props.text}</Text>
            </View>
        );
    }
});
/**
 * 加载失败提示
 */
const LoadErr = React.createClass({

    render: function () {
        var size = this.props.size || 30;
        return (
            <View style={[styles.itemCenter,{marginTop:height/3}]}>
                <Icon name='eye-disabled' size={size} color='#000'
                         style={{width:size,height:size,opacity:size*0.01+0.3}}/>
                <Text style={{color:colors.default,fontSize:fontSize.h3,marginBottom:10}}>加载失败,点击重试</Text>
            </View>
        );
    }
});


const Style = {
    Header: Header,
    Layout: Layout,
    Footer: Footer,
    Loading: Loading,
    LoadErr:LoadErr

}
module.exports = Style;
