class Calc {

    add(x, y) {
        this.x = x;
        this.y = y;
        return this.x + this.y;
    }

    sub(x, y) {
        this.x = x;
        this.y = y;
        return this.x - this.y;
    }

    mul(x, y) {
        this.x = x;
        this.y = y;
        return this.x * this.y;
    }

    div(x, y) {
        this.x = x;
        this.y = y;
        return this.x / this.y;
    }
}


let a = new Calc();

console.log(a.add(5, 6));
console.log(a.sub(5, 6));
console.log(a.mul(5, 6));
console.log(a.div(5, 6));