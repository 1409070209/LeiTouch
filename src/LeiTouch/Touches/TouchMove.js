/*
 * 实现TouchUp,TouchDown,TouchLeft,TouchRight事件
 */
import MathUtil from '../Util/MathUtil'

class TouchMove {
    _startX
    _startY
    _endX
    _endY
    _htmlElement
    //允许的误差范围
    _offsetAngle;
    runEvent(direction , event) {
        //满足方向的约束，就执行event;
        //求出两个点的顺时针角度
        const angles = MathUtil.angleOfTwoPoint(this._startX,this._startY,
                                                this._endX,this._endY);
        console.log(angles);
        let lowAngle = MathUtil.numToAngle(direction-this._offsetAngle);
        let highAngle = MathUtil.numToAngle(direction+this._offsetAngle);
        if (highAngle < lowAngle) {
            lowAngle -= 360;
        }
        if (MathUtil.isMiddleOfTwoAngle(angles,lowAngle,highAngle)){
            event();
        }
    }
    registerEvent(type , fun) {
        this._htmlElement.addEventListener(type,fun);
    }
    constructor (htmlElement , direction , event , allowableNum) {
        this._startX = this._startY = this._endX = this._endY = 0;
        this._offsetAngle = 40;
        this._htmlElement = htmlElement;
        this._offsetAngle = allowableNum;
        this.registerEvent('touchstart',(e) => {
            this._startX = e.changedTouches[0].clientX;
            this._startY = e.changedTouches[0].clientY;
        });
        this.registerEvent('touchend',(e) => {
            this._endX = e.changedTouches[0].clientX;
            this._endY = e.changedTouches[0].clientY;
            this.runEvent(direction , event)
        });
    }
}

export default TouchMove;