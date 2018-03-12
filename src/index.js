class SmartCalculator {
    constructor(initialValue) {
        // your implementation
        this.numExpression = initialValue.toString();
    }

    add(number) {
        this.numExpression += `+${number}`;
        return this;
        // your implementation
    }

    subtract(number) {
        this.numExpression += `-${number}`;
        return this;
        // your implementation
    }

    multiply(number) {
        this.numExpression += `*${number}`;
        return this;
        // your implementation
    }

    devide(number) {
        this.numExpression += `/${number}`;
        return this;
        // your implementation
    }

    pow(number) {
        this.numExpression += `**${number}`;
        return this;
        // your implementation
    }
    valueOf() {
        return eval(this.numExpression);
    }
}

module.exports = SmartCalculator;
