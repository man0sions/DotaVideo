var React = require('react-native');

import {styles,userPicDef,BlurView} from '../common/Css';
import {Loading,LoadErr} from '../common/Layout';
import Config from '../common/Config';
import Main from '../common/Main';

var {
    TouchableOpacity,
    Image,
    Text,
    View,
    ScrollView,
    ListView,
    Platform
    } = React;



import {
    LazyloadListView,
    LazyloadView
} from 'react-native-lazyload';

/**
 * 发现更多
 * 用法  : <ListUsers />
 * @param
 */

var ListUsers = React.createClass({
    getInitialState: function () {
        var data = Main.initialListData(ListView);
        return data;
    },
    componentDidMount: function () {
        var url = Main.sprintf(Config.users, this.state.page);
        //console.log(url);
        Main.loadData(this, url);
    },
    _renderErrBtn(){
        var url = Main.sprintf(Config.users, this.state.page);


        if(!this.state.loadErr)
            return(
                <LazyloadListView
                    name='ListUsers'
                    dataSource={this.state.dataSource}
                    renderRow={(row) => this._renderItem(row)}
                    onEndReached={()=>{ Main.loadData(this, url)}}
                    contentContainerStyle={[styles.InfoContainer]}
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
        var url = Main.sprintf(Config.users, this.state.page);
        return (
            <View style={[{flex:1}]}>
                {this._renderErrBtn()}
                {this.state.loading ? <Loading size={20} text={'数据加载中'}/> : null}

            </View>

        );
    },
    _goRouter: function (row) {
        row.url = Main.sprintf(Config.userVideo, row.uid, 1, '%s');
        row.title = row.uname;
        Main.goRouter(this,'UserVideo',row);

    },

    _renderItem: function (row) {
        return (
            <LazyloadView host="ListUsers">
            <TouchableOpacity style={[styles.InfoItem,styles.InfoHalf]} onPress={()=>{this._goRouter(row)}}>
                <Image style={[styles.InfoHalf]} source={{uri:row.upic}}>
                    <BlurView blurType="light" style={styles.blur}>
                        <View style={[styles.Infoopact,styles.InfoHalf,styles.itemCenter]}>
                            <Image style={[styles.InfoAvter]} source={{uri:row.upic}}/>
                            <Text style={styles.Infotitle}>{row.uname}</Text>
                        </View>
                    </BlurView>
                </Image>
            </TouchableOpacity>
           </LazyloadView>

        )
    }

});


module.exports = ListUsers;
