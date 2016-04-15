# 一个基于react native 的dota视频app


### [android apk下载](https://www.pgyer.com/DotaVideo)


### Install
首先请根据自己的电脑配置环境，参考：http://facebook.github.io/react-native/releases/0.23/docs/getting-started.html#content


**mac下**:

mac的依赖可以用[rnpm](https://github.com/rnpm/rnpm)自动安装
```
npm install
rnpm link
react-native run-ios

```

**windows下**：

```
npm install

win下请自行手动安装android依赖,
"react-native-blur": "^0.7.11",
"react-native-lazyload": "^0.2.1",
"react-native-orientation": "^1.15.0",
"react-native-vector-icons": "^1.3.4",
"react-native-video": "^0.7.1"

react-native run-android

```
> 注：目前android bug较多（各种依赖不支持），建议在mac下通过ios虚拟机或者iphone真机调试。


_在此感谢我的老婆[YiHang](http://git.oschina.net/tingX)对项目的支持，此项目ui布局从设计到实现都由她完成。_

#### 目标：

基于react native 开发一款兼容ios和android的dota视频app。

#### 已完成：
视频列表、主播列表、主播详细、视频播放

### 截图

#####标题视频列表
![image](http://wx.wefi.com.cn/images/d1.jpg)
#####主播列表
![image](http://wx.wefi.com.cn/images/d2.jpg)
#####主播详细
![image](http://wx.wefi.com.cn/images/d3.jpg)
#####视频播放
![image](http://wx.wefi.com.cn/images/d4.jpg)


ui少部分模仿开眼，其他由（tingSun ）提供支持。

### React-Native Modules In Using
>  "react-native-blur": "^0.7.11",

>  "react-native-vector-icons": "^1.3.4",

>  "react-native-lazyload": "^0.2.1",

>  "react-native-orientation": "^1.15.0",

>  "react-native-video": "^0.7.1"