// MODULE 2: COURSE CATALOG ENGINE
//   -> Get published courses
//   -> Sort courses by price (high → low)
//   -> Extract { title, price } only
//   -> Calculate total value of published courses
//   -> Add a new course immutably
//Get published courses
const courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];
//Get published courses
let publishedCourses=courses.filter(course=>course.published===true);
console.log("publishedCourses",publishedCourses)
//Sort courses by price (high → low)
let sort_courses=[...publishedCourses].sort((course1,course2)=>course2.price-course1.price);
console.log("sort_courses",sort_courses)
//Extract { title, price } only
let exacted=publishedCourses.map((course)=>({title:course.title,price:course.price}));
console.log("exacted",exacted)
//Calculate total value of published courses
let totalvalue=publishedCourses.reduce((acc,course)=>acc+course.price,0);
console.log("totalvalue",totalvalue)
//Add a new course immutably
let updated=[...publishedCourses,{id:104,title:"Express",price:2000,published:false}];
console.log("updated",updated)
// MODULE 3: SHOPPING CART ENGINE 
//   -> Merge cart with courses to get full course info
//   -> Calculate total cart amount
//   -> Increase quantity of a course (immutably)
//   -> Remove a course from cart
//   -> Check if all cart items are paid courses
//3)-------------------------------------------------
const cart = [
  { courseId: 101, qty: 1 },
  { courseId: 103, qty: 2 }
];
// Merge cart with courses to get full course info
let mergercart=cart.map((cart)=>{
  let course=courses.find(item=>item.id===cart.courseId);
  return {
    ...course,
    qty:cart.qty
  }
})
console.log("mergercart",mergercart)
// Calculate total cart amount
let totalcartamount=mergercart.reduce((acc,item)=>acc+item.price*item.qty,0)
console.log("totalcartamount",totalcartamount)
// Increase quantity of a course (immutably)
let index=mergercart.findIndex(item=>item.id===101)
if(index!==-1)
{
  mergercart[index].qty++
}
console.log("mergercart",mergercart)
// Remove a course from cart
let index1=mergercart.findIndex(item=>item.id===101)
if(index1!==-1)
{
  mergercart.splice(index1,1)
}
console.log("mergercart",mergercart)
// Check if all cart items are paid courses
let allPaid = cart.every(item => {
  let course = courses.find(c => c.id === item.courseId);
  return course && course.price > 0;
});
console.log(allPaid ? "All are Paid Courses" : "Some are Free");