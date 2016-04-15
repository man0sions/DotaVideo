import React, {
    Component,
    View,
    PropTypes,
    Animated,
    Easing,
} from 'react-native';


import {styles,size} from './Css';
import {BackButton} from './Layout';
var {width,height} = size;
import Main from './Main';




class MModal extends Component {
    static displayName = 'MModal';



    static defaultProps = {
        visible: false,
        duration: 300,
        animation: true,
        delay: 10,
    };

    constructor() {
        super(...arguments);

        this.state = {
            visible: this.props.visible,
            top: new Animated.Value(size.height)
        };
    }
    componentWillMount(){

    }
    componentDidMount = () => {
        if (this.state.visible) {
            this._showTimeout = setTimeout(() => this._show(), this.props.delay);
        }
    };

    componentWillReceiveProps = nextProps => {

        if (nextProps.visible !== this.props.visible) {
            if (nextProps.visible) {
                clearTimeout(this._showTimeout);
                clearTimeout(this._hideTimeout);
                this._showTimeout = setTimeout(() => this._show(), this.props.delay);
            } else {

                this._hide();
            }

            this.setState({
                visible: nextProps.visible
            });
        }
    };

    componentWillUnmount = () => {
        //console.log("==>componentWillUnmount",this._animating);

        //this._hide();
    };

    shouldComponentUpdate = (nextProps, nextState) => {

        return this.state.visible !== nextState.visible;
    };

    _animating = false;
    _root = null;
    _showTimeout = null;

    _show = () => {
        clearTimeout(this._showTimeout);
        if (!this._animating) {
            this._animating = true;
            var top = this.props.top !== undefined ? this.props.top : size.headHeight;
            Animated.spring(this.state.top, {
                toValue:top,
            }).start(({finished}) => {
                if (finished) {

                    this._animating = !finished;
                    //console.log("==>_show",this._animating);
                    //if (this.props.duration > 0) {
                    //    this._hideTimeout = setTimeout(() => this._hide(), this.props.duration);
                    //}
                }
            });
        }
    };

    _hide = () => {
        clearTimeout(this._showTimeout);
            console.log("==>_hide");

            Animated.spring(this.state.top, {
                toValue: size.height,
                //duration: this.props.duration ,
                //easing: Easing.in(Easing.ease)
            }).start(({finished}) => {
                if (finished) {
                    this._animating = false;
                    this.props.siblingManager.destroy();

                }
            });

    };

    render() {
        let {props} =  this;

        return (this.state.visible || this._animating) ?
            <Animated.View style={[styles.modalShow,{top:this.state.top}]} ref={ele => this._root = ele}>
                {this.props.children}
        </Animated.View> : null;
    }
}

export default MModal;
