var React = require('react-native');

import {styles,colors,fontSize,userPicDef,Icon,size,BlurView} from '../common/Css';
import {Htag,Hlabel,Halert,PlayBtn} from '../common/Tag';
import {Header,Loading,BackButton} from '../common/Layout';
import Config from '../common/Config';
import Main from '../common/Main';

var { width, height } = size;

var {
    TouchableOpacity,
    Image,
    Text,
    View,
    ScrollView,
    ListView
    } = React;



/**
 * 热门排行
 * 用法  : <HotList />
 * @param
 */

var HotList = React.createClass({
    getInitialState: function () {
        return {
            data: [],
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
            loading: false,
            page: 1
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
        var url = 'http://wx.wefi.com.cn/wxbVideos/?r=TVPlaylist/GetSokuList&data={cp:' + this.state.page + ',limitdate:31}';
        console.log(url);
        fetch(url)
            .then((response) => response.json())
            .then((responseData) => {
                var data = this.state.data.concat(responseData.data);
                var page = this.state.page + 1;

                this.setState({
                    data: data,
                    dataSource: this.state.dataSource.cloneWithRows(data),
                    loading: false,
                    page: page
                })
                //console.log('===>>fetch',this.state.data);


            });
    },

    render: function () {

        return (
            <View style={{flex:1}}>
                <ListView ref='list'
                          dataSource={this.state.dataSource}
                          renderRow={(rowData) => this.renderItem(rowData)}
                          onEndReached={this.loadData}
                          contentContainerStyle={styles.listContainer}
                />
                {this.state.loading ? <Loading size={20} text={'数据加载中'}/> : null}

            </View>

        )


    },


    renderItem: function (row) {

        var userinfo = row.userinfo || {upic: userPicDef};

        return (

            <TouchableOpacity style={[styles.HotContainer]}>
                <Image style={[styles.HotItem,styles.HotWidth]} source={{uri:row.pic}}>
                    <BlurView blurType="light" style={styles.blur}>
                        <View style={[styles.HotWidth,styles.aCenter]}>
                            <Image style={[styles.Hlogo]} source={require('../images/dota.png')}/>
                            <View style={[styles.Shadow]}>
                                <Image style={[styles.HAuthorImg]}
                                       source={{uri:row.pic}}/>
                            </View>
                            <Text style={[styles.Hauthor]}>{row.uname}</Text>
                            <Text style={[styles.Hname]}>{row.name}</Text>
                            <View style={[styles.fRow,styles.Hfooter]}>
                                <View style={[styles.HiconBox,styles.fRow]}>
                                    <Icon name='ios-paperplane-outline' size={15} color='#00ff96'
                                          style={[styles.Hicon]}/>
                                    <Text style={[styles.Htitle]}>{row.time}</Text>
                                </View>
                                <View style={[styles.HiconBox,styles.fRow,styles.borderMR]}>
                                    <Icon name='ios-clock-outline' size={14} color='#00ff96'
                                          style={[styles.Hicon]}/>
                                    <Text style={[styles.Htitle]}>{row.duration}</Text>
                                </View>
                                <View style={[styles.HiconBox,styles.fRow]}>
                                    <Icon name='ios-heart-outline' size={14} color='#00ff96'
                                          style={[styles.Hicon]}/>
                                    <Text style={[styles.Htitle]}>{row.click_count}</Text>
                                </View>
                            </View>
                        </View>
                    </BlurView>
                </Image>
            </TouchableOpacity>

        )
    }


});
const Style = {
    HotList: HotList
}
module.exports = Style;