///control statements////
let price=1299
let courseTag=""
if(price<500)
{
    courseTag="Budget Course"
}
else if(price>500 && price<1000)
{
    courseTag="Standard Course"
}
else{
    courseTag="Premium Course"
}
console.log(courseTag)
