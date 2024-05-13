var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// this is my base class
var ElectronicDevice = /** @class */ (function () {
    // parameterised constructor
    function ElectronicDevice(name) {
        this.isOn = false;
        this.name = name; // Moto
    }
    ElectronicDevice.prototype.turnOn = function () {
        this.isOn = true;
        console.log("".concat(this.name, " is turned on"));
    };
    ElectronicDevice.prototype.turnOff = function () {
        this.isOn = false;
        console.log("".concat(this.name, " is turned off"));
    };
    return ElectronicDevice;
}());
var Laptop = /** @class */ (function (_super) {
    __extends(Laptop, _super);
    /**
     *
     */
    function Laptop(name, batteryLevel) {
        var _this = _super.call(this, name) || this; // call the base class contructor
        _this.batteryLevel = batteryLevel; // 75
        return _this;
    }
    Laptop.prototype.checkBattery = function () {
        console.log("".concat(this.name, " battery level is a ").concat(this.batteryLevel, "%"));
    };
    return Laptop;
}(ElectronicDevice));
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
var laptop = new Laptop('Lenovo', 95);
laptop.turnOn();
laptop.checkBattery(); // 
// let phone = new Phone("Moto", 'g64');
// phone.makeCall("123456789");
// phone.turnOff();
