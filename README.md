# P5 TypeScript Quick Start

TypeScript is a free and open-source programming language developed and maintained by Microsoft. It is a strict superset of JavaScript, and adds optional static typing and class-based object-oriented programming to the language.

Example of a class:
```
class Particle {
  x: number;
  y: number;

  constructor(x?: number, y?: number) {
    this.x = x || 0;
    this.y = y || 0;
  }

  foo([arguments]) {
    // function body
  }
}
```
Also, note that any JavaScript code will work with TypeScript as well ;)

## Installation
run `npm install` and that's it; you are ready to go(requires nodejs installed)

## Usage
`tsc -w` - to watch and compile your ts into js(or you are free to use anything you want,
e.g Atom with `atom-typescript` extension compiles files when they are being saved)

You can create an application under app directory. It contains `main.ts`, which already has setup and draw functions.
Also, do not forget to reference new added files in index.html ;)

**NOTE** that js and map files are excluded by .gitignore to keep the repository clean.
Anyway, you can compile them easily from ts files.
