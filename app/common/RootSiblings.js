import React, {
    Component,
} from 'react-native';
import RootSiblings from 'react-native-root-siblings';
import MModal from './MModal';


class MModalC extends Component {
    static propTypes = MModal.propTypes;

    static show = (CP) => {
        this._component =new RootSiblings(CP);
        //console.log(this._component);
        return this._component;
    };

    static hide = (CP) => {
        this._component.destroy();
        //this._component.update(CP);

    };

    _component = null;

   

    render() {
        return null;
    }
}



export default MModalC;
