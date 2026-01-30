const { ccclass, property } = cc._decorator;
import { SuperTileType, Tile } from "../core/Tile";
import { TileColor } from "../core/TileColor";

/**
 * Визуальный компонент тайла
 */
@ccclass
export default class TileView extends cc.Component {
  @property(cc.Sprite)
  sprite: cc.Sprite = null;

  @property([cc.SpriteFrame])
  tileTextures: cc.SpriteFrame[] = [];

  @property([cc.SpriteFrame])
  superTileTextures: cc.SpriteFrame[] = [];

  private tile: Tile = null;

  setTile(tile: Tile): void {
    this.tile = tile;
    this.updateVisual();
  }

  getTile(): Tile {
    return this.tile;
  }

  private updateVisual(): void {
    if (!this.tile || !this.sprite) return;

    if (this.tile.isSuper()) {
      this.setSuperTileVisual();
      return;
    }

    const colorIndexMap = {
      [TileColor.RED]: 0,
      [TileColor.BLUE]: 1,
      [TileColor.GREEN]: 2,
      [TileColor.YELLOW]: 3,
      [TileColor.PURPLE]: 4,
    };

    const index = colorIndexMap[this.tile.color];

    if (this.tileTextures.length > 0 && this.tileTextures[index]) {
      this.sprite.spriteFrame = this.tileTextures[index];
      this.sprite.node.color = cc.Color.WHITE;
    } else {
      const colorMap = {
        [TileColor.RED]: cc.Color.RED,
        [TileColor.BLUE]: cc.Color.BLUE,
        [TileColor.GREEN]: cc.Color.GREEN,
        [TileColor.YELLOW]: cc.Color.YELLOW,
        [TileColor.PURPLE]: new cc.Color(150, 50, 200),
      };
      this.sprite.node.color = colorMap[this.tile.color] || cc.Color.WHITE;
    }
  }

  private setSuperTileVisual(): void {
    const superIndexMap = {
      [SuperTileType.ROW_BLAST]: 0,
      [SuperTileType.COLUMN_BLAST]: 1,
      [SuperTileType.BOMB]: 2,
      [SuperTileType.MEGA_BLAST]: 3,
    };

    const index = superIndexMap[this.tile.superType];

    if (this.superTileTextures.length > 0 && this.superTileTextures[index]) {
      this.sprite.spriteFrame = this.superTileTextures[index];
      this.sprite.node.color = cc.Color.WHITE;
    } else {
      this.updateVisual();
      this.sprite.node.color = cc.Color.WHITE;
      this.sprite.node.opacity = 255;
      this.addSuperTileEffect();
    }
  }

  private addSuperTileEffect(): void {
    cc.tween(this.node)
      .repeatForever(
        cc
          .tween()
          .to(0.5, { scale: 1.1 }, { easing: "sineInOut" })
          .to(0.5, { scale: 1.0 }, { easing: "sineInOut" }),
      )
      .start();
  }

  setPosition(x: number, y: number): void {
    this.node.setPosition(x, y);
  }

  playDestroyAnimation(callback: Function): void {
    cc.tween(this.node)
      .to(0.2, { scale: 0, opacity: 0 })
      .call(() => {
        this.node.destroy();
        if (callback) callback();
      })
      .start();
  }

  playFallAnimation(
    targetX: number,
    targetY: number,
    duration: number,
    callback?: Function,
  ): void {
    cc.tween(this.node)
      .to(
        duration,
        { position: cc.v3(targetX, targetY, 0) },
        { easing: "bounceOut" },
      )
      .call(() => {
        if (callback) callback();
      })
      .start();
  }
}
