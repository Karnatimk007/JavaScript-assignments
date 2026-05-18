
// Assignment 2: Date Comparison & Validation (Beginner → Intermediate)
// --------------------------------------------------------------------

//  Given:
      let enrollmentDeadline = new Date("2026-01-20");

// Tasks:
//   1.Check if:
//       * Today is before deadline → "Enrollment Open"
//       * Today is after deadline → "Enrollment Closed"

//   2. Validate user input date:
//       * Input: "2026-02-30"
//       * Detect whether the date is valid or invalid
//
//1)--------------------------------------
let dd=new Date()
if(dd<enrollmentDeadline)
{
    console.log("Enrollment Open")
}
else
{
    console.log("Enrollment Closed")
}
//2)--------------------------------------
function validateDate(input) {
  let [y, m, d] = input.split("-");
  y=Number(y)
  m=Number(m)
  d=Number(d)
  let date = new Date(y, m - 1, d);// months are 0 based so we are subtracting 1 from month
  if (
    date.getFullYear() === y &&
    date.getMonth() === m - 1 &&
    date.getDate() === d
  ) {
    return "Valid Date";
  }
  return "Invalid Date";
}
console.log(validateDate("2026-02-30"))




