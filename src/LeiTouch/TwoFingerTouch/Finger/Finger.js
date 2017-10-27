class Finger {
    x = 0;
    y = 0;
    time = +new Date();

    constructor (finger , tampStamp){
        this.x = finger.clientX;
        this.y = finger.clientY;
        this.time = tampStamp;
    }
}
export default Finger