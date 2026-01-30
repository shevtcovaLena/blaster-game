import BoosterButton from "../ui/BusterButton";

const { ccclass, property } = cc._decorator;

@ccclass
export default class BoosterPanel extends cc.Component {
  @property(cc.Prefab)
  boosterButtonPrefab: cc.Prefab = null;

  @property(cc.Node)
  boosterContainer: cc.Node = null;

  @property(cc.SpriteFrame)
  bombIcon: cc.SpriteFrame = null;

  @property(cc.SpriteFrame)
  teleportIcon: cc.SpriteFrame = null;

  private boosterButtons: Map<string, BoosterButton> = new Map();

  onLoad(): void {
    this.createBoosters();
  }

  private createBoosters(): void {
    const boosters = [
      { type: "bomb", icon: this.bombIcon, count: 3 },
      { type: "teleport", icon: this.teleportIcon, count: 5 },
    ];

    const spacing = 320;
    const totalWidth = (boosters.length - 1) * spacing;
    const startX = -totalWidth / 2;

    boosters.forEach((data, index) => {
      const btnNode = cc.instantiate(this.boosterButtonPrefab);
      btnNode.parent = this.boosterContainer;
      btnNode.x = startX + index * spacing;
      btnNode.y = 0;

      const boosterBtn = btnNode.getComponent(BoosterButton);
      if (!boosterBtn) {
        return;
      }

      boosterBtn.init(data.type, data.icon, data.count);
      this.boosterButtons.set(data.type, boosterBtn);
      btnNode.on("booster-clicked", this.onBoosterClicked, this);
    });
  }

  private onBoosterClicked(type: string): void {
    const boosterBtn = this.boosterButtons.get(type);
    if (!boosterBtn) return;

    const currentCount = parseInt(boosterBtn.countLabel.string);
    if (currentCount <= 0) {
      return;
    }

    boosterBtn.updateCount(currentCount - 1);
  }
}
