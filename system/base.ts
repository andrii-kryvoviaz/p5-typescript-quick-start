import p5 = require('p5');


export class Base {
  p5: p5;
  __proto__: any;
  preload:any;
  setup:any;
  draw:any;

  constructor() {
    var self = this;

    self.p5 = new p5(function(p) {

      self.__proto__ = p;

      self.preload = function() {

      };
      self.setup = function() {

      };
      self.draw = function() {

      };

      p.preload = function() {
        console.log('preload');
        self.preload();
      }

      p.setup = function() {
        console.log('setup');
        self.setup();
      }

      p.draw = function() {
        console.log('draw');
        self.draw();
      }
    });

  }

}
