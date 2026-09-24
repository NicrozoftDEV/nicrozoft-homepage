---
title: 假人系统
lead: Leaves 内置假人（bot）系统，用于生电机器挂机、区块加载等，另有本地分支的 Carpet 风格 /player 命令与多项增强。
order: 2
blurb: Leaves 内置假人（/bot）系统、Carpet 风格 /player 命令与本地分支增强。
---

## 系统开关与行为

### `modify.fakeplayer.enable`

**上限 200**

假人系统总开关，注册 `/bot` 命令；服务器假人上限为 200 个，服主相关用户名不可用于假人。

### `modify.fakeplayer.use-action`

支持 `/bot action` 动作系统：attack、break、drop、fish、jump、look、mount、move、rotation、sneak、swap、swim、use、use\_auto、use\_offhand、use\_on、use\_on\_offhand、use\_to、use\_to\_offhand 等 20 种动作。

### `modify.fakeplayer.manual-save-and-load`

支持 `/bot save` / `/bot load`：移除假人时保留其数据，之后可重新生成。

### `modify.fakeplayer.open-fakeplayer-inventory`

可以右键假人打开其物品栏。

### `modify.fakeplayer.modify-config`

支持 `/bot config` 按假人单独调整配置（跳过睡觉、幻翼生成、模拟距离、tick 类型等）。

### `modify.fakeplayer.in-game`

**多项调优**

假人始终发送实体数据、不参与睡觉判定、不会生成幻翼；模拟距离固定为 16 区块，tick 类型为 ENTITY\_LIST。

## 本地分支增强

### `modify.fakeplayer.enable-carpet-command`

**本地分支**

注册 <a href="https://github.com/gnembon/fabric-carpet" target="_blank" rel="noopener noreferrer">Carpet</a> 风格的 `/player` 命令：`/player <名字> spawn | kill | stop | attack | use | jump | drop | dropAll | dropStack | swap | sneak | unsneak | mount | dismount | move | look | turn | hotbar`，并镜像 `tp / tphere / save / load / inventory` 子命令。

### `modify.fakeplayer.enable-teleportation`

**本地分支**

`/bot tp <假人>` 将你传送到假人处，`/bot tphere <假人>` 将假人传送到你处（支持跨维度）。

### `modify.fakeplayer.in-game.remote-open-fakeplayer-inventory`

**本地分支**

`/bot inventory <假人>` 远程打开假人完整物品栏（护甲、副手、主手、存储与快捷栏）；界面第二行为快捷栏选择器，点击即可切换假人选中的槽位。

### `modify.fakeplayer.in-game.restock-from-shulkers`

**本地分支**

假人可从自己背包中的潜影盒为主手物品补货（物品与组件完全一致时自动补满，盒子留在背包中原位更新）；补货触发条件已扩展至所有堆叠上限（16 上限的雪球、蛋、末影珍珠等同样生效）。

### `modify.fakeplayer.in-game.exp-no-orb`

**本地分支**

假人击杀生物时经验直接授予假人，不再生成经验球，以减少不必要的卡顿（经验修补装备仍会被正常修复）。

## 常用命令

- `/bot create <名字> [皮肤]` — 生成一个假人
- `/bot remove <假人>` — 移除假人
- `/bot list` — 列出假人及数量
- `/bot action <假人> start <动作> [参数]` — 让假人开始执行动作
- `/bot action <假人> stop <序号|all>` — 停止动作
- `/bot action <假人> list` — 查看动作队列
- `/bot config <假人> <键> [值]` — 查看 / 修改假人配置
- `/bot save · /bot load <名字>` — 保存 / 重新加载假人
- `/bot inventory <假人>` — 远程打开假人物品栏（本地分支）
- `/bot tp <假人> · /bot tphere <假人>` — 与假人互相传送（本地分支）
- `/player <名字> <动作> [参数]` — Carpet 风格命令（本地分支）

<span class="warn">请勿滥用！禁止频繁召唤假人用于 PVP，或大量召唤无用假人增加服务器负担。</span>
