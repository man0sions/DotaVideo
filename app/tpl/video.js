'use strict';

var React = require('react-native');
var Video = require('../component/Player');

var {

    View,

    } = React;


module.exports = React.createClass({

    render: function() {
        var url = 'http://101.200.79.153/wxbVideos/?r=site/m3u8&url=http://v.youku.com/v_show/id_'+this.props.vid+'.html';

        var sp = url.split(/data=/);
        if(sp.length>1)
        {
            var data = encodeURIComponent(sp[1]);
            url = sp[0]+'&data='+data;
        }


        return (
           <Video url={url} {...this.props}></Video>
        );
    },
});
