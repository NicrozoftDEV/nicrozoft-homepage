---
title: 生电与技术规则
lead: 服务端当前启用的、与生电和技术玩法相关的规则。键名为 leaves.yml 中的配置路径，仅列出已启用的规则。
order: 1
blurb: 服务端开启的生电向规则：更新抑制、可再生资源、生物与战斗、交互便利等。
configGroups:
  - title: 更新抑制与方块更新
    lead: 抑制类规则均有对应的区域命令（仅 OP 可用），用于划定只在特定区域内生效的抑制区域。
    entries:
      - key: modify.simple-light-suppression
        meta: ['仅管理员或授权用户']
        origin: 本地分支
        body: '启用 <code>/leaves lightsup [add|list|clear]</code>：区域内的光照更新不再计划与执行，光照传播在区域边界被切断（等同于 <a href="https://github.com/plusls/Carpet-TIS-Addition" target="_blank" rel="noopener noreferrer">Carpet-TIS-Addition</a> “off” 语义），强制向客户端发送光照更新包使画面与实际保持一致。'
      - key: modify.observer-suppression
        meta: ['仅管理员或授权用户']
        origin: 本地分支
        body: '启用 <code>/leaves disableobserver [add|list|clear]</code>：区域内的侦测器不再触发。'
      - key: modify.nether-portal-update-suppression
        meta: ['仅管理员或授权用户']
        origin: 本地分支
        body: '启用 <code>/leaves portalusup [add|list|clear]</code>：区域内的下界传送门不因方块更新被破坏（点燃生成传送门不受影响）。'
      - key: modify.no-block-update-command
        meta: ['仅管理员或授权用户']
        origin: 本地扩展
        body: '上游全局开关 <code>/leaves blockupdate</code>；本地分支追加 <code>/leaves noupdate [add|list|clear]</code> 区域命令，区域内的一切方块更新都会被抑制。'
      - key: modify.no-tnt-place-update
        body: '放置 TNT 时不会因相邻红石信号而被立即点燃。'
      - key: modify.fix-update-suppression-crash
        body: '捕获并修复更新抑制引发的崩溃（如掉落沙更新抑制），不再导致服务器崩溃。'
      - key: minecraft-old.block-updater.sound-update-suppression
        body: '允许基于声音的 IAE 更新抑制。'
      - key: minecraft-old.block-updater.cce-update-suppression
        body: '允许基于 ClassCastException 的更新抑制（潜影盒比较器信号路径）。'
      - key: minecraft-old.block-updater.redstone-ignore-upwards-update
        body: '恢复 1.20.1 及以前的红石更新传播行为：红石元件忽略自下而上的邻居更新，便于旧式机器迁移。'
      - key: minecraft-old.block-updater.instant-block-updater-reintroduced
        body: '重新引入 1.19.4 之前的瞬时方块更新器（移植自 Carpet-TIS-Addition），方块更新即时传播。'
      - key: minecraft-old.block-updater.old-block-remove-behaviour
        body: '恢复 1.21.1 及以前的方块移除行为（容器被破坏时掉落内容物并更新比较器信号）。'
      - key: minecraft-old.block-updater.easy-iae-chest
        meta: ['仅管理员或授权用户']
        origin: 本地分支
        body: '启用 <code>/leaves easyiaechest [enable|disable]</code>：被授权玩家放置自定义名称为 “IAE” 的陷阱箱时，为其赋予校频幽匿感测体的方块实体数据。'
      - key: minecraft-old.allow-inf-nan-motion-values
        body: '允许实体运动分量出现 Inf / NaN 值，部分旧式技术机器依赖该行为。'
  - title: 可再生资源与复制
    entries:
      - key: modify.renewable-dragon-egg
        origin: 本地分支
        body: '每次击杀末影龙都会生成龙蛋。'
      - key: modify.renewable-sponges
        body: '雷击守卫者可转化为远古守卫者，使海绵成为可再生资源。'
      - key: modify.small-flower-duplicate
        origin: 本地分支
        body: '对小型花（15 种，凋零玫瑰和金蒲公英除外）使用骨粉可使其像高花一样复制自身，手动与发射器均有效。'
      - key: minecraft-old.tripwire-and-hook-behavior.string-tripwire-hook-duplicate
        body: '恢复线与绊线钩可以复制的旧版行为（绊线本体行为为 VANILLA_21）。'
      - key: minecraft-old.old-zombie-piglin-drop
        body: '恢复旧版僵尸猪灵的经验掉落行为，激怒状态的僵尸猪灵被非玩家杀死也会掉落经验。'
      - key: modify.shulker-box.stackable-shulker-boxes
        meta: ['64']
        body: '空潜影盒可堆叠至 64（含相同 NBT 的堆叠未启用，掉落的潜影盒不会互相合并，在容器中仍被漏斗、投掷器、比较器等视为不可堆叠）。'
      - key: modify.portable-shulker-box
        origin: 本地分支
        body: '主手持潜影盒右键即可直接打开（包括空且未堆叠的盒子），GUI 期间锁定手持槽位，内容实时写回物品。'
  - title: 生物与战斗
    entries:
      - key: modify.safe-creepers
        origin: 本地分支
        body: '苦力怕爆炸不破坏方块（实体伤害与击退保留）。'
      - key: modify.stronger-tnt
        meta: ['仅管理员或授权用户']
        origin: 本地分支
        body: '启用 <code>/leaves strongertnt [add|list|clear]</code>：区域内的 TNT 爆炸无视爆炸抗性，摧毁除基岩、铁砧与流体外的所有方块。'
      - key: modify.wind-charge-no-block-modifications
        origin: 本地分支
        body: '所有风爆（风弹、旋风人风弹、重锤风爆）不再破坏或触发方块，仅保留鸣钟，以防止风弹爆炸使红石机器时序紊乱从而导致损坏。'
      - key: modify.wind-charge-anti-blast-protection
        origin: 本地分支
        body: '玩家的风弹与重锤风爆的击退无视目标的爆炸保护（旋风人风弹不受影响）。'
      - key: modify.disable-spider-climbing
        meta: ['蜘蛛 + 洞穴蜘蛛']
        origin: 本地分支
        body: '蜘蛛与洞穴蜘蛛不再爬墙。'
      - key: modify.weak-enderman
        origin: 本地分支
        body: '末影人只能拾取与朝向它的附着藤蔓相连的西瓜或南瓜，且完全不能放置方块。'
      - key: modify.ender-pearl-cooldown
        meta: ['0（无冷却）']
        origin: 本地分支
        body: '末影珍珠投掷无冷却，并同步清除客户端冷却显示。'
      - key: modify.generic-riptide-trident
        origin: 本地分支
        body: '允许在干燥陆地上使用激流三叉戟；服务端会强制下发发射速度，原版客户端也能正常获得动量。'
      - key: modify.snowball-and-egg-can-knockback-player
        body: '雪球与鸡蛋可以击退玩家。'
      - key: modify.disable-enchantments-conflict
        origin: 本地分支
        body: '解除附魔互斥：盔甲的四种保护、武器的伤害类附魔、重锤的致密和破甲、弓的无限和经验修补、弩的多重射击和穿透等可共存。'
      - key: modify.attribute-limit-fix
        origin: 本地分支
        body: '规范并提升防御属性上限：护甲 50、护甲韧性 30；有效 EPF 超过 20 后每 10 点 +1，24 后每 1 点 +0.01（上限 24.8），伤害减免最高 99.995%。'
      - key: modify.tough-wither-rose
        origin: 本地分支
        body: '凋灵玫瑰可放置在任意实心方块上表面，且下方方块被破坏时不会掉落。'
      - key: modify.trial-behavior
        meta: ['已调参']
        origin: 本地分支
        body: '试炼密室调参：刷怪笼冷却 600 秒、掉落生成间隔 10 秒、不祥/普通钥匙概率 0.75 / 0.8、掉落数量 ×2、宝库掉落间隔 10 秒。'
      - key: modify.better-enchanted-golden-apple
        origin: 本地分支
        body: '附魔金苹果恢复削弱前的“notch 苹果”效果（抗性提升 IV、生命恢复 V 30 秒、饱和 I 等），普通金苹果不变。'
      - key: modify.disable-vault-blacklist
        body: '试炼宝库不再对已开启过的玩家做限制，可反复开启。'
  - title: 交互与便利
    entries:
      - key: modify.flippin-cactus
        meta: ['仅管理员或授权用户']
        origin: 本地分支
        body: '主手持仙人掌右键可旋转有朝向方块（不产生方块更新）；副手持仙人掌时，主手放置的朝向反转。玩家需由管理员执行 <code>/leaves flippincactus</code> 获得授权。'
      - key: modify.dragon-breath-debug-tool
        meta: ['仅管理员或授权用户']
        origin: 本地分支
        body: '龙息调试工具（由管理员执行 <code>/leaves dbdebugtool</code> 授权）：主手持龙息静默、无视遮挡地打开容器；副手持龙息时主手方块无视实体碰撞放置；副手龙息 + 主手矿车可无铁轨放置矿车；主手龙息右键黑曜石将其替换为空气。'
      - key: modify.spectator-portal-entrance
        origin: 本地分支
        body: '旁观者可以右键进入下界传送门。'
      - key: modify.creative-no-clip
        body: '创造模式飞行可穿墙（需要客户端安装 <a href="https://github.com/gnembon/fabric-carpet" target="_blank" rel="noopener noreferrer">Carpet</a>）。'
      - key: modify.redstone-shears-wrench
        body: '剪刀右键红石元件调整其形态（中继器延迟、比较器模式等）。'
      - key: modify.stick-change-armorstand-arm-status
        body: '手持木棍右键盔甲架可切换手臂姿势。'
      - key: modify.shave-snow-layers
        body: '可用锹逐层削去雪层。'
      - key: modify.no-feather-falling-trample
        body: '摔落缓冲附魔不再阻止耕地被践踏。'
      - key: modify.avoid-anvil-too-expensive
        body: '铁砧合成不再出现“过于昂贵”上限。'
      - key: modify.bow-infinity-fix
        body: '无限附魔弓不再需要背包中有箭。'
      - key: minecraft-old.keep-leash-connect-when-use-firework
        body: '使用烟花加速时保持拴绳连接（旧版行为）。'
      - key: minecraft-old.tnt-wet-explosion-no-item-damage
        body: '处于水中的 TNT 爆炸不再摧毁掉落物。'
      - key: minecraft-old.allow-entity-portal-with-passenger
        body: '携带乘客（如矿车、生物）的实体可以通过传送门。'
      - key: modify.exp-orb-absorb-mode
        meta: ['INSTANT']
        origin: 本地扩展
        body: '经验球即时吸收：接触即整球获取、无拾取冷却（Carpet <code>xpNoCooldown</code> 语义），假人同样受益。'
      - key: modify.mc-technical-survival-mode
        body: '技术生存模式预设：一并开启活塞复制、无头活塞、永久性破坏方块漏洞、不安全末地折跃门传送、跳过绊线钩放置校验，并放宽封包频率限制。'
      - key: modify.force-void-trade
        body: '强制虚空交易（村民与流浪商人均可），交易者远离村民时无需等待区块完全卸载即可进行虚空交易（与 <code>minecraft-old.void-trade</code> 一并启用）。'
      - key: minecraft-old.villager-infinite-discounts
        body: '恢复村民折扣可无限叠加的旧版行为。'
      - key: modify.shared-villager-discounts
        body: '村民的好感折扣在所有玩家之间共享。'
      - key: modify.disable-packet-limit
        body: '禁用服务端数据包频率限制。'
      - key: misc.no-chat-sign
        body: '不为聊天消息附加签名，1.19+ 的聊天举报系统不生效。'
---
