/*diff of the date */
let d1=new Date(2022,0,1)
let d2=new Date(2024,0,1)
if(d1>d2)
{
    [d1,d2]=[d2,d1];   //swapping 
}
let year=d2.getFullYear()-d1.getFullYear()
let month=d2.getMonth()-d1.getMonth()
let date=d2.getDate()-d1.getDate()
if(month<0){
    month+=12
    year-=1
}
if(date<0){
    date+=new Date(year,month,0).getDate();
    month-=1
}
console.log(year,month,date)