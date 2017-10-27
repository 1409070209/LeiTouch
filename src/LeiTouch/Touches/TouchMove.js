/*
 * TODO 已解决双指点击混淆单指移动的BUG
 * TODO 没有解决双指移动事件与本类(单指移动)混淆
 */
import MathUtil from '../Util/MathUtil'
import TouchEventUtil from '../Util/TouchEventUtil'

const minOffsetLength = 300;
const offsetAngle = 45;
const minMoveTime = 200;
class TouchMove {

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
    _thisPoint = {
        x : 0 ,
        y : 0,
        time : 0
    }
    _htmlElement
    //允许的误差范围
    _offsetAngle = offsetAngle
    _minMoveTime = minMoveTime
    _minOffsetLength = minOffsetLength;

    static TOUCH_LEFT = 0;
    static TOUCH_RIGHT = 180;
    static TOUCH_UP = 90;
    static TOUCH_DOWN = 270;
    runEvent(direction , event , e) {
        console.log(TouchEventUtil.isOneFinger(e))
        if (!TouchEventUtil.isOneFinger(e)) {
            console.log('不是一个手指')
            return;
        }
        if (this._end.time-this._thisPoint.time >= this._minMoveTime) {
            console.log(this._thisPoint.time + ' ' + this._end.time)
            return;
        }
        //满足方向的约束，就执行event;
        //求出两个点的顺时针角度
        const angles = MathUtil.angleOfTwoPoint(this._start , this._end);
        let lowAngle = MathUtil.numToAngle(direction-this._offsetAngle);
        let highAngle = MathUtil.numToAngle(direction+this._offsetAngle);
        if (highAngle < lowAngle) {
            lowAngle -= 360;
        }
        if (MathUtil.isMiddleOfTwoAngle(angles,lowAngle,highAngle)
            && MathUtil.distanceOfTwoPoint(this._start,this._end) >= this._minOffsetLength){
            event();
        }
    }
    constructor (htmlElement , direction , event , moveEvent) {
        this._htmlElement = htmlElement;
        TouchEventUtil.registerEvent(this._htmlElement,'touchstart',(e) => {
            e.preventDefault();
            const finger = e.changedTouches[0];
            this._start = {
                x : finger.clientX,
                y : finger.clientY,
                time : e.timeStamp
            }
        });
        TouchEventUtil.registerEvent(this._htmlElement,'touchend',(e) => {
            e.preventDefault();
            const finger = e.changedTouches[0];
            this._end = {
                x : finger.clientX,
                y : finger.clientY,
                time : e.timeStamp
            }
            this.runEvent(direction , event , e)
        });
        TouchEventUtil.registerEvent(this._htmlElement , 'touchmove' , (e) => {
            e.preventDefault();
            if (this._thisPoint.time &&
                e.timeStamp-this._thisPoint.time < this._minMoveTime &&
                !TouchEventUtil.isOneFinger(e)) {
                return;
            }

            const finger = e.changedTouches[0];
            this._thisPoint = {
                x : finger.clientX,
                y : finger.clientY,
                time : e.timeStamp
            }
            if (typeof moveEvent === 'function') {
                moveEvent(MathUtil.distanceOfTwoPoint(this._thisPoint,this._start));
            }
        })
    }

    set offsetAngle (value) {
        this._offsetAngle = value
    }
}

export default TouchMove;