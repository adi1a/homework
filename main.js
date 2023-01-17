class Car {
    constructor(brend, model, year, speed){
        this.brend =brend;
        this.model = model;
        this.year = year;
        this.speed = speed;
    }

    plusSpeed(){
        return this.speed + 100;
    }

    minusSpeed(){
        return this.speed - 100;
    }
}

const carOne = new Car('BMW','m5', 2015, 100);
const carTwo = new Car('Ford', 'Mustang', 2000, 500);
const carThree = new Car('Audi', 'RS6', 2020, 90);

console.group('Cars');
console.log(carOne, carOne.plusSpeed());
console.log(carTwo, carTwo.plusSpeed());
console.log(carThree, carThree.minusSpeed());
console.groupEnd();

// ------- Второе задание-------//

const house = {
    address: 'Abay 30',
    floor: 10,
    room: 3,
    color: 'Gray',

    addRooms(){
        return this.room + 1;
    },
    
    get repaint(){
        return `${this.color}`
    },

    set repaint(value){
        [this.color] = value.split(' ');
    }
}

const houseOne = Object.create(house);
houseOne.address = 'Arbat street'
houseOne.floor = 5
houseOne.room = 10
houseOne.color = 'Yellow'
houseOne.repaint = 'Red'

const houseTwo = Object.create(house);
houseTwo.address = 'Samal 12'
houseTwo.floor = 2
houseTwo.room = 6
houseTwo.color = 'White'

const houseThree = Object.create(house);
houseThree.address = 'Mir 20'
houseThree.floor = 12
houseThree.room = 1
houseThree.color = 'Green'
houseThree.repaint = 'Blue'

console.group('Houses');
console.log(houseOne, houseOne.addRooms(), houseOne.repaint);
console.log(houseTwo, houseTwo.addRooms());
console.log(houseThree, houseThree.addRooms(),houseThree.repaint );
console.groupEnd();