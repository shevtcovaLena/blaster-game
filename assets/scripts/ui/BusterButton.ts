const { ccclass, property } = cc._decorator;

@ccclass
export default class BoosterButton extends cc.Component {
  @property(cc.Sprite)
  icon: cc.Sprite = null;

  @property(cc.Label)
  countLabel: cc.Label = null;

  private boosterType: string = "";

  init(type: string, iconSprite: cc.SpriteFrame, count: number): void {
    this.boosterType = type;
    this.updateCount(count);

    if (iconSprite) {
      this.icon.spriteFrame = iconSprite;
    }

    this.node.on(cc.Node.EventType.TOUCH_START, this.onClick, this);
  }

  private onClick(): void {
    this.node.emit("booster-clicked", this.boosterType);
  }

  updateCount(count: number): void {
    this.countLabel.string = count.toString();
    this.node.opacity = count > 0 ? 255 : 128;
  }

  getType(): string {
    return this.boosterType;
  }
}
