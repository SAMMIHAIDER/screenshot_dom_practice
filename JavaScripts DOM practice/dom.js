// 1- How we can access HTML elements using DOM in javascript?

//five method to access Element in a document.

//1> Method One :- getelementbyid()....

// let heading = document.getElementById("heading");
// console.log(heading);

// 2> Method Two :- document.getElementbyClassName()....
 
//  let heading = document.getElementsByClassName("heading2");
//  console.log(heading);

// 3> Method Three :- document.getElementbytagName()....

// let heading = document.getElementsByTagName("h2");
// console.log(heading);

// 4> Method Four :- document.querySelector("")...

// many same classes, id,type, attrbute, its return only first class or id etc

// let querySelector = document.querySelector("p.intro");
// console.log(querySelector);


// 4> Method Five :- document.querySelectorAll("")...

// let querySelector = document.querySelectorAll("p.intro");
// console.log(querySelector);



//2- What are the activities that we can perform using DOM?

// we can perform many activities using dom 

//1> find Elementon

// you can find Elementon in XHtml and Html by using Dom such as :
// 1> you can find Elementon with id ,class ,tag ,etc

//1> Method One :- getelementbyid()....

// let heading = document.getElementById("heading");
// console.log(heading);

// 2> Method Two :- document.getElementbyClassName()....
 
//  let heading = document.getElementsByClassName("heading2");
//  console.log(heading);

// 3> Method Three :- document.getElementbytagName()....

// let heading = document.getElementsByTagName("h2");
// console.log(heading);

// 2> Changing Element
// we can change Xhtml and Html Element using dom such as: 
// you can change style ,content attribute ,tag etc

// 3> Event handling :-
// you can use Event such like a "hover, click,mousehover " etc by using Dom 

// 4> CSS interaction
// you can perform every CSS StyleSheet or styling with the help of DOM
// such like a  "margin,pading ,space, color,height,width" every thing

// 5> From handling
// you can handling form ,modify ,read , changing styling of form with the help of dom



// 3- What are the event-listners in DOM?
    // using this Event such like a "click , mouseenter,hover," etc 
    // using this event you can make you web page "attractive"by uing dom
    // you can performe many action using this event 
    // you can saw your code "on one click " 
    // its play very important roll in dom in javascripts

   let vent = document.getElementById("click");
      vent.addEventListener("click",function () {
        alert(" click event-listners in DOM")
      });
