var React = require('react-native');

import {styles,userPicDef,Icon,size} from '../common/Css';
import {Loading,LoadErr,BackButton} from '../common/Layout';
import Config from '../common/Config';
import Main from '../common/Main';

var {width,height} = size;
var Orientation = require('react-native-orientation');
Orientation.lockToPortrait(); //this will lock the view to Portrait
import {
    LazyloadListView,
    LazyloadView
} from 'react-native-lazyload';
var {
    TouchableOpacity,
    Image,
    Text,
    View,
    ScrollView,
    ListView
    } = React;

/**
 * 返回ListItem
 * 用法  : <ListItem row={row}/>
 * @param  row - 列表数据
 */

const ListItem = React.createClass({
    getInitialState: function () {
        return {}
    },

    render: function () {
        var item = this.props.row || {};
        var center = this.props.center !== null ? this.props.center : true;
        var userinfo = item.userinfo || {upic: item.pic};
        var upic = this.props.upic || userinfo.upic;
        var uname = this.props.uname || item.uname;
        //console.log(this.props);
        return (
            <TouchableOpacity key={item.id} style={[styles.mainContainer]} {...this.props}>
                <LazyloadView style={[styles.itemBox]} host="ListBox" >
                    <View style={[styles.Marginauto]}>

                        <View style={[styles.widthFull,styles.spaceBetween]}>
                            <View style={[styles.fColumn,styles.widthFive]}>
                                <Image style={[styles.AuthorImg]} source={{uri:upic}}/>
                            </View>
                            <View style={[styles.fColumn,styles.widthEight]}>
                                <View style={[styles.fRow,styles.spaceBetween]}>
                                    <View style={[styles.fColumn,styles.jcenter,styles.heightS]}>
                                        <Text style={[styles.Nauthor]}>{uname}</Text>
                                        <Text style={[styles.NCate]}>置顶栏目</Text>
                                    </View>
                                    <View style={[styles.fColumn,styles.tRight,styles.heightS]}>
                                        <Text style={[styles.Ndate]}>{item.time}</Text>
                                        <View style={[styles.fRow,styles.NiconBox]}>
                                            <Icon name='ios-heart-outline' size={13} color='#ff0056'
                                                  style={[styles.iconeye]}/>
                                            <Text style={[styles.Nclick]}>{item.click_count}</Text>
                                            <Icon name='ios-clock-outline' size={13} color='#333'
                                                  style={[styles.iconeye]}/>
                                            <Text style={[styles.Ntime]}>{item.duration}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <Image style={[styles.ItemImg,styles.itemCenter]} source={{uri:item.pic}}>
                            <View style={[styles.iconPlay,styles.itemCenter]}>
                                <Icon name='ios-play-outline' size={22} color='#fff'/>
                            </View>
                        </Image>
                        <Text style={[styles.nameInfo]}>{item.name}</Text>

                    </View>
                </LazyloadView>
            </TouchableOpacity>
        );
    }
});

/**
 * 每日精选
 * 用法  : <ListBox />
 * @param
 */

const ListBox = React.createClass({
    getInitialState: function () {
        var data = Main.initialListData(ListView);
        return data;
    },

    componentDidMount: function () {
        var url = Main.sprintf(this.props.url, this.state.page);
        Main.loadData(this, url);

    },

    _renderRow: function (row) {

        return (
            <ListItem row={row} onPress={()=>{Main.goRouter(this,'video',row)}} {...this.props}/>
        );
    },
    _renderGoBack(){
        if(!this.props.uname)
            return null;
        return(

            <TouchableOpacity onPress={() => {this.props.navigator.jumpBack()}}>
                <BackButton size={25} style={{bottom:10,left:10,position:'absolute'}}/>
            </TouchableOpacity>

        );
    },
    _renderErrBtn(){
        var url = Main.sprintf(this.props.url, this.state.page);
        if(!this.state.loadErr)
           return(
               <LazyloadListView
                   name="ListBox"
                   {...this.props}
                   dataSource={this.state.dataSource}
                   renderRow={this._renderRow}
                   onEndReached={()=>{Main.loadData(this,url)}}
                   contentContainerStyle={[styles.SContainer]}
                   scrollRenderAheadDistance={200}
                   renderDistance={100}
                   pageSize={1}
                   initialListSize={10}

               />
           );

        return(
            <TouchableOpacity onPress={() => {Main.loadData(this, url)}}>
                <LoadErr size={25} />
            </TouchableOpacity>
        );
    },
    render: function () {

        return (
            <View style={{flex:1}}>
                {this._renderErrBtn()}
                {this._renderGoBack()}
                {this.state.loading ? <Loading size={20} text={'数据加载中'}/> : null}
            </View>
        );
    }
});





module.exports = ListBox;
