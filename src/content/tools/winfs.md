---
title: "适用于 Vista 的 WinFS Beta 1"
cover: "/img/winfs.jpg"
hero: "/img/winvistatolh.png"
status: "active"
order: 10
blurb: "适用于 Vista SP2 的 WinFS Beta 1"
downloads:
  - { label: "下载适用于 Vista 的 WinFS Beta 1", href: "https://pan.huang1111.cn/s/NZGQH1?path=%2FWinFS_for_Vista", kind: "archive" }
  - { label: "观看 WinBetaUser 对此程序的讲解视频视频（记得点赞投币收藏关注）", href: "https://www.bilibili.com/video/BV1he411B7Ju", kind: "link" }
---

Nicrozoft 破解了 WinFS Beta 1 并使其可以在 Windows Vista SP2 上使用。
理论上也可以在 Windows Vista RTM 及 SP1, Windows XP SP3 上运行。
现公开供大家使用。

图片下方有修改方法的介绍。

WinBetaUser 在 bilibili 上讲解了该安装程序的修改方法。

以下是修改方法（仅供参考，你也可以将部分内容修改为其他数值）

1. 将偏移量为 0x1FB40 之后的数据改为 "VersionNT > 500 And ServicePackLevel >= 0" ，16 进制数值为 "56657273696F6E4E54203E2035303020416E6420536572766963655061636B4C6576656C203E3D2030"
   VersionNT 为 Windows 版本，例如 501 就是 XP。原位置为 "= 501"，即: 必须为 Windows XP。这里改为 "> 500"，即: Windows 2000(不包括) 以上
   ServicePackLevel 就是系统的 Service Pack 数，我们这里对 SP 数不做要求，因此设置为 ">= 0"。

   ![1](/img/winfs_1.png)

2. 将偏移量为 0x1FEA0 的空格改为 "!", 即 "21"。
   因为该安装程序存在一些未知的限制，我们尚不明确该限制的具体内容，但是既然表达式 'WinFS_UserPermission = "true"' 的值为 false, 导致无法继续安装，那么我们可以将其改为一个相反的表达式 'WinFS_UserPermission!= "true"', 这样我们就能正常安装了。

   ![2](/img/winfs_2.png)
