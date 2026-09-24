---
title: 插件特性
lead: 由插件提供的玩法与功能。维度玩法（天境、暮色森林、后室）尚在开发阶段，可在测试服体验。
actions:
  - label: 返回玩法介绍
    href: /mcserver/gameplay
order: 4
blurb: 插件提供的玩法与功能：登录验证、跨版本加入、伪装、领地、新配方等。
configGroups:
  - title: 账号与登录
    entries:
      - key: 'AuthMe · FastLogin · UUIDRedirect'
        body: '半正版验证：正版玩家自动登录；离线玩家（离线登录 / LittleSkin）首次进服设置密码，之后每次进服验证密码；转为同名正版账户后可用 <code>/premium</code> 切换为正版进服。'
  - title: 跨版本与基岩版加入
    entries:
      - key: 'ViaVersion · ViaBackwards · ViaRewind · Geyser · Floodgate'
        body: 'Java 版 <code>1.7.10 ~ 26.3</code>、基岩版 <code>26.30 ~ 26.51</code> 均可加入服务器；基岩版玩家由 <a href="https://geysermc.org" target="_blank" rel="noopener noreferrer">Geyser</a> 适配，皮肤由 GeyserSkinManager 处理。'
  - title: 伪装
    entries:
      - key: FeatherMorph
        origin: 本地分支
        body: '第一次杀死某种生物或某个玩家后即获得其伪装，可随时切换；部分生物具有特殊属性或技能，如凋灵能够飞行，方便对机器或建筑进行施工。'
  - title: 领地
    entries:
      - key: Dominion
        body: '使用物品“箭”标记两个角点，输入 <code>/dom create 领地名称</code> 即可创建六面体领地；可管理成员与访客权限、领地的环境行为，保护自己的建筑与机器。<span class="warn">请勿在非自己的建筑或机器处创建领地！</span>'
  - title: 高级附魔书
    entries:
      - key: 'EnchantBookPlus · AnvilUnlocker'
        body: '允许略高于原版等级上限的附魔书，可在铁砧中合成；同时解除了铁砧经验上限（配合服务端的 avoid-anvil-too-expensive 规则）。'
  - title: 新配方
    entries:
      - key: 'RecipeCreateX · HastePotion · BarrierRecipePlugin · GApples'
        body: '新增强化深板岩、紫水晶母岩、可堆叠图腾、屏障方块的合成配方，以及急迫药水（含喷溅 / 滞留类型与增强 / 延长变种）的酿造台配方。'
  - title: 其他在服插件
    entries:
      - key: OffwhiteMessage
        origin: 私有插件
        body: '设置玩家不在白名单时的踢出提示。'
      - key: PublicContainers
        origin: 私有插件
        body: '公用容器：玩家打开命名的末影箱可打开对应名称的公用容器，相同名称的末影箱指向同一个容器。'
      - key: SimpleTPA
        body: '允许玩家运行 <code>/tpa &lt;playerName&gt;</code> 并在对方同意后传送至对方。'
      - key: SpectatorEnabler
        origin: 私有插件
        body: '对授权的用户启用 <code>/se 1|0</code>，以切换至旁观模式 / 生存模式。'
      - key: TradeCycle
        body: '在未交易过的村民的交易界面的空槽位按 F 可刷新村民交易。'
      - key: LeadAnyMob
        body: '玩家可用拴绳拴住任何生物。'
      - key: LargeBarrelPlugin
        origin: 私有插件
        body: '背对背的木桶合并为大木桶，复刻 <a href="https://github.com/plusls/Carpet-TIS-Addition" target="_blank" rel="noopener noreferrer">Carpet TIS Addition</a> 的功能，并且适配 <a href="https://github.com/Snownee/Jade" target="_blank" rel="noopener noreferrer">Jade</a> 协议以显示整个大木桶的内容。'
      - key: NoteBlockChunkLoader
        origin: 私有插件
        body: '音符盒骨块加载器，复刻 <a href="https://github.com/Geng-Ze/Carpet-AMS-Addition" target="_blank" rel="noopener noreferrer">Carpet AMS Addition</a> 的功能：在红石信号激活上方有骨块的音符盒时，为所在区块为中心的 3×3 区块添加等级为 31 的加载标签和计算标签，并且带有维度保活属性。本插件不是 <a href="https://github.com/MC-XiaoHei/NoteBlockChunkLoader" target="_blank" rel="noopener noreferrer">MC-XiaoHei 的 NoteBlockChunkLoader</a>，但提供的功能相似。'
      - key: LootingTNT
        origin: 私有插件
        body: '非玩家激活的 TNT 带有抢夺标签。'
      - key: MineBedrock
        body: '左键下界基岩平台上的基岩可转化为强化深板岩，右键转化回基岩。'
      - key: TropicalFishSpawnController
        body: '使热带鱼的生成平均化，使所有种类的热带鱼都能够生成。'
      - key: DragonDeathSuppression
        origin: 私有插件
        body: '简化末影龙死亡抑制。'
      - key: LodServerSupport
        origin: 本地分支
        body: '为客户端 <a href="https://github.com/Sollace/Voxy" target="_blank" rel="noopener noreferrer">Voxy</a> 提供 LOD 区块内容通信功能，需客户端安装 LOD Server Support 模组。'
    notes:
      - '此外，UUIDRedirect、HastePotion、BarrierRecipePlugin 也为私有插件；其余还有 LightSuicide、OpenInv、PaperExplosionResist 等插件。'
      - '管理与依赖类：LuckPerms、WorldEdit、spark、TAB、ProtocolLib、CommandAPI、PlaceholderAPI、packetevents、bStats 等。'
---

## 标注说明

**私有插件** 指由服主开发的适用于本服务器的插件，并且不进行分发；**本地分支** 指为本服务器制作的插件分支版本。
