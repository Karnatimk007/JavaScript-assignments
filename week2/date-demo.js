//store in time stamp
//formate is ISO
let d1=new Date()//current date
let d2=new Date(2026,1,21)//specific date
let d3=new Date('2026-01-21')//specific date
let d4=new Date('2026-01-21T12:30:00')//specific date and time
let d5=new Date(Date.now())//current date
console.log(d1)
console.log(d2)
console.log(d3.toString())
console.log(d4.toString())
console.log(d5.toString())
console.log(Date.now())//milliseconds since epoch
//UTC date
let d6=new Date(Date.UTC(2026,1,21))
console.log(d6.toString())
//day
//month is 0-11
//date is 1-31
//year is 4 digit
//time is 24 hour format
//getFullYear()-get full year
//getMonth()-get month
//getDate()-get date
//getDay()-get day
//getHours()-get hours
//getMinutes()-get minutes
//getSeconds()-get seconds
//getMilliseconds()-get milliseconds
//getTime()-get time
console.log(d1.getFullYear())
console.log(d1.getMonth())
console.log(d1.getDate())
console.log(d1.getDay())
console.log(d1.getHours())
console.log(d1.getMinutes())
console.log(d1.getSeconds())
console.log(d1.getMilliseconds())
console.log(d1.getTime())
//--------------
//setFullYear(year,month,date)
//setMonth(month,date)
//setDate(date)
//setHours(hours,minutes,seconds,milliseconds)
//setMinutes(minutes,seconds,milliseconds)
//setSeconds(seconds,milliseconds)
//setMilliseconds(milliseconds)
//setTime(milliseconds)
//setUTCFullYear()
//setUTCMonth()
//setUTCDate()
//setUTCHours()
//setUTCMinutes()
//setUTCSeconds()
//setUTCMilliseconds()
//setUTCTime()
//setUTCTimezoneOffset()
//setUTCDay()
//setUTCHours()
//setUTCMinutes()
//setUTCSeconds()
//setUTCMilliseconds()
//setUTCTime()
//setUTCTimezoneOffset()
