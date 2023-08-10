// Terminology
// TypeScript infers type to be string
let myName = "Rezzy";

let meaningOfLife: number;
let isLoading: boolean;

// TypeScript union type
let album: any;

myName = "Rezzy";
meaningOfLife = 42;
isLoading = true;
album = 5150;

const sum = (a: number, b: number) => {
  return a + b;
};

let postId: string | number;
let isActive: number | boolean;

// regular expression type
let re: RegExp = /\w+/g;
