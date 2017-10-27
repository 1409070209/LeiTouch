class TouchEventUtil {

    static fingerNum(e) {
        return e.changedTouches.length;
    }
    static isOneFinger(e) {
        return TouchEventUtil.fingerNum(e) === 1;
    }
    static registerEvent(htmlElement,type,event) {
        htmlElement.addEventListener(type,event);
    }
}
export default TouchEventUtil;