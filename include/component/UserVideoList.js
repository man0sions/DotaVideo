var React = require('react-native');

import {styles,colors,fontSize,userPicDef,Icon,size,BlurView} from '../common/Css';
import {Header,Loading,BackButton} from '../common/Layout';
import Config from '../common/Config';
import Main from '../common/Main';

var { width, height } = size;


var {
    TouchableOpacity,
    Image,
    Text,
    View,
    ListView,
    Animated,
    Platform
    } = React;

/**
 * 单个用户视频列表
 * 用法  : <UserVideoList />
 * @param
 */

var UserVideoList = React.createClass({
    getInitialState: function () {

        var data = Main.initialListData(ListView);
        data.marginTopAnim = new Animated.Value(0);

        return data;

    },

    componentDidMount: function () {
        var url = Main.sprintf(Config.userVideo, this.props.uid,this.state.page,1);
        Main.loadData(this, url);
    },



    onScroll: function (event) {
        var top1 = -height/3;
        var offset = event.nativeEvent.contentOffset.y ;
        //console.log(offset);
        if((offset>-30 && offset<=0) || (this.state.marginTopAnim._value==0 && offset>0))
        {
            console.log(offset,this.state.marginTopAnim._value);
            var time = 500;
            if(offset>0)
            {
                var top = top1;
            }
            else
            {
                var top = 0;

            }
            Animated.spring(
                this.state.marginTopAnim,
                {
                    toValue: top,
                    //duration: time,
                }
            ).start();


        }


    },

    render: function () {
        var url = Main.sprintf(Config.userVideo, this.props.uid,this.state.page,1);

        return (
            <View style={{flex:1}}>
                {this._rendUserInfo()}
                <ListView ref='list'
                          dataSource={this.state.dataSource}
                          renderRow={(rowData) => this._renderItem(rowData)}
                          onEndReached={()=>{Main.loadData(this,url)}}
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
                            <View style={[styles.iconPlay,styles.itemCenter]}>
                                <Icon name='ios-play-outline' size={22} color='#fff'/>
                            </View>
                        </Image>
                    </View>
                    <View style={[styles.UVCenter,styles.fColumn]}>
                        <View style={[styles.fRow,styles.UVB]}>
                            <Icon name='ios-videocam' size={14} color='#fff'/>
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
                                <View style={[styles.UViconBox,styles.fRow,styles.UVborderMR]}>
                                    <Text style={[styles.textGreen]}>粉丝:</Text>
                                    <Text style={[styles.Htitle]}> {row.fans}</Text>
                                </View>

                                <View style={[styles.UViconBox,styles.fRow]}>
                                    <Text style={[styles.textGreen]}>播放:</Text>
                                    <Text style={[styles.Htitle]}>{row.click_count}</Text>
                                </View>
                            </View>
                        </View>
                    </BlurView>
                </Image>
            </Animated.View>

        )
    }
});



module.exports = UserVideoList;