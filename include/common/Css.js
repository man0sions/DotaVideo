var React = require('react-native');
var Icon = require('react-native-vector-icons/Ionicons');
var {
    StyleSheet,
    AsyncStorage,
    Platform
    } = React;
var Dimensions = require('Dimensions');
var { width, height } = Dimensions.get('window');
var pheight = height / 100;
var pwidth = width / 100;
var androidHeightP = 0;
if(Platform.OS=="android")
{
    androidHeightP=2;
}
var headHeight = pheight * (8-androidHeightP);


/***
 * 全局公共变量,函数
 * @type {{default: string, primary: string, success: string, info: string, warning: string, danger: string}}
 */
var colors = {
    default: '#777',
    primary: '#337ab7',
    success: '#1ABC9C',
    info: '#5bc0de',
    warning: '#f0ad4e',
    danger: '#d9534f',
    gray: 'gray',
    white: '#fff'
}
/**
 *
 * @type {{default: number, h1: number, h2: number, h3: number, small: number}}
 */
var fontSize = {
    default: 14,
    h1: 30,
    h2: 20,
    h3: 14,
    small: 10
}
var styles = StyleSheet.create({
    h1: {
        fontSize: 26,
        paddingTop: 5,
        paddingBottom: 5,
        fontWeight: 'bold'


    },
    h2: {
        fontSize: 24,
        paddingTop: 5,
        paddingBottom: 5,
        fontWeight: 'bold'


    },
    h3: {
        fontSize: 14,
        fontWeight: 'bold'


    },
    h4: {
        fontSize: 20,
        paddingTop: 5,
        paddingBottom: 5,
        fontWeight: 'bold'


    }
    , h5: {
        fontSize: 16,
        paddingTop: 3,
        paddingBottom: 3,
        fontWeight: 'bold'


    },
    bgColor: {
        backgroundColor: 'rgb(255,255,255)',

    },
    items3: {
        justifyContent: 'center',
        width: width / 3,
        overflow: 'hidden'
    },
    itemLeft: {
        alignItems: 'flex-start'
    },
    itemRight: {
        alignItems: 'flex-end'
    },
    itemCenter: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    bold:{
        fontWeight:'bold'
    },



    /**
     *  公用头部底部
     * */

    header: {
        height: headHeight,
        width: width,
        justifyContent: 'center',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: {
            height: 1,
            width: 0
        },
        paddingTop:18

    },
    headicon: {

    },
    headtitle: {
        height: 18,
        overflow: 'hidden'
    },
    footer: {
        height: pheight * 6,
        width: width,
        flexDirection: 'row',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: {
            height: 1,
            width: 0
        }

    },
    footerItemsFont: {
        color: colors.default,
        fontSize: fontSize.small


    },
    footerItemsCenter: {
        borderLeftColor: '#dbdbdb',
        borderLeftWidth: 1,
        borderRightColor: '#dbdbdb',
        borderRightWidth: 1,


    },

    /**
     * width
     * */

    widthFull: {
        flexDirection: 'row',
        width: width-20,
        overflow: 'hidden',
        //borderWidth: 1,
        //borderColor: 'red'
    },
    widthEight: {
        width: pwidth*84-10,
        //borderWidth: 1,
        //borderColor: 'red'
    },

    widthFive: {
        width:pwidth*16-10,
        //borderWidth: 1,
        //borderColor: 'red'
    },
    heightS: {
        height:30
    },

    /**
     * flex
     * */
    spaceBetween: {
        justifyContent: 'space-between'
    },
    jcenter: {
        justifyContent: 'center',
    },
    fRow: {
        flexDirection: 'row'
    },
    fColumn: {
        flexDirection: 'column'
    },
    aCenter: {
        alignItems: 'center'
    },
    tRight: {
        alignItems: 'flex-end'
    },
    fend: {
        alignItems: 'flex-end'
    },



    /**
     * padding margin
     * */

    paddingVertical: {
        paddingTop:10
    },

    marginVertical: {
        marginTop:6
    },
    marginTwo: {
        marginTop:15
    },

    borderBottom: {
        borderColor: 'rgba(0,0,0,0.9)',
        borderBottomWidth: 0.1
    },

    paddingHorizontalA: {
        paddingHorizontal: 10,
        //borderWidth: 1,
        //borderColor: 'blue'
    },

    /**
     * 首页样式
     * */

    content: {
        height: pheight*(86-androidHeightP),
        overflow: 'hidden',
        //borderWidth: 1,
        //borderColor: 'blue'
    },
    mainContainer: {
        position: 'relative',
        width: width,
        overflow: 'hidden'
    },
    itemBox: {
        position: 'relative',
        borderColor: 'rgba(0,0,0,0.9)',
        borderBottomWidth: 0.1
    },
    Marginauto: {
        width: width-20,
        marginHorizontal: 10,
        marginVertical: 10,
        position: 'relative'
    },
    nameInfo: {
        color: '#333',
        fontSize: 10,
        overflow: 'hidden'
    },
    AuthorImg: {
        width: 30,
        height: 30,
        position : 'relative'
    },
    Nauthor: {
        fontSize:11,
        color: '#222'
    },
    NCate: {
        fontSize:8,
        color: '#ff0056',
        marginTop:2
    },
    Ndate: {
        fontSize:8,
        color: '#888'
    },
    Nclick: {
        fontSize:10,
        color: '#444',
        marginRight:5
    },
    Ntime: {
        fontSize:10,
        color: '#444',
        position: 'relative'
    },
    iconeye: {
        position: 'relative',
        marginRight: 2
    },
    ItemImg: {
        width: width-20,
        height: (width-20)/2,
        marginTop: 10,
        marginBottom: 5,
    },

    iconPlay: {
        width: 30,
        height: 30,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 15
    },
    NiconBox: {
        position: 'absolute',
        height: 14,
        bottom: 0,
        right: 0
    },





    loading: {
        flex: 1,
        textAlign: 'center',
        marginTop: 200
    },

    listContainer: {
        ////flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },

    a: {
        width:width/2-20,
        height: 200,
        position:'relative',
        shadowColor: "#000",
        shadowOpacity: 0.8,
        shadowRadius: 4,
        shadowOffset: {
            height: 8,
            width: 0
        }
    },


    /**
     * InfoList
     * */


    InfoHalf: {
        width: width/2-1,
        height: width/2-1
    },

    InfoContainer: {
        width: width,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },

    InfoItem: {
        //borderColor: 'red',
        //borderWidth:1,
        justifyContent: 'center',
        overflow: 'hidden',
        marginBottom: 2
    },

    InfoImage: {
        resizeMode: 'contain'
    },

    Infoopact: {
        backgroundColor: 'rgba(0,0,0,0.4)'
    },

    Infotitle: {
        color: '#fff'
    },

    InfoAvter: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginBottom: 10
    },


    /**
     * HotList
     * */

    HotWidth: {
        width: width,
        height: height/3
    },

    HotContainer: {
        width: width,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

    HotItem: {
        overflow: 'hidden',
    },

    HAuthorImg: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: 'rgba(12,215,143,1)'
    },

    Shadow: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginBottom: 10,
        marginTop: pheight*6,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOpacity: 0.5,
        shadowRadius: 4,
        shadowOffset: {
            height: 0,
            width: 0
        }
    },

    Hauthor: {
        fontSize: 12,
        color: '#fff'
    },

    Hname: {
        fontSize: 10,
        color: '#b9b9b9',
        marginVertical: 5,
        marginHorizontal: 30,
        textAlign: 'center'
    },

    Hfooter: {
        width: width,
        height: pheight*6,
        backgroundColor: 'rgba(0,0,0,0.3)',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        paddingHorizontal: pheight,
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,0.3)'
    },

    HiconBox: {
        width: width/3,
        justifyContent: 'center'
    },

    Hicon: {
        width: 14,
        height: 14,
        fontWeight: 'bold'
    },

    Htitle: {
        fontSize: 10,
        color: '#fff',
        marginLeft: 2,
        marginTop: 1
    },

    borderMR: {
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: 'rgba(0,0,0,0.4)'
    },

    Hlogo: {
        width: 40,
        height: 60,
        position: 'absolute',
        right: 15,
        top: 0
    },

    textGreen: {
        fontSize: 10,
        color: '#00ff96'
    },



    /**
     *UserVideoList
     * */



    UVLeft: {
        width: (width-20)/4,
        overflow: 'hidden'
    },


    UVImg: {
        width: (width-20)/4-8,
        height: pheight*8,
    },

    UVCenter: {
        width: (width-20)/4*2,
        height: pheight*8,
    },
    UVRight: {
        width: (width-20)/4,
        height: pheight*8,
        paddingLeft: 8
    },

    UVName: {
        fontSize: 9,
        lineHeight: 11,
        height: 12,
        overflow: 'hidden',
        color: '#7f7f7f',
        marginTop: pheight,
    },

    UVB: {
        height: pheight*3,
        backgroundColor: 'rgba(10,190,112,0.9)',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left:0,
        paddingHorizontal: 3,
        paddingVertical: 3
    },

    UVIcon: {
        width:12,
        height:11,
        marginRight:2
    },

    UVtime: {
        color: '#ff9a00',
        fontSize: 14,
        height: 14
    },

    UVminute: {
        color: '#ff9a00',
        fontSize: 10,
        height: 10

    },

    UVdate: {
        fontSize:10,
        color: '#e74c3c',
        marginBottom: 5,
        position: 'absolute',
        bottom: 0,
        left: 0
    },

    transform: {
        transform: [{rotate: '90deg'}],
    },

    iconUV: {
        width: 12,
        height: 12,
    },

    UVClick: {
        fontSize: 14,
        color: '#000',
        marginLeft: 20
    },


    UViconBox: {
        width: width/2,
        justifyContent: 'center'
    },

    UVborderMR: {
        borderRightWidth: 1,
        borderColor: 'rgba(0,0,0,0.4)'
    },


    seeBtn: {
        color: '#e54847',

        fontSize: 11,
        borderColor: '#e54847',
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 10,
        paddingVertical: 3,
        position: 'absolute',
        bottom: 0,
        right: 0
    },

});


const images = {
    default: require('../images/default.jpg')
}
module.exports = {
    styles:styles,
    colors:colors,
    fontSize:fontSize,
    userPicDef:'http://wx.wefi.com.cn/images/def.jpg',
    size:{
        width:width,
        height:height,
        headHeight:headHeight,
    },
    Icon:Icon

}




