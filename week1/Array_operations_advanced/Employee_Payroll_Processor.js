// ASSIGNMENT 3:
// -------------
// Employee Payroll Processor

// You are building a salary processing module in a company HR app.

// Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];
// Tasks:
//     1. filter() employees from IT department
//     2. map() to add:
//             netSalary = salary + 10% bonus
//     3. reduce() to calculate total salary payout
//     4. find() employee with salary 30000
//     5. findIndex() of employee "Neha"
console.log(employees.filter((emp) => emp.department === "IT"));
const updatedEmployees = employees.map(emp => {
  return {
    ...emp,
    netSalary: emp.salary + emp.salary * 0.10
  };
});
console.log("With Net Salary:", updatedEmployees);
console.log(updatedEmployees.reduce((total,emp)=>total+emp.netSalary,0))
console.log(updatedEmployees.find((emp)=>emp.salary==30000))
console.log(updatedEmployees.findIndex((emp)=>emp.name=="Neha"))