
// this is my base class
class ElectronicDevice {
    isOn: boolean;
    name: string;

    // parameterised constructor
    constructor(name: string) {
           this.isOn = false;
           this.name = name; // Moto
    }

    turnOn() : void {
        this.isOn = true;
        console.log(`${this.name} is turned on`);
        
    }

    turnOff() : void {
        this.isOn = false;
        console.log(`${this.name} is turned off`);
        
    }
}
class Laptop extends ElectronicDevice {
    batteryLevel: number;
    /**
     *
     */
    constructor(name: string, batteryLevel: number) {
        super(name); // call the base class contructor
        this.batteryLevel = batteryLevel; // 75
    }

    checkBattery() : void {
        console.log(`${this.name} battery level is a ${this.batteryLevel}%`);
        
    }
}
// class Phone extends ElectronicDevice {
//     model: string;

//     constructor(name: string, model: string) {
//         super(name); // Call base class constructor moto
//         this.model = model; // g64
//     }

//     makeCall(number: string) : void {
//         console.log(`Dialing ${number} from ${this.name}...`);
        
//     }
// }

let laptop = new Laptop('Lenovo',95)
laptop.turnOn();
laptop.checkBattery(); // 

// let phone = new Phone("Moto", 'g64');
// phone.makeCall("123456789");
// phone.turnOff();

