---
title: 假人系统
lead: Leaves 内置假人（bot）系统，用于生电机器挂机、区块加载等，另有本地分支的 Carpet 风格 /player 命令与多项增强。
order: 2
blurb: Leaves 内置假人（/bot）系统、Carpet 风格 /player 命令与本地分支增强。
configGroups:
  - title: 系统开关与行为
    entries:
      - key: modify.fakeplayer.enable
        meta: ['上限 200']
        body: '假人系统总开关，注册 <code>/bot</code> 命令；服务器假人上限为 200 个，服主相关用户名不可用于假人。'
      - key: modify.fakeplayer.use-action
        body: '支持 <code>/bot action</code> 动作系统：attack、break、drop、fish、jump、look、mount、move、rotation、sneak、swap、swim、use、use_auto、use_offhand、use_on、use_on_offhand、use_to、use_to_offhand 等 20 种动作。'
      - key: modify.fakeplayer.manual-save-and-load
        body: '支持 <code>/bot save</code> / <code>/bot load</code>：移除假人时保留其数据，之后可重新生成。'
      - key: modify.fakeplayer.open-fakeplayer-inventory
        body: '可以右键假人打开其物品栏。'
      - key: modify.fakeplayer.modify-config
        body: '支持 <code>/bot config</code> 按假人单独调整配置（跳过睡觉、幻翼生成、模拟距离、tick 类型等）。'
      - key: modify.fakeplayer.in-game
        meta: ['多项调优']
        body: '假人始终发送实体数据、不参与睡觉判定、不会生成幻翼；模拟距离固定为 16 区块，tick 类型为 ENTITY_LIST。'
  - title: 本地分支增强
    entries:
      - key: modify.fakeplayer.enable-carpet-command
        origin: 本地分支
        body: '注册 <a href="https://github.com/gnembon/fabric-carpet" target="_blank" rel="noopener noreferrer">Carpet</a> 风格的 <code>/player</code> 命令：<code>/player &lt;名字&gt; spawn | kill | stop | attack | use | jump | drop | dropAll | dropStack | swap | sneak | unsneak | mount | dismount | move | look | turn | hotbar</code>，并镜像 <code>tp / tphere / save / load / inventory</code> 子命令。'
      - key: modify.fakeplayer.enable-teleportation
        origin: 本地分支
        body: '<code>/bot tp &lt;假人&gt;</code> 将你传送到假人处，<code>/bot tphere &lt;假人&gt;</code> 将假人传送到你处（支持跨维度）。'
      - key: modify.fakeplayer.in-game.remote-open-fakeplayer-inventory
        origin: 本地分支
        body: '<code>/bot inventory &lt;假人&gt;</code> 远程打开假人完整物品栏（护甲、副手、主手、存储与快捷栏）；界面第二行为快捷栏选择器，点击即可切换假人选中的槽位。'
      - key: modify.fakeplayer.in-game.restock-from-shulkers
        origin: 本地分支
        body: '假人可从自己背包中的潜影盒为主手物品补货（物品与组件完全一致时自动补满，盒子留在背包中原位更新）；补货触发条件已扩展至所有堆叠上限（16 上限的雪球、蛋、末影珍珠等同样生效）。'
      - key: modify.fakeplayer.in-game.exp-no-orb
        origin: 本地分支
        body: '假人击杀生物时经验直接授予假人，不再生成经验球，以减少不必要的卡顿（经验修补装备仍会被正常修复）。'
  - title: 常用命令
    entries:
      - key: '/bot create <名字> [皮肤]'
        body: '生成一个假人。'
      - key: '/bot remove <假人>'
        body: '移除假人。'
      - key: '/bot list'
        body: '列出假人及数量。'
      - key: '/bot action <假人> start <动作> [参数]'
        body: '让假人开始执行动作。'
      - key: '/bot action <假人> stop <序号|all>'
        body: '停止动作。'
      - key: '/bot action <假人> list'
        body: '查看动作队列。'
      - key: '/bot config <假人> <键> [值]'
        body: '查看 / 修改假人配置。'
      - key: '/bot save · /bot load <名字>'
        body: '保存 / 重新加载假人。'
      - key: '/bot inventory <假人>'
        origin: 本地分支
        body: '远程打开假人物品栏。'
      - key: '/bot tp <假人> · /bot tphere <假人>'
        origin: 本地分支
        body: '与假人互相传送。'
      - key: '/player <名字> <动作> [参数]'
        origin: 本地分支
        body: 'Carpet 风格命令。'
    notes:
      - '<span class="warn">请勿滥用！禁止频繁召唤假人用于 PVP，或大量召唤无用假人增加服务器负担。</span>'
---
