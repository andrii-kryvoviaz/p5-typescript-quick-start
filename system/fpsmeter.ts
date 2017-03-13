class FPSmeter {
  container: p5.Element;

  constructor() {
    if(select('.fpsmeter') == null) {
      this.container = createDiv('0 FPS');
      this.container.addClass('fpsmeter');
    }
  }

  show(frames: number) {
    this.container.html(frames.toFixed(1) + ' FPS');
  }

  tick(frames?: number) {
    if(frames == null) {
      frames = frameRate();
    }
    if(frameCount % 16 == 0) {
      this.show(frames);
    }
  }
}
