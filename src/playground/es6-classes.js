class Person {
    constructor(name, location = 'Unknown', age = 0) {
        this.name = name || 'N/A';
        this.location = location;
        this.age = age;
    }
    getGreeting() {
        return `Hi ${this.name} from ${this.location}, it's great to see you! You are ${this.age} years old`;
    }
    
}

class Student extends Person{
    constructor(name, location, age, major) {
        super(name, location, age);
        this.major = major;
    }
    hasMajor() {
        // console.log(`Does ${this.name} have a major: `)
        return !!this.major
    }
    getGreeting() {
        let description = super.getGreeting()
        if (this.hasMajor()) {
            description = `${description} and majoring in ${this.major}`
        }
        return description + '| Student'
        
    }
}

class Traveler extends Person {
    constructor(name, location, age, destination) {
        super(name, location, age);
        this.destination = destination;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if (!!this.destination) {
            greeting = `${greeting} and are headed to ${this.destination}`
        }
        return 'Traveler: ' + greeting;
    }
}

const me = new Student('Vitesh Kambara', 'Cary', 19, 'Computer Science');
const friend = new Student('Lucifer Morningstar')
console.log(me)
console.log(friend)
console.log(me.getGreeting())
console.log('Has a Major: ' + me.hasMajor())
console.log(friend.getGreeting())
console.log('Has a Major: ' + friend.hasMajor())

const Jordan = new Traveler('Jordan Baker', 'Los Angeles', 19, 'Toledo')
console.log(Jordan)
console.log(Jordan.getGreeting())
