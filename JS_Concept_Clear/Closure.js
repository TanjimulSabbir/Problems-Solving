// What is closure?

// To know about closure in details, first of all we have to know about scope properly. If we don't know about javascript variable, function, object etc scope, we can't understand clousure fairly. okay, Let's start.

// There are two types of scope. One is global scope and another is local scope ( functional scope, block scope). I will see some example of scopes.

// const name="javascript"

// function(){
// console.log(`${name} is a functional programming language`)
// }.

// In this code, we see we can access 'name' variable from anywhere. But we can't change it, if we used it 'let' data type when we can change this variable value. That's it, to understand we don't need to know more about above discussion.

// Now, we will know about local scope. What is local scope? Local scope means it's can be accessible just few limited space. In function, which variable are we used this are local scope variable. The the object also treated as local variable. The local variable we can't use out of this area. 

// Here's an example, how does a local variable work-

// const clousre =()=>{
// const name="Javascript"
// var framwork="ReactJS"
// return console.log(`${framwork} is a framwork of ${name}`)
// }

// In this example, the 'name' and 'framwork' variable, we can use outside of the 'clousre' function. This is a local scope. In local scope we can access global variable. if we want to console log 'name' variable out of this function, it will show error. because, we can't use local variable outside of local scope. This is called local variable.

// I think, we have got a clear concept about scope. Now, we will discuss about closure. Closure is nothing more about scope. Closure discussed basically a problem of local scope. By closure we can be able to use a local variable outside of local scope. This is the essence of closure. Let's make it clear with the help of an example. Let's clarify with the assistance of an example.

// function whatIsLove(){
// const name="Jessica"
// var age =25
// return function(){
// console.log(`I love a girl whose name is ${name} and who is ${age} years old`
// }
// }
// In this fucntion, there a two variable and we return an anonymous function. The variable are we declare in this function are local variable. we can't use these 'name' and 'age' variable outside of 'whatIsLove" function. we can use these variable only inside this function. In this function, there is a problem. Did you notice that?
// Okay, no problem. I will show you the problem and solve the problem too. Now, we will discuss the the most vital part of closure. If you don't understand above anything, no problem. If you pay attention to this last discussion, I hope you will be able to uncover the real secret of closure. Let's start.

// 'whatIsLove' function will return and this funtion's console log used two variable 'name' and 'age'. we know, when a function return something and then automatically will be vanished. Now, see the above funtion. when we decleare this function, i will retrun an anonymous fucntion. Let's declear the function.

// const returnedFunction=whatIsLove();
// returnedFunction()
//  //result
//   I love a girl whose name is Jessica and who is 25 years old.

// after declear this function It consoled a text. we see, returned function used two variable inside it's for console log. We know when a function return, it will be destroyed by itself. In 'whatIsLove' function when it returned an anonymous function, It's variable will be destroyed. BUt we see that the returned function used those function two variable. How does it possible? When we returned something that automatically will be out of this function. The anonymous function returned, but how does it accessed the 'name' and 'age' varible? Did you get it? This is the secret of closure. Now, I will tell you this secret. Listen me.

// When we returned the anonymous function, at this time, it noticed is there any variable or object or anything used in returned. If used anything inside returned, then this function will store this variable/object/array or any kind of data on this function's closure memory. We function returned, then javascript will saved automatically on closure keywork on memory. That's it.

// When we want to access this variable/object/array on later, javascript will provide this closure. That's why we can use these variable/object/array or anything outside of this function. This is the secret, I reveled to you. This is called closure.


