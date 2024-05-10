// ! CLASSES
class UserAccount {
  // Define the class ABOVE the constructor function using interface/type syntax
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

// ! INTERFACE
interface User {
  name: string;
  id: number;
}

// ! TYPE DEFINITION/COMPOSITION
// type definition:
type strArr = string[];
type numArr = number[];

// UNION type
type myBool = true | false;

// GENERICS
// Generics provide VARIABLES to types

// Without generics, we would either have to give the identity function a specific type:
function identity2(arg: number): number {
  return arg;
}

// Or, we could describe the identity function using the any type:
function identity3(arg: any): any {
  return arg;
}

/*
 
While using any is certainly generic in that it will cause the function to accept any and all types for the type of arg, we actually are losing the information about what that type was when the function returns. If we passed in a number, the only information we have is that any type could be returned.

Instead, we need a way of capturing the type of the argument in such a way that we can also use it to denote what is being returned. Here, we will use a type variable, a special kind of variable that works on types rather than values.
 
Keep the function "generic" without resorting to any

When you don't know the type

*/

function identity1<Type1, Type2, Type3>(
  arg: Type1,
  arg2: Type2,
  arg3: Type3
): Type1 {
  return arg;
}

/*
 
what is as in TypeScript?
- TypeScript disallows < > angle bracket type assertions in .tsx files like sO:


const foo = <foo>bar;

because of this we should use "as" instead:

const foo = bar as foo;
 
*/
type foo = string;
let bar = "";
const foo = bar as foo;

/*
 
as const:

- Allow us to assert if an object CANNOT be modified.


! Technically we can adjust a property value
const config = {
  host: "",
  port: 5432,
};
config.host = "whatever";

const config = {
  host: "",
  port: 5432,
} as const;
config.host = "whatever";

Object.freeze() only works at the first level
*/
const config = {
  host: "",
  port: 5432,
} as const;
config.host = "whatever";

/*
 
Private class? If you're building an API you can define a particular property or method as being private.

Private means as it sounds, its private and not accessible to modifications. It's not only immutable, its inaccessible!

However this is JUST during development. The private keyword does nothing beside prevent compilation by throwing an error.

You can use the ES2022 # symbol in the TypeScript type definition as WELL as in the constructor function

*/
class Service {
  #config: string;
  constructor() {
    this.#config = "test";
  }
}
/*
 
What is super() ???

super: is used to call functions on an object's parent class.

super is CRUCIAL in the behaviour of derived/subclasses allowing them to call their parent class's constructor AND methods.
 
*/

class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  speak(): string {
    return `${this.name} makes a noise`;
  }
}

// Define a derived class
class Dog extends Animal {
  breed: string;
  constructor(name: string, breed: string) {
    super(name); // Call the parent class's constructor with 'name'
    this.breed = breed;
  }

  speak(): string {
    // Call the parent class's speak method and add additional behavior
    return `${super.speak()} which is a bark!`;
  }
}

const myDog = new Dog("Rex", "Golden Retriever");
console.log(myDog.speak()); // Outputs: Rex makes a noise which is a bark!
console.log(myDog.name); // Outputs: Rex
console.log(myDog.breed); // Outputs: Golden Retriever
// With this, we've now added a TYPE VARIABLE.
// This type allows us to capture the type the user provides (eg. number) so that we can use that information later.
// We say that this type is "generic" as it works over a RANGE of types.

/*
 
! DECORATOR 


*/
function Injectible() {}

class Service2 {
  private config: string;
  constructor() {
    this.config = "test";
  }
}

//
/*
 
Type vs Interface

same except for:

1) Interfaces are JUST for Objects
2) Types can be used for any data type
3) Interfaces are EXTENDABLE
4) Interfaces support declaration MERGING
5) types are for unions, intersections or tuples

Types have to be unique
 
*/

/*
 
Type Guard?

guarding against another data type as an option

filtering/narrowing within a function
 
*/

/*
 
Structural Typing vs Nominal Typing

- TypeScript implements Structural Typing
- Java/C# implements Nominal Typing

Structural Typing is more flexible
 
*/

//

type StringArray = Array<string>;

interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

// if we intend our GENERIC to work on arrays of Type, we'd need to specify that in the parameter definition.
function loggingIdentity<Type>(arg: Type[]): Type[] {
  console.log(arg.length);
  return arg;
}

// ! Generic Classes
// class GenericNumber<NumType> {
//   zeroValue: NumType;
//   add: (x: NumType, y: NumType) => NumType;

// }
