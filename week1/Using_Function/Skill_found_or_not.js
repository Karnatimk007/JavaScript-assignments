/*write a function that receives "skills" array and "skillName" as argumentss and return 
thee index if skillname
existed, otherwise "skill not found" */
function Findskill(a,name)
{
    for(let i=0;i<a.length;i++)
    {
        if(a[i]===name)
        {
            return i; 
        }
    }
    return "skill not found"

}
let skills=['html','js','angular']
console.log(Findskill(skills,'html'))
console.log(Findskill(skills,'css'))