class ComplexNumbers {
    constructor(real, imaginery){
        this.real =  real;
        this.imaginery = imaginery;
    }
   
    callFun(){
        console.log("real assigned " + this.real + "," + "imaginery assigned" + this.imaginery);
    }
}

module.exports.ComplexNumbers =  ComplexNumbers;