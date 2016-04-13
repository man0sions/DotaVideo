var React = require('react-native');

import {styles,colors,fontSize,userPicDef,Icon,size} from '../common/Css';
import {Htag,Hlabel,Halert,BackButton,PlayBtn} from '../common/Tag';
import {Header,Loading} from '../common/Layout';
import Config from '../common/Config';
import Main from '../common/Main';
import Parallax from './Parallax';

const { BlurView, VibrancyView } = require('react-native-blur');
var { width, height } = size;


var {
    TouchableOpacity,
    Image,
    Text,
    View,
    ScrollView,
    ListView,
    Animated
    } = React;


/**
 * 单个用户视频列表
 * 用法  : <UserVideoList />
 * @param
 */

var UserVideoList = React.createClass({
    getInitialState: function () {
        return {
            data: [],
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
            loading: false,
            page: 1,
            marginTopAnim: new Animated.Value(0),
            isAnim:false,
        };
    },

    componentDidMount: function () {

        this.loadData();
    },


    loadData: function () {
        if (this.state.loading)
            return;

        this.setState({
            loading: true
        });
        var url = "http://wx.wefi.com.cn/wxbVideos/?r=TVPlaylist/GetYokuUserPlayList&data={q:'dota',uid:'" + this.props.uid + "',od:1,cp:" + this.state.page + "}";
        console.log(url);
        fetch(url)
            .then((response) => response.json())
            .then((res) => {
                //console.log("==>responseData",responseData);

                var data = this.state.data.concat(res.data);
                var page = this.state.page + 1;

                this.setState({
                    data: data,
                    dataSource: this.state.dataSource.cloneWithRows(data),
                    loading: false,
                    page: page
                })

                //console.log('===>>fetch', this.state.data);


            });
    },
    onScroll: function (event) {
        var top1 = -height/3;
        var offset = event.nativeEvent.contentOffset.y ;

        if((offset>-30 && offset<-20) || (this.state.marginTopAnim._value==0 && offset>0))
        {
            //console.log(offset,this.state.marginTopAnim._value);
            var time = 500;
            if(offset>0)
            {
                var top = top1;
            }
            else
            {
                var top = 0;

            }


            Animated.timing(
                this.state.marginTopAnim,
                {
                    toValue: top,
                    duration: time,
                }
            ).start();


        }


    },

    render: function () {

        return (
            <View style={{flex:1}}>
                {this._rendUserInfo()}
                <ListView ref='list'
                          dataSource={this.state.dataSource}
                          renderRow={(rowData) => this._renderItem(rowData)}
                          onEndReached={this.loadData}
                          contentContainerStyle={styles.listContainer}
                          onScroll={this.onScroll}
                          scrollEventThrottle={16}
                />
                {this.state.loading ? <Loading size={20} text={'数据加载中'}/> : null}

            </View>



        )


    },

    _renderItem: function (item) {
        //console.log(item);
        return (
            <TouchableOpacity
                key={item.id}
                style={[styles.mainContainer,styles.borderBottom]}
                {...this.props}
                onPress={()=>{Main.goRouter(this,'video',item)}}


            >
                <View style={[styles.Marginauto,styles.spaceBetween,styles.fRow]}>
                    <View style={[styles.UVLeft]}>
                        <Image style={[styles.UVImg,styles.jcenter,styles.aCenter]} source={{uri:item.pic}}>
                            <Icon name='ios-play-outline' size={20} color='#fff'
                                  style={[styles.iconPlay]}/>
                        </Image>
                    </View>
                    <View style={[styles.UVCenter,styles.fColumn]}>
                        <View style={[styles.fRow,styles.UVB]}>
                            <Icon name='ios-videocam' size={12} color='#fff'
                                  style={[styles.iconVideocam]}/>
                        </View>
                        <Text style={[styles.UVClick]}>{item.click_count}</Text>
                        <Text style={[styles.UVName]}>{item.name}</Text>
                        <Text style={[styles.UVdate]}>{item.time}</Text>
                    </View>
                    <View style={[styles.UVRight,styles.fColumn,styles.tRight]}>
                        <View style={[styles.fRow,styles.fend]}>
                            <Text style={[styles.UVtime]}>{item.duration}</Text>
                            <Text style={[styles.UVminute]}>秒</Text>
                        </View>
                        <Text style={[styles.seeBtn]}>观看</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    },


    _rendUserInfo: function () {
        var row = this.props;
        var background = row.vlist[0].pic;
        //console.log(row);
        return (

            <Animated.View style={[styles.HotContainer,{marginTop:this.state.marginTopAnim}]} ref="_rendUserInfo">
                <Image style={[styles.HotItem,styles.HotWidth]} source={{uri:background}} >
                    <BlurView blurType="light" style={styles.blur}>
                        <View style={[styles.HotWidth,styles.aCenter]}>
                            <Image style={[styles.Hlogo]} source={require('../images/dota.png')}/>
                            <View style={[styles.Shadow]}>
                                <Image style={[styles.HAuthorImg]}
                                       source={{uri:row.upic}}/>
                            </View>
                            <Text style={[styles.Hauthor]}>{row.uname}</Text>
                            <Text style={[styles.Hname]}>{row.intr}</Text>
                            <View style={[styles.fRow,styles.Hfooter]}>
                                <View style={[styles.HiconBox,styles.fRow]}>

                                    <Text style={[styles.Htitle]}>粉丝 : {row.fans}</Text>
                                </View>

                                <View style={[styles.HiconBox,styles.fRow]}>
                                    <Text style={[styles.Htitle]}>播放 : {row.click_count}</Text>
                                </View>
                            </View>
                        </View>
                    </BlurView>
                </Image>
            </Animated.View>

        )
    }
});


const Style = {
    UserVideoList: UserVideoList
}
module.exports = Style;