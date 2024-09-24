function printSomething<T> (arg: T): T{
    console.log(arg);
    return arg;
}

printSomething<string>('Hello World');
printSomething<number>(10);
// To run this TypeScript file, you need to first compile it to JavaScript using the TypeScript compiler (tsc).
// Open your terminal and navigate to the directory containing the TypeScript file, then run:

// tsc generic-function.ts

// This will generate a JavaScript file named `generic-function.js` in the same directory.
// You can then run the generated JavaScript file using Node.js:

// node generic-function.js