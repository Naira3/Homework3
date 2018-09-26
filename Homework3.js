//-A function that takes at least three arguments and returns the result of some set of operations using those arguments 
price= function(material, labour, technology) 
{
    return material+labour+technology+ (material+labour+technology)*0.8;
}
const a = price (25, 70,100);
  
console.log(a);

// -A function that takes no arguments and returns something
event=funtion() 
{
    const a = "please fill the survey";
    return a;
}

//A function that takes arguments, does something but does not return anything
character= function(values, principles)
{
   if(values.lenght!==principles.lenght)
   {
       values="We all should be responsible";
       principles="All people are equal";
   }
   else
   {
       console.log("Character is very important in career.");
   }
}
const b=character("family", "friend");
 

//-A function that takes three strings and returns the string that is the longest.

longest= function(word1, word2, word3)
{
    if(word1.length>=word2.length && word1.length>=word3.length)
    {
        let a= word1.length;
    }
    else if (word1.length<=word2.length && word2.length>=word3.length)
    {
        a= word2.length;
    }
    else
    {
        a= word3.length;    
    }
    return a;
}
 (longest ("phone", "telephone", "iphone"));

//A function that takes two numbers and returns 0 if they are equal, 1 if the first is larger and -1 if the second is larger 
compare= function(a, b)
{
    if(a===b){
        let a=0;
    }
    else if(a>=b){
        a=1;
    }
    else{ a=-1; }
    return a;
}
compare(10,11);

//Create a multiply function (that multiplies the two given arguments together and returns the result) -
multiply= function(n,m)
{
    return m*n;
}

//-Create a divide function (that divides the first argument by the second and returns the result)
divide= function(k,l)
{
    return k/l;
}


//Create a triangleArea function that takes base and height as input and returns the area of a triangle without using * or / (HINT: Use the multiply and divide functions you already wrote) 
triangleArea=function(base, height)
{
    return divide(multiply(base, height),2);
    
}
console.log (triangleArea(4,5));

//Create a function called numLength that takes a number and returns the number of characters in the number (example: numLength(8940); should return 4).  Hint: strings have .length, numbers don't - so make a string and then get the length
numLength= function(n)
{
    return n.length;
}
numLength("");

// -Create a function that takes two strings and a number.  If the length of the two strings concatenated together is greater than the given number, return 1, else return -1. 
eh= function (str1, str2, num)
{
    if (str1.length+" "+str2.length>=num)
    {
        return 1;
    }
    else {
        return -1;
    }
 
}
const c=eh("sasasasa", "sa", 6);

console.log(c);

//Create a function runStuff that takes two numbers and a string.  If the string is 'rectangle', return the area of a rectangle using the two numbers as base and height.  If the string is 'triangle', return the area of a triangle (you can use the triangleArea function here).  If the string does not match 'rectangle' or 'triangle', return -1
runStuff= function (name, base, height)
{
    if(name==="rectangle") {
return base*height;
    }
    else if(name==="triangle")
    {
        return base*heigth/2;
    }
}
 runStuff ("triangle", 4, 6);
 



    
