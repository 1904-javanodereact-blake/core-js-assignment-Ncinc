/* 10 Object Creation
Create an object using an object literal, constructor 
function, and es6 class.
The object should have the fields name and age.*/
function CravenBlade(name, weight, age , type, damage)
{
    this.name = name;
    this.weight = weight;
    this.age = age;
    this.type = type;
    this.damage = damage;
    
}

let sword = new CravenBlade ('Craven Blade', '60 strength', 200, 'Darkness', 100 )


console.log(sword);


////////////////////////////////////////////////////////

class BusterAxe
{
    constructor(name, weight, age , type, damage)
    {
        this.name = name;
        this.weight = weight;
        this.age = age;
        this.type = type;
        this.damage = damage;
    }
    getName()
    {
    return this.name;
    }
}

let axe = new BusterAxe('BusterAxe', '80 strength', 50, 'normal', 300)

console.log(axe.getName());



////////////////////////////////////////////////////////

let holyDagger = { name: 'holyDagger', weight: '10 strength', age: 1000, type: 'Holy', damage: 200}

console.log(holyDagger);