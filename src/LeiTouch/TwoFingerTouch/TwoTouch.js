import TouchEventUtil from '../Util/TouchEventUtil'
import Finger from './Finger/Finger'

class TwoTouch {
    _fingerList = [];
    _thisPoint;
    _htmlElement ;
    constructor (htmlElement) {
        this._htmlElement = htmlElement;
        TouchEventUtil.registerEvent(this._htmlElement , 'touchstart' , (e) => {
            const fingerList = e.changedTouches;
            for (let i = 0; i < fingerList.length; i++) {
                let item = fingerList[i]
                const finger = new Finger(item , e.timeStamp);
                this._fingerList.push(finger);
            }
        })
        TouchEventUtil.registerEvent(this._htmlElement , 'touchmove' , (e) => {

        })
    }
}
export default TwoTouch