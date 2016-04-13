var q = 'dota';
var Config = {

    jx:"http://wx.wefi.com.cn/wxbVideos/?r=TVPlaylist/GetSokuList&data={q:'"+q+"',cp:%s,limitdate:0}",
    userVideo:"http://wx.wefi.com.cn/wxbVideos/?r=TVPlaylist/GetYokuUserPlayList&data={q:'"+q+"',uid:'%s',cp:%s,od:%s,}",
    users:"http://wx.wefi.com.cn/wxbVideos/?r=TVPlaylist/GetSokuUser&data={q:'"+q+"',cp:%s}"
}
module.exports = Config;