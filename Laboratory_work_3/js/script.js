// 1.2.3
let car1 = new Object();
car1.color = "black";
car1.maxSpeed = 280;
car1.driver = new Object();
car1.driver.name = "Denys Maziarchuk";
car1.driver.category = "C";
car1.driver["personal limitations"] = "No driving at night";
car1.tuning = true;
car1["number of accidents"] = 0;

// 1.2.4
let car2 = {
    color: "white",
    maxSpeed: 300,
    driver: {
        name: "Denys Maziarchuk",
        category: "B",
        "personal limitations": null,
    },
    tuning: false,
    "number of accidents": 2,
    //1.2.6
    drive: function() {         
        console.log("I can drive anytime");
    },
};

// 1.2.5
car1.drive = function() {
    console.log("I am not driving at night");
};

car1.drive();

// // 1.2.6       ???????????????????????????????????
// car2.drive = function() {
//     console.log("I can drive anytime");
// };

car2.drive();

// 1.2.7
function Truck (color, weight, avgSpeed, brand, model){
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;
}

//let myTruck = new Truck("black", 5000, 83.5, "Ford", "F-150");

// 1.2.8
Truck.prototype.AssignDriver = function (name, nightDriving, experience) {
    this.driver = {
        name: name,
        nightDriving: nightDriving,
        experience: experience
    };
}

//myTruck.AssignDriver("Denys Maziarchuk", true, 5);
//console.log(myTruck);

// 1.2.9
Truck.prototype.trip = function () {
    if (!this.driver)
        console.log("No driver assigned");
    else{
        console.log("Driver " + this.driver.name +
        (this.driver.nightDriving ? " drives at night" : " does not drive at night") +
        " and has " + this.driver.experience + " years of experience.");
    }
}

// 1.2.10
let myTruck1 = new Truck("black", 5000, 83.5, "Ford", "F-150");
myTruck1.AssignDriver("Denys Maziarchuk", true, 5);
myTruck1.trip();

let myTruck2 = new Truck("white", 6000, 70, "Chevrolet", "Silverado");
myTruck2.AssignDriver("Denys Maziarchuk", false, 5);
myTruck2.trip();

let myTruck3 = new Truck("green", 5500, 75, "Dodge", "Ram");
myTruck3.trip();


// 1.2.12
class Square {
    constructor(a) { 
        this.a = a;
    }

    // 1.2.14
    static help() {
        console.log("Квадрат — чотирикутник, у якого всі сторони рівні і всі кути прямі.");
        console.log("Властивості квадрата:");
        console.log("\t· Всі сторони квадрата рівні");
        console.log("\t· Кожен із кутів квадрата дорівнює 90°");
        console.log("\t· Діагоналі квадрата рівні й точкою перетину діляться навпіл");
        console.log("\t· Діагоналі квадрата взаємно перпендикулярні");
        console.log("\t· Діагоналі квадрата є бісектрисами його кутів");
        console.log("\t· Діагоналі квадрата ділять його на чотири рівні прямокутні рівнобедрені трикутники");
    }

    // 1.2.15
    length() {
        console.log("Периметр квадрата: P = " + 4 * this.a);
    }
    
    square() {
        console.log("Площа квадрата: S = " + Math.pow(this.a, 2)); 
    }

    info() {
        console.log("Довжини сторін: a = b = c = d = " + this.a); 
        console.log("Величини кутів: ∠a = ∠b = ∠c = ∠d = 90°"); 
        this.length();
        this.square();
    }
}

// 1.2.13
const square = new Square(5);

//Square.help();
// square.length();
// square.square();
// square.info();

// 1.2.16
class Rectangle extends Square {
    // 1.2.17
    constructor(a, b) { 
        super(a);
        this.b = b;
    }

    static help() {
        console.log("Прямокутник — чотирикутник, у якого всі кути прямі.");
        console.log("Властивості прямокутника:");
        console.log("\t· Протилежні сторони прямокутника рівні");
        console.log("\t· Діагоналі прямокутника рівні");
        console.log("\t· Діагоналі прямокутника перетинаються і точкою перетину діляться навпіл");
        console.log("\t· Діагоналі прямокутника ділять його на два рівні трикутники");
        console.log("\t· Висоти прямокутника є одночасно і його сторонами");  
    }

    length() {
        console.log("Периметр прямокутника: P = " + 2 * (this.a + this.b));
    }
    
    square() {
        console.log("Площа прямокутника: S = " + this.a * this.b); 
    }

    info() {
        console.log("Довжини сторін: a = c = " + this.a + ", b = d = " + this.b); 
        console.log("Величини кутів: ∠a = ∠b = ∠c = ∠d = 90°"); 
        this.length();
        this.square();
    }

    // 1.2.22
    get a(){
        return this._a;
    }

    set a(value){
        if (value > 0)
            this._a = value;
        else
            console.log("Сторона прямокутника не може бути меншою за нуль, або дорівнювати йому")
    }

    get b(){
        return this._b;
    }

    set b(value){
        if (value > 0)
            this._b = value;
        else
            console.log("Сторона прямокутника не може бути меншою за нуль, або дорівнювати йому")
    }
}

// const rectangle = new Rectangle(5, 3);
// rectangle.length();
// rectangle.square();
// rectangle.info();


