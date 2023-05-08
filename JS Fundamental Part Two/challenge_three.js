// coding challenge three //
 const markObj = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.valueBMI = (this.mass) / (this.height ** 2);
        return this.valueBMI;
    }

 };

 const johnObj = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.valueBMI = (this.mass) / (this.height ** 2);
        return this.valueBMI;
    }

 };


const markBMI = markObj.calcBMI();
const johnBMI = johnObj.calcBMI();

console.log(`${johnObj.fullName}'s BMI (${johnBMI}) is ${markBMI < johnBMI ? "higher" : "lower"} than ${markObj.fullName}'s  (${markBMI})`);