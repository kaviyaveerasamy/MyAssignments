//char occurences in the given string
let myName = "kaviya"
let char = 'a'
let count = 0
for(let i = 0;i<myName.length;i++)
{
    if(myName[i]===char)
    {
        count++
    }
}
console.log("char 'a' occured " +count+" times in the input")
//reversal of string
let input = "kaviya"
let rev =""
for(let i=input.length;i>=0;i--)
{rev=rev+input.charAt(i)}console.log(rev)
