var obj = {name: "Elie", job: "Instructor"}
for (var key in obj) {
   console.log(key); // name, job
}

Object.prototype.lastName = "Schoppik";
for (var key in obj) {
   console.log(key); // name, job, lastName
}