import TouchEventUtil from '../Util/TouchEventUtil'
import MathUtil from '../Util/MathUtil'

const delayTime = 300;
const offsetLength = 100;

class DoubleClick {
    _start = {
        x : 0,
        y : 0,
        time : +new Date()
    }
    _end = {
        x : 0,
        y : 0,
        time : +new Date()
    }
    _htmlElement

    _delayTime = delayTime
    _offsetLength = offsetLength
    _isDoubleClick

    runEvent(event){
        if (this._offsetLength >= MathUtil.distanceOfTwoPoint(this._start,this._end)) {
            event();
        }
    }

    constructor (htmlElement,event){
        this._isDoubleClick = false;
        this._htmlElement = htmlElement;

        TouchEventUtil.registerEvent(this._htmlElement,'touchstart',(e) => {
            e.preventDefault();
            const finger = e.changedTouches[0];
            if (!this._isDoubleClick) {
                this._isDoubleClick = true;
                this._start = {
                    x : finger.clientX,
                    y : finger.clientY,
                    time : e.timeStamp
                }

                setTimeout(() => {
                    this._isDoubleClick = false;
                },this._delayTime)
            } else {
                this._end = {
                    x : finger.clientX,
                    y : finger.clientY
                }
                this.runEvent(event);
            }
        });
    }
}
export default DoubleClick