
export class FPSmeter {
  container: p5.Element;

  constructor() {

    if(this.select('.fpsmeter') == null) {
      this.container = this.createDiv('0 FPS');
      this.container.addClass('fpsmeter');
    }
  }

  show(frames: number) {
    this.container.html(frames.toFixed(1) + ' FPS');
  }

  tick(frames?: number) {
    if(frames == null) {
      frames = this.frameRate();
    }
    if(frameCount % 16 == 0) {
      this.show(frames);
    }
  }
}
