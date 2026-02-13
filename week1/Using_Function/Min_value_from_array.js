///array(Ordered collection)
let mrks=[90,10,0]
//accessing array elements
console.log(mrks[10])
//itrate
//for-of loop
let s=0
for(let mrk of mrks){
    s+=mrk
}
console.log(s)
/// write a fun that recives mrks array as argument AND returns small element
function Min(a)
{
    let mn=a[0];
    for(let t of a)
    {
        if(mn>t)
        {
            mn=t
        }
    }
    return mn;
}
console.log(Min(mrks))