// 1.2.18
class Rhombus extends Square {
    // 1.2.19
    constructor(a, alpha, beta) { 
        super(a);
        this.alpha = alpha;
        this.beta = beta;
    }

    static help() {
        console.log("Ромб — це паралелограм, у якого всі сторони рівні.");
        console.log("Властивості ромба:");
        console.log("\t· Протилежні кути ромба рівні");
        console.log("\t· Діагоналі ромба перетинаються під прямим кутом, точка перетину є серединою кожної діагоналі");
        console.log("\t· Діагоналі ромба є бісектрисами кутів, з яких вони проведені");
        console.log("\t· Сторони ромба попарно паралельні");
    }

    length() {
        console.log("Периметр ромба: P = " + 4 * this.a);
        //super.length();
    }
    
    square() {
        console.log("Площа ромба: S = " + Math.pow(this.a, 2) * Math.sin(this.alpha * Math.PI / 180)); 
    }

    info() {
        console.log("Довжини сторін: a = b = c = d = " + this.a); 
        console.log("Довжини сторін: ∠a = ∠c = " + this.alpha + ", ∠b = ∠d = " + this.beta + "°"); 
        this.length();
        this.square();
    }
}

// const rhombus = new Rhombus(3, 60, 30);
// rhombus.length();
// rhombus.square();
// rhombus.info();


// 1.2.20
class Parallelogram extends Rhombus {
    // 1.2.21
    constructor(a, b, alpha, beta) { 
        super(a, alpha, beta);
        this.b = b;
    }

    static help() {
        console.log("Паралелограм — чотирикутник, протилежні сторони якого попарно паралельні.");
        console.log("Властивості паралелограма:");
        console.log("\t· Протилежні сторони паралелограма рівні");
        console.log("\t· Діагоналі паралелограма перетинаються та точкою перетину діляться навпіл");
        console.log("\t· Одна пара протилежних сторін є паралельними і мають однакову довжину");
        console.log("\t· Загальна сума кутів паралелограма дорівнює 360°");
    }
    
    length() {
        console.log("Периметр паралелограма: P = " + 2 * (this.a + this.b));
    }
    
    square() {
        console.log("Площа паралелограма: S = " + this.a * Math.sin(this.alpha * Math.PI / 180) * this.b); 
    }

    info() {
        console.log("Довжини сторін: a = c = " + this.a + ", b = d = " + this.b); 
        console.log("Довжини сторін: ∠a = ∠c = " + this.alpha + ", ∠b = ∠d = " + this.beta + "°"); 
        this.length();
        this.square();
    }
}

// const parallelogram = new Parallelogram(3, 7, 60, 30);
// parallelogram.length();
// parallelogram.square();
// parallelogram.info();


// 1.2.23
console.log("")
Square.help();
console.log("")
Rectangle.help();
console.log("")
Rhombus.help();
console.log("")
Parallelogram.help();
console.log("")

// 1.2.24
const mySquare = new Square(4);
mySquare.info();
console.log("")
const rectangle = new Rectangle(7, 2);
rectangle.info();
console.log("")
const rhombus = new Rhombus(4, 40, 50);
rhombus.info();
console.log("")
const parallelogram = new Parallelogram(3, 7, 60, 30);
parallelogram.info();
console.log("")

// 1.2.25
function Triangular(a = 3, b = 4, c = 5) {
    return { a, b, c }; 
}

// 1.2.26
let defaultTriangle = Triangular();
let triangle1 = Triangular(6, 10);
let triangle2 = Triangular(5, 12, 13);

console.log("Default Triangle:", defaultTriangle);
console.log("Triangle 1:", triangle1);
console.log("Triangle 2:", triangle2);

// 1.2.27
function PiMultiplier(multiplier) {
    let resultFunction = function (){
        return Math.PI * multiplier;
    }; 
    return resultFunction;
}

// 1.2.28
let multiplyBy2 = PiMultiplier(2);
let multiplyBy2_3 = PiMultiplier(2/3);
let divideBy2 = PiMultiplier(1/2);

console.log("");
console.log("π * 2 =", multiplyBy2(3));
console.log("π * 2/3 =", multiplyBy2_3());
console.log("π / 2 =", divideBy2());
console.log("");

// 1.2.29
function Painter(color) {
    let paintFunction = function(object) {
        if (object.hasOwnProperty('type'))
            console.log(`Painting object with type ${object.type} to color ${color}`);
        else 
            console.log(`No 'type' property occurred!`);
    };
    return paintFunction;
}

// 1.2.30
let PaintBlue = Painter('blue');
let PaintRed = Painter('red');
let PaintYellow = Painter('yellow');

// 1.2.31
let object1 = { 
    maxSpeed: 280, 
    type: 'Sportcar',
    color: 'magenta', 
};
let object2 = { 
    type: 'Truck', 
    avgSpeed: 90, 
    loadCapacity: 2400,
};
let object3 = { 
    maxSpeed: 180,
    color: 'purple',
    isCar: true,
};

console.log("Painting object 1:");
PaintBlue(object1);
console.log("Painting object 2:");
PaintRed(object2);
console.log("Painting object 3:");
PaintYellow(object3);