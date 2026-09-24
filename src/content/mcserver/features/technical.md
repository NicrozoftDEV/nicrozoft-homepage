---
title: 生电与技术规则
lead: 服务端当前启用的、与生电和技术玩法相关的规则。键名为 leaves.yml 中的配置路径，仅列出已启用的规则。
order: 1
blurb: 服务端开启的生电向规则：更新抑制、可再生资源、生物与战斗、交互便利等。
---

## 更新抑制与方块更新

抑制类规则均有对应的区域命令（仅 OP 可用），用于划定只在特定区域内生效的抑制区域。

### `modify.simple-light-suppression`

**本地分支 · 仅管理员或授权用户**

启用 `/leaves lightsup [add|list|clear]`：区域内的光照更新不再计划与执行，光照传播在区域边界被切断（等同于 <a href="https://github.com/plusls/Carpet-TIS-Addition" target="_blank" rel="noopener noreferrer">Carpet-TIS-Addition</a> “off” 语义），强制向客户端发送光照更新包使画面与实际保持一致。

### `modify.observer-suppression`

**本地分支 · 仅管理员或授权用户**

启用 `/leaves disableobserver [add|list|clear]`：区域内的侦测器不再触发。

### `modify.nether-portal-update-suppression`

**本地分支 · 仅管理员或授权用户**

启用 `/leaves portalusup [add|list|clear]`：区域内的下界传送门不因方块更新被破坏（点燃生成传送门不受影响）。

### `modify.no-block-update-command`

**本地扩展 · 仅管理员或授权用户**

上游全局开关 `/leaves blockupdate`；本地分支追加 `/leaves noupdate [add|list|clear]` 区域命令，区域内的一切方块更新都会被抑制。

### `modify.no-tnt-place-update`

放置 TNT 时不会因相邻红石信号而被立即点燃。

### `modify.fix-update-suppression-crash`

捕获并修复更新抑制引发的崩溃（如掉落沙更新抑制），不再导致服务器崩溃。

### `minecraft-old.block-updater.sound-update-suppression`

允许基于声音的 IAE 更新抑制。

### `minecraft-old.block-updater.cce-update-suppression`

允许基于 ClassCastException 的更新抑制（潜影盒比较器信号路径）。

### `minecraft-old.block-updater.redstone-ignore-upwards-update`

恢复 1.20.1 及以前的红石更新传播行为：红石元件忽略自下而上的邻居更新，便于旧式机器迁移。

### `minecraft-old.block-updater.instant-block-updater-reintroduced`

重新引入 1.19.4 之前的瞬时方块更新器（移植自 Carpet-TIS-Addition），方块更新即时传播。

### `minecraft-old.block-updater.old-block-remove-behaviour`

恢复 1.21.1 及以前的方块移除行为（容器被破坏时掉落内容物并更新比较器信号）。

### `minecraft-old.block-updater.easy-iae-chest`

**本地分支 · 仅管理员或授权用户**

启用 `/leaves easyiaechest [enable|disable]`：被授权玩家放置自定义名称为 “IAE” 的陷阱箱时，为其赋予校频幽匿感测体的方块实体数据。

### `minecraft-old.allow-inf-nan-motion-values`

允许实体运动分量出现 Inf / NaN 值，部分旧式技术机器依赖该行为。

## 可再生资源与复制

### `modify.renewable-dragon-egg`

**本地分支**

每次击杀末影龙都会生成龙蛋。

### `modify.renewable-sponges`

雷击守卫者可转化为远古守卫者，使海绵成为可再生资源。

### `modify.small-flower-duplicate`

**本地分支**

对小型花（15 种，凋零玫瑰和金蒲公英除外）使用骨粉可使其像高花一样复制自身，手动与发射器均有效。

### `minecraft-old.tripwire-and-hook-behavior.string-tripwire-hook-duplicate`

恢复线与绊线钩可以复制的旧版行为（绊线本体行为为 VANILLA\_21）。

### `minecraft-old.old-zombie-piglin-drop`

恢复旧版僵尸猪灵的经验掉落行为，激怒状态的僵尸猪灵被非玩家杀死也会掉落经验。

### `modify.shulker-box.stackable-shulker-boxes`

**64**

空潜影盒可堆叠至 64（含相同 NBT 的堆叠未启用，掉落的潜影盒不会互相合并，在容器中仍被漏斗、投掷器、比较器等视为不可堆叠）。

### `modify.portable-shulker-box`

**本地分支**

主手持潜影盒右键即可直接打开（包括空且未堆叠的盒子），GUI 期间锁定手持槽位，内容实时写回物品。

## 生物与战斗

### `modify.safe-creepers`

**本地分支**

苦力怕爆炸不破坏方块（实体伤害与击退保留）。

### `modify.stronger-tnt`

**本地分支 · 仅管理员或授权用户**

启用 `/leaves strongertnt [add|list|clear]`：区域内的 TNT 爆炸无视爆炸抗性，摧毁除基岩、铁砧与流体外的所有方块。

### `modify.wind-charge-no-block-modifications`

**本地分支**

所有风爆（风弹、旋风人风弹、重锤风爆）不再破坏或触发方块，仅保留鸣钟，以防止风弹爆炸使红石机器时序紊乱从而导致损坏。

### `modify.wind-charge-anti-blast-protection`

