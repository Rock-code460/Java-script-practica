let vanguard = {
    id: "1",
class: "vanguard",
strength: "3",
speed: "2",
health: "1",
};

let footman = {
    id: "2",
class: "footman",
strength: "1",
speed: "3",
health: "2",
};

let knight = {
    id:"3",
class: "knight",
strength: "2",
speed: "1",
health: "3",
};

let newClass = {
    id:"4",
class: "archer",
strength: "1",
speed: "3",
health: "1"
};

let exists = false;

// 1. Create array using existing objects
let Chivalry2 = [vanguard, footman, knight];

// 2. Standard for-loop fix (added 'i' before '<')
for (let i = 0; i < Chivalry2.length; i++) {
    
}

console.table(Chivalry2);

// 3. forEach fix (renamed callback parameter)
Chivalry2.forEach(item => {
   if (item.class === newClass.class) {
        exists = true;
    }
});

// 4. Push new object to array
Chivalry2.push({
class: "archer",
strength: "1",
speed: "3",
health: "1",
});

if (!exists) {
    Chivalry2.push(newClass);
    console.log("Archer was added to the array.");
} else {
    console.log("Archer already exists in the array!");
}

console.table(Chivalry2);

// Creates a new array containing only the class strings
let classNames = Chivalry2.map(item => item.class);
console.log(classNames);
// Output: ["vanguard", "footman", "knight", "archer"]


console.log("Class names are...");
for (let i = 0; i < Chivalry2.length; i++) {
    console.log(Chivalry2[i].class);
}


console.log("Fast classes are...");
let fastClasses = Chivalry2.filter(item => Number(item.speed) > 1);
fastClasses.forEach(item => console.log(item.class));


function findClassById(id) {
    let result = Chivalry2.find(item => item.id === id);
    
    if (result) {
        console.log("Match found:", result);
    } else {
        console.log(`ID ${id} does not exist in array.`);
    }
    
    return result;
}

// Call the function with any ID
findClassById("1"); // Displays Vanguard object
findClassById("5"); // Displays Archer object