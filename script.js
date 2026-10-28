let t1 = 200;
let t2 = 180;
let t3 = 150;

let total = t1 + t2 + t3;

console.log("Total Price: ₹" + total);

if (total > 500) {
    console.log("Price exceeds ₹500");
} else {
    console.log("Price does not exceed ₹500");
}




let a = 10;
if (a >0) {
    console.log("a is positive");
} 
else if (a = 0) {
    console.log("a is zero");
}
else  {
    console.log("a is negative");
}

function greet(name){
 console.log("Hello, " + name + "!");
}
greet("APJ");
  

function add(x, y) {
    return x + y;
}
console.log("Sum: " + add(5, 3));





calculatetotal(100, 200, 300); 
function calculatetotal(t1, t2, t3) {
    let total = t1 + t2 + t3;
    console.log("Total Price: ₹" + total);
}







array = [1, 2, 3, 4, 5];
    console.log(array.length);



    filteredArray = array.filter(function (value) {
        return value > 2;
    });
    console.log(filteredArray);         

    mappedArray = array.map(function (value) {
        return value * 2;
    });
    console.log(mappedArray);       


    reducedValue = array.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);
    console.log(reducedValue);      





    const name = "John";
    const score = 85;
    const message = `Hello, ${name}! Your score is ${score}.`;
    console.log(message);   





    const book = {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: 1000
    };
     book.price = 1200;
    console.log(book.price);


    const student = {
        name: "Alice",
        age: 20,
         address: {
            street: "123 Main St",
            city: "New York",
            zip: "10001"
        }   
    };
    console.log(student.address.city);
     

    const database = [
        {name: "John", age: 25},
        {name: "Alice", age: 30},
        {name: "Bob", age: 35}
    ];
    console.log(database[1].name);
    console.log(database[2].age);



    const students = {
        name: "sarang",
        age: 9,
        address: {
            street: "123 Main St", 
    }
};
     const { age, address } = students;
     console.log(age);
     console.log(address.street);



    console.log("Registraion recived!");
    setTimeout(() => console.log("Message confrimed "), 3000);


     console.log
    ("Registraion recived!");  

        console.log("Message confrimed ");





        console.log ("Registraion recived!");
        setTimeout(() => console.log("Message confrimed "), 3000);                      
        

        async function fetchData() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }       
        }



            async function showEvent() {
                const event = await getEvent();
                console.log(event.title);
            }
            showEvent();


        async function getEvent() {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({ title: "Sample Event" });
                }, 3000);
            }); }


            console.log("Registraion recived!");
            setTimeout(() => console.log("Registration confrimed "), 3000);