**本地分支**

玩家的风弹与重锤风爆的击退无视目标的爆炸保护（旋风人风弹不受影响）。

### `modify.disable-spider-climbing`

**蜘蛛 + 洞穴蜘蛛**

**本地分支**

蜘蛛与洞穴蜘蛛不再爬墙。

### `modify.weak-enderman`

**本地分支**

末影人只能拾取与朝向它的附着藤蔓相连的西瓜或南瓜，且完全不能放置方块。

### `modify.ender-pearl-cooldown`

**0（无冷却）**

**本地分支**

末影珍珠投掷无冷却，并同步清除客户端冷却显示。

### `modify.generic-riptide-trident`

**本地分支**

允许在干燥陆地上使用激流三叉戟；服务端会强制下发发射速度，原版客户端也能正常获得动量。

### `modify.snowball-and-egg-can-knockback-player`

雪球与鸡蛋可以击退玩家。

### `modify.disable-enchantments-conflict`

**本地分支**

解除附魔互斥：盔甲的四种保护、武器的伤害类附魔、重锤的致密和破甲、弓的无限和经验修补、弩的多重射击和穿透等可共存。

### `modify.attribute-limit-fix`

**本地分支**

规范并提升防御属性上限：护甲 50、护甲韧性 30；有效 EPF 超过 20 后每 10 点 +1， 24 后每 1 点 +0.01（上限 24.8），伤害减免最高 99.995%。

### `modify.tough-wither-rose`

**本地分支**

凋灵玫瑰可放置在任意实心方块上表面，且下方方块被破坏时不会掉落。

### `modify.trial-behavior`

**已调参**

**本地分支**

试炼密室调参：刷怪笼冷却 600 秒、掉落生成间隔 10 秒、不祥/普通钥匙概率 0.75 / 0.8、掉落数量 ×2、宝库掉落间隔 10 秒。

### `modify.better-enchanted-golden-apple`

**本地分支**

附魔金苹果恢复削弱前的“notch 苹果”效果（抗性提升 IV、生命恢复 V 30 秒、饱和 I 等），普通金苹果不变。

### `modify.disable-vault-blacklist`

试炼宝库不再对已开启过的玩家做限制，可反复开启。

## 交互与便利

### `modify.flippin-cactus`

**本地分支 · 仅管理员或授权用户**

主手持仙人掌右键可旋转有朝向方块（不产生方块更新）；副手持仙人掌时，主手放置的朝向反转。玩家需由管理员执行 `/leaves flippincactus` 获得授权。

### `modify.dragon-breath-debug-tool`

**本地分支 · 仅管理员或授权用户**

龙息调试工具（由管理员执行 `/leaves dbdebugtool` 授权）：主手持龙息静默、无视遮挡地打开容器；副手持龙息时主手方块无视实体碰撞放置；副手龙息 + 主手矿车可无铁轨放置矿车；主手龙息右键黑曜石将其替换为空气。

### `modify.spectator-portal-entrance`

**本地分支**

旁观者可以右键进入下界传送门。

### `modify.creative-no-clip`

创造模式飞行可穿墙（需要客户端安装 <a href="https://github.com/gnembon/fabric-carpet" target="_blank" rel="noopener noreferrer">Carpet</a>）。

### `modify.redstone-shears-wrench`

剪刀右键红石元件调整其形态（中继器延迟、比较器模式等）。

### `modify.stick-change-armorstand-arm-status`

手持木棍右键盔甲架可切换手臂姿势。

### `modify.shave-snow-layers`

可用锹逐层削去雪层。

### `modify.no-feather-falling-trample`

摔落缓冲附魔不再阻止耕地被践踏。

### `modify.avoid-anvil-too-expensive`

铁砧合成不再出现“过于昂贵”上限。

### `modify.bow-infinity-fix`

无限附魔弓不再需要背包中有箭。

### `minecraft-old.keep-leash-connect-when-use-firework`

使用烟花加速时保持拴绳连接（旧版行为）。

### `minecraft-old.tnt-wet-explosion-no-item-damage`

处于水中的 TNT 爆炸不再摧毁掉落物。

### `minecraft-old.allow-entity-portal-with-passenger`

携带乘客（如矿车、生物）的实体可以通过传送门。

### `modify.exp-orb-absorb-mode`

**INSTANT**

**本地扩展**

经验球即时吸收：接触即整球获取、无拾取冷却（Carpet `xpNoCooldown` 语义），假人同样受益。

### `modify.mc-technical-survival-mode`

技术生存模式预设：一并开启活塞复制、无头活塞、永久性破坏方块漏洞、不安全末地折跃门传送、跳过绊线钩放置校验，并放宽封包频率限制。

### `modify.force-void-trade`

强制虚空交易（村民与流浪商人均可），交易者远离村民时无需等待区块完全卸载即可进行虚空交易。与（`minecraft-old.void-trade` 一并启用）。

### `minecraft-old.villager-infinite-discounts`

恢复村民折扣可无限叠加的旧版行为。

### `modify.shared-villager-discounts`

村民的好感折扣在所有玩家之间共享。

### `modify.disable-packet-limit`

禁用服务端数据包频率限制。

### `misc.no-chat-sign`

不为聊天消息附加签名，1.19+ 的聊天举报系统不生效。
