import TouchEventUtil from '../Util/TouchEventUtil'
import MathUtil from '../Util/MathUtil'

const delayTime = 1000;
const offsetLength = 200;
class LongTouch {
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

    //手指已经挪开
    _isTouchEnd = false
    //长按的时限
    _delayTime = delayTime
    //手指滑动的最大误差
    _offsetLength = offsetLength
    runEvent(event){
        const offset = MathUtil.distanceOfTwoPoint(this._start,this._end)
        if (!this._isTouchEnd && offset <= this._offsetLength) {
            event();
        }
    }
    constructor (htmlElement , event){
        this._htmlElement = htmlElement;

        TouchEventUtil.registerEvent(this._htmlElement,'touchstart' , (e) => {
            e.preventDefault();
            const finger = e.changedTouches[0];

            this._start = {
                x : finger.clientX,
                y : finger.clientY,
                time : e.timeStamp
            }
            this._end = {
                x : finger.clientX,
                y : finger.clientY,
                time : e.timeStamp
            }
            this._isTouchEnd = false;

            setTimeout(() => {
                this.runEvent(event);
            },this._delayTime)
        })
        TouchEventUtil.registerEvent(this._htmlElement,'touchend' , (e) => {
            e.preventDefault();
            const finger = e.changedTouches[0];
            this._isTouchEnd = true;
            this._end = {
                x : finger.clientX,
                y : finger.clientY,
                time : e.timeStamp
            }
        })
        TouchEventUtil.registerEvent(this._htmlElement,'touchmove',(e) => {
            e.preventDefault();
            const finger = e.changedTouches[0];
            this._isTouchEnd = true;
            this._end = {
                x : finger.clientX,
                y : finger.clientY,
                time : e.timeStamp
            }
        })
    }
}
export default LongTouch;