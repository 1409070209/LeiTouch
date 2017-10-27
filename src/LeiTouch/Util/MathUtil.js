class MathUtil {
    static angleOfTwoPoint(start  ,end){
        //计算两个点的角度，不要问我为什么要加270，也不要研究为什么开发numToAngle函数
        const PI = Math.PI;
        const startX = start.x;
        const startY = start.y;
        const endX = end.x;
        const endY = end.y;
        const angle = Math.atan2(endX-startX,endY-startY)*180/PI;
        return MathUtil.numToAngle(angle+270);
    }
    static numToAngle(num){
        if (num === 0) return num;
        if (num > 0) {
            return num - 360*(parseInt(num/360));
        } else {
            return num + 360*(parseInt(Math.abs(num)/360)+1);
        }
    }
    static isMiddleOfTwoAngle(angle , low , high) {
        /*
         * 是否在两个角度(角度制)中间
         */
        angle = MathUtil.numToAngle(angle);
        low = MathUtil.numToAngle(low);
        high = MathUtil.numToAngle(high);
        if (low < high) {
            return angle > low && angle < high ;
        } else {
            return (angle > low && angle < (high+360))
                || (angle > (low-360) && angle < high);
        }
    }
    static distanceOfTwoPoint(s , e) {
        return Math.sqrt((e.x-s.x)*(e.x-s.x)+(e.y-s.y)*(e.y-s.y));
    }
}
export default MathUtil;