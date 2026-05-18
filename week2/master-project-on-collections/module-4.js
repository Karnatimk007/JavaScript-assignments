// MODULE 4: ROLE & PERMISSION ENGINE
//   -> Get all role names
//   -> Check if student can delete
//   -> Create a flat list of all unique permissions
//   -> Add new role moderator immutably
const roles = {
  admin: ["create", "update", "delete", "view"],
  student: ["view"]
};
// Get all role names
let allroles=Object.keys(roles)
console.log("allroles",allroles)
// Check if student can delete
let studentcandelete=roles.student.includes("delete")
console.log("studentcandelete",studentcandelete)
// Create a flat list of all unique permissions
let allpermissions=Object.values(roles).flat()
let uniquepermissions=[...new Set(allpermissions)]
console.log("allpermissions",uniquepermissions)
// Add new role moderator immutably
let updatedroles={...roles,moderator:["view","update"]}
console.log("updatedroles",updatedroles)