import { FPSmeter } from '../system/fpsmeter'
import { Base } from '../system/base'


class Main extends Base {

  meter: FPSmeter;

  constructor() {
    super();
  }

  setup = function() {
    this.createCanvas(this.windowWidth, this.windowHeight);
    // this.meter = new FPSmeter();
  }
  draw = function() {
    this.background(51);
    // this.meter.tick();
  }
}
new Main();
