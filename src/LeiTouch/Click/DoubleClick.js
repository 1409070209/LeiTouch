const delayTime = 300;
const offsetLength = 100;

class DoubleClick {
    _startX
    _startY
    _endX
    _endY
    _htmlElement

    _delayTime
    _offsetLength
    _startTime
    _isDoubleClick
    registerEvent(type , fun) {
        this._htmlElement.addEventListener(type,fun);
    }
    runEvent(event){
        event();
    }

    constructor (htmlElement,event){
        this._startX = this._startY = this._endX = this._endY = 0;
        this._startTime = +new Date();
        this._isDoubleClick = false;
        this._htmlElement = htmlElement;
        this._offsetLength = offsetLength;
        this._delayTime = delayTime;

        this.registerEvent('touchstart',(e) => {
            e.preventDefault();
            const finger = e.changedTouches[0];
            if (!this._isDoubleClick) {
                this._startX = finger.clientX;
                this._startY = finger.clientY;
                this._isDoubleClick = true;
                this._startTime = e.timeStamp;
                setTimeout(() => {
                    this._isDoubleClick = false;
                },this._delayTime)
            } else {
                this._endX = finger.clientX;
                this._endY = finger.clientY;
                this.runEvent(event);
            }
        });
    }
}
export default DoubleClick