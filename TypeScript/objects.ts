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
 
*/

function identity1<Type>(arg: Type): Type {
  return arg;
}

// With this, we've now added a TYPE VARIABLE.
// This type allows us to capture the type the user provides (eg. number) so that we can use that information later.
// We say that this type is "generic" as it works over a RANGE of types.

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

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};
