var q = 'dota';
var jxdta = encodeURIComponent("{q:'"+q+"',cp:%s,limitdate:0}");
var userVideoData = encodeURIComponent("{q:'"+q+"',cp:%s,limitdate:0}");
var usersData = encodeURIComponent("{q:'"+q+"',cp:%s}");
var Config = {

    jx:"http://wx.wefi.com.cn/wxbVideos/?r=TVPlaylist/GetSokuList&data="+jxdta,
    userVideo:"http://wx.wefi.com.cn/wxbVideos/?r=TVPlaylist/GetYokuUserPlayList&data="+userVideoData,
    users:"http://wx.wefi.com.cn/wxbVideos/?r=TVPlaylist/GetSokuUser&data="+usersData
}
module.exports = Config;