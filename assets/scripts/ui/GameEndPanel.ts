const { ccclass, property } = cc._decorator;

export enum GameEndType {
  WIN = "win",
  LOSE = "lose",
}

@ccclass
export default class GameEndPanel extends cc.Component {
  @property(cc.Label)
  resultLabel: cc.Label = null;

  @property(cc.Button)
  restartButton: cc.Button = null;

  private onRestartCallback: () => void = null;

  onLoad(): void {
    this.node.opacity = 0;
    this.node.active = false;

    this.restartButton.node.on("click", this.onRestartClicked, this);
  }

  show(type: GameEndType, onRestart: () => void): void {
    this.onRestartCallback = onRestart;
    this.node.active = true;

    if (type === GameEndType.WIN) {
      this.resultLabel.string = "ТЫ ВЫИГРАЛ!\n🎉";
    } else {
      this.resultLabel.string = "ПРОИГРЫШ";
    }

    this.playShowAnimation();
  }

  hide(): void {
    this.node.active = false;
    this.node.opacity = 0;
  }

  private playShowAnimation(): void {
    this.resultLabel.node.scale = 0.5;
    this.resultLabel.node.opacity = 0;
    this.restartButton.node.scale = 0.8;
    this.restartButton.node.opacity = 0;
    this.node.opacity = 255;

    cc.tween(this.resultLabel.node)
      .to(0.4, { scale: 1.0, opacity: 255 }, { easing: "backOut" })
      .start();

    cc.tween(this.restartButton.node)
      .delay(0.2)
      .to(0.3, { scale: 1.0, opacity: 255 }, { easing: "backOut" })
      .start();
  }

  private onRestartClicked(): void {
    cc.tween(this.node)
      .to(0.2, { opacity: 0 })
      .call(() => {
        this.hide();
        if (this.onRestartCallback) {
          this.onRestartCallback();
        }
      })
      .start();
  }
}
