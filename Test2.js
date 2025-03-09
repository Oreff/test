const dataa = [1, 2, 3];

let obj = JSON.stringify(dataa); //Convert A normal array or object to a JSON 
console.log(obj);

const json = `{"name" : "ore", 
"employer" : {
    "company" : "Mazda",
    "numberOfJobs" : 20
}}`;

console.log(JSON.parse(json).employer.company) //Consvertss a JSON Type to Normal

console.log("check");