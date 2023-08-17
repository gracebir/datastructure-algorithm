class Player{
    constructor(name, type){
        console.log("player",this)
        this.name = name;
        this.type = type;
    }

    introduce(){
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player{
    constructor(name, type){
        super(name, type);
        console.log("wizard",this)
    }
    play(){
        console.log(`WEEEEE I'm a ${this.type}`)
    }
}

const wizard1 = new Wizard("Grace", "Healer")
// const wizard2 = new Wizard("Julie", "Good")

wizard1.play()