var q = 'dota';
var jxdta = ("{q:'"+q+"',cp:%s,limitdate:%s}");
var userVideoData = ("{q:'"+q+"',uid:'%s',cp:%s,limitdate:0}");
var usersData = ("{q:'"+q+"',cp:%s}");

var routers = [
    {label: 'Home', text: '每日精选',nav:true},
    {label: 'Users', text: '发现更多',nav:true},
    {label: 'TopList', text: '热门排行',nav:true},

];

var Config = {

    jx:"http://wx.wefi.com.cn/wxbVideos/?r=TVPlaylist/GetSokuList&data="+jxdta,
    userVideo:"http://wx.wefi.com.cn/wxbVideos/?r=TVPlaylist/GetYokuUserPlayList&data="+userVideoData,
    users:"http://wx.wefi.com.cn/wxbVideos/?r=TVPlaylist/GetSokuUser&data="+usersData,
    routers:routers
}
module.exports = Config;