//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
      //We can say that it acts like a pronoun, representing the invoking object in a function. It is much more versatile than the other option, which is to explicitly state the name of the object in the function. This can lead to ambiguities, for instance when variables exist in multiple scopes.

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
      /*1)If a function is called in the global scope, this will refer to the window object.
      2) Whenever a function is called by a preceding dot, the object before that dot is this.
      3) Whenever a constructor function is used (that is, a function with a capitalized name that can be invoked with the New keyword), this refers to the **specific instance** of the object created by the function.
      4) This is explicitly defined whenever call or apply methods are used. */

  // 3) What is the difference between call and apply?

      //Answer
      //Both invoke a function while reassining the this keyword. The first argument for both is the object to which this should be assigned. The difference is that call takes each further argument as a separate argument, while apply takes remaining arguments together in the form of an array.

  // 4) What does .bind do?

      //Answer
      //Like "call" and "apply", bind assigns *this* to a specific object. It is unique in that further arguments passed to it will precede native arguments. In this way we are able to borrow arguments from other functions.


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
    var user = {
      username: "steven",
      email: "steven@great.com",
      getUsername: function(){return this.username;}
    };

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
user.getUsername();

//Next Problem


// Write the function definitions which will make the following function invocations function properly.

  //Function Invocations Here

  function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.move = "0";
    this.moveCar = function(){
      if (typeof this.move === "string"){
        this.move = parseInt(this.move);
      }
      this.move += 10;
      return this.move;
    };
  }

  // var Car.moveCar = function(){
  //   if (typeof this.move === "string"){
  //     this.move = parseInt(this.move);
  //   }
  //
  //   this.move += 10;
  //   return this.move;
  // }

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to add a move property and write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.



//Note(no tests)
  //Code Here
  var priusYear = getYear.call(prius);
  var mustangYear = getYear.call(mustang);

//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername.call(myUser); //Fix this

//Above you're given an object, and  a function. What will the getUsername function return?
//Note(no tests)
  //Answer Here
  //Because this is bound to the window, due the function being defined in the global scope, it will return the global username property, if there is one. Because there is not in fact a username defined in the global scope, it will return "undefined".

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here
  //Because the getMyUsername is defined in the global scope, this is bound to the window.

//Fix the getMyUsername invocation so that userName will be equal to 'iliketurtles'.
