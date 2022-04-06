
class Dog{
    constructor(name, type, color, eyes, legs, says, food) {
        this.name = name;
        this.type = type;
        this.color = color;
        this.eyes = eyes;
        this.legs = legs;
        this.says = says;
        this.food = food;
        this.dogStands = false;
        this.dogTalks = true;
    }
    standsYes() {
        this.dogStands = true;
        console.log(`${this.name}: I am standing.”` );
    }

    standsNo() {
        this.dogStands = false;
        console.log(`${this.name}: I am sitting.”` );
    }
    talksYes() {
        this.dogTalks = true;
        console.log(`${this.name}: ${this.says}` );
    }

    talksNo() {
        this.dogTalks = false;
        console.log(`${this.name} says nothing.` );
    }

    prisistatymas(text) {
        if (!this.dogTalks) {
            console.log(this.name, 'prisistatyti nenori');
            
        }
        if (this.dogTalks) {
            console.log(`Hi, I am a ${this.type} and my name is ${this.name}. My color is ${this.color}. My eyes are ${this.eyes}. 
            I have ${this.legs} legs. Right now I am standing.`);
        }
    }
}



const dog1 = new Dog('Lokis', 'dog', 'red', 'brown', 4, 'au-au!', 'sausiakas');

dog1.standsYes()
dog1.talksYes()
dog1.prisistatymas()


