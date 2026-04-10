class CountSquares {
    constructor() {
        this.map = new Map();
    }

    /**
     * @param {number[]} point
     * @return {void}
     */
    add(point) {
        let key = `${point[0]},${point[1]}`;
        if(this.map.has(key)){
            this.map.set(key, this.map.get(key)+1);
        }else{
            this.map.set(key, 1);
        }
    }

    /**
     * @param {number[]} point
     * @return {number}
     */
    count(point) {
        let [x1,y1] = point;
        let count = 0;
        for(let key of this.map.keys()){
            let newpoint = key.split(",");
            let [x2 , y2] = [parseInt(newpoint[0]), parseInt(newpoint[1])];
            if(x1!==x2 && y1!==y2 && Math.abs(x1 - x2) === Math.abs(y1 - y2)){
                let [x3, y3] = [x1, y2];
                let [x4, y4] = [x2, y1]; 
                let k1 = `${x2},${y2}`;
                let k2 = `${x3},${y3}`;
                let k3 = `${x4},${y4}`;
                if(this.map.has(k1) && this.map.has(k2) && this.map.has(k3)){
                    count += this.map.get(k1) * this.map.get(k2) * this.map.get(k3);
                }else{
                    continue;
                }
            }
        }
        return count; 
    }
}
