// TASK-1
// ------
const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: true },
  { id: 3, name: "Suman", role: "student", active: false }
];
// MODULE-1 :USER PROCESSING ENGINE
//   -> Get only active users
//   -> Extract names of active users
//   -> Check if any admin exists
//   -> Find user by id
//   -> Deactivate a user immutably
//1)-----------------------------------------
//Get only active users
let activeusers=users.filter(user=>user.active===true)
console.log("activeusers",activeusers)
//Extract names of active users
let names=activeusers.map(user=>user.name)
console.log("names",names)
//Check if any admin exists
let admin=users.some(user=>user.role==="admin")
console.log("admin",admin)
//Find user by id
let user=users.find(user=>user.id===1)
console.log("user",user)
//Deactivate a user immutably
let deactivateuser=users.map(user=>user.id===1?{...user,active:false}:user)
console.log("deactivateuser",deactivateuser)