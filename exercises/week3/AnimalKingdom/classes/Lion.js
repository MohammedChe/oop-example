import Feline from "./Feline.js";

class Lion extends Feline {

    constructor(_name, _age){
        super(_name, _age);
    }

    makeNoise(){
        console.log("Roaring: roaaarrrr!!");
    }

}

export default Lion;