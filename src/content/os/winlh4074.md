---
title: "Windows Longhorn 4074 全功能优化版"
cover: "/img/lh4074.png"
hero: "/img/winlh4074.png"
status: "planned"
order: 100
blurb: "Windows Longhorn 4074 全功能优化版"
downloads:
  - { label: "下载 2.0 虚拟机 (7Z)", href: "https://pan.astpan.com/s/5Wymca?path=%2Fwinlh4074%2Fv2.0%2FVM", kind: "archive" }
  - { label: "下载 2.0 镜像 (ISO) 该版本的镜像的 wim 文件由 WinBetaUser 封装，感谢他的贡献。", href: "https://pan.astpan.com/s/5Wymca?path=%2Fwinlh4074%2Fv2.0%2FISO", kind: "iso" }
  - { label: "下载 1.0 虚拟机 (7Z)", href: "https://pan.huang1111.cn/s/GmNgFW?path=%2Fwinlh4074%2Fv1.0%2FVM%2F7-ZIP%E5%8E%8B%E7%BC%A9%E5%8C%85", kind: "archive" }
  - { label: "下载 1.0 虚拟机自解压安装程序 (EXE) 不建议使用", href: "https://pan.huang1111.cn/s/GmNgFW?path=%2Fwinlh4074%2Fv1.0%2FVM%2F%E8%87%AA%E8%A7%A3%E5%8E%8B%E5%AE%89%E8%A3%85%E7%A8%8B%E5%BA%8F", kind: "link" }
  - { label: "下载 1.0 镜像 (ISO)", href: "https://pan.huang1111.cn/s/GmNgFW?path=%2Fwinlh4074%2Fv1.0%2FISO", kind: "iso" }
  - { label: "下载中文版截图 (2.0)", href: "/img/winlh4074.png", kind: "image" }
  - { label: "下载英文版截图 (2.0)", href: "/img/winlh4074en.png", kind: "image" }
  - { label: "观看 WinBetaUser 为此系统的 2.0 版本制作的测评视频（记得点赞投币收藏关注）", href: "https://www.bilibili.com/video/BV1st42177Xb", kind: "link" }
screenshots:
  - "/img/winlh4074.png"
  - "/img/winlh4074en.png"
---

Windows Longhorn 4074，内置全部概念功能！
首先声明，此产品直接使用原版 Longhorn 修改，不基于任何其他修改版。
本产品有参考 Longhorn CverNate II， Longhorn SigmaOS 3.0 和 Longhorn Reloaded M1，特别鸣谢这些修改版的制作者。

## 系统更改

1. 安装 RealAero v0.3，自带透明通知。
2. 替换了 Longhorn Reloaded 的 logonUI.exe，即登录界面程序。
3. 更改了部分图标。
4. 更改了 basebrd.dll 和 shellbrd.dll。系统属性和 winver 的图片更新。
5. 激活了系统。（该版本的 Windows Longhorn 无需拆弹）
6. 将 bliss.bmp 替换为高清 4K 版本。
7. 内置了部分 Longhorn 概念壁纸，添加了 10 张 ESO 的星空壁纸的 4K 版本。（来源： https://eso.org）
8. 将开始按钮替换为 Sigma OS 3.0 的。
9. 为侧边栏的 Slideshow 组件添加图片
10. 添加高清扩展图片
11. 安装了微软雅黑字体（但未设置为系统默认字体，因为会有 Bug）
12. 修复了新建文件夹功能
13. 安装了 Sticky Notes 侧边栏组件
14. 安装了 7-Zip, Everything 和 Firefox 浏览器，将 Firefox 主页设置为必应搜索（https://cn.bing.com）
15. 启用了 WinFS (Windows File System，也被称为 Windows Future Storage)
16. 启用了 ListViewSpy，Carousel，Panorama 资源管理器布局
17. 安装了 Microsoft Office 2003 SP3 并安装了 Office 2007 兼容包。
18. 安装了 Windows Vista Aero 指针。
19. 针对中文版本安装了 Windows Longhorn 4074 汉化包 11.0，感谢该汉化程序的作者 [WinBetaUser](https://space.bilibili.com/410645610)。（点击用户名进入用户主页）（你也可以打开 [\[汉化包发布页面\]](https://winbetauser.github.io/2023/06/10/lh4074mui.html) 查看详情）
20. 【2.0 内容】添加了 70 张来自各个版本的 Windows 的壁纸。
21. 【2.0 内容】添加磁盘容量条。
22. 【2.0 内容】更新了 100+ 个系统图标。
23. 【2.0 内容】安装了 Windows Movie Maker 和 Longhorn Support。
24. 【2.0 内容】中文版安装了 Windows Longhorn 4074 多语言包 12.0，并将默认语言设置为中文。

系统镜像的安装程序使用 Nicrozoft OS Installer 的 GUI 版本。安装时可以选择语言
虚拟机的第 2 个快照和第 1 个快照分别对应中文和英文版本。

## 常见问题

1. Q：安装了 Longhorn Tools (Longhorn 2008) 了吗？
   A：没有。因为 Longhorn Tools 会损坏 WinFS 和 Explorer，而且用其开启的 Aero 和 DWM 极不稳定。
2. Q：Nicrozoft OS Installer 是什么？
   A：Nicrozoft OS Installer 是 Nirozoft 编写的 Windows 安装程序，目前已被应用于 Nicrozoft Wihdous 7 地狱版、Windows XP SP3 集成主题版、Nicrozoft Wihdous 7 鬼影版的镜像。
3. Q：安装了 VMware Tools 了吗？
   A：没有。作者亲测在该版本的 Windows 上安装 VMware Tools 会导致系统出现窗口动画丢失，打开窗口时闪屏，挂起并恢复后卡死等问题。
4. Q：为什么启动后卡住？
   A：因为系统检测到新硬件会自动安装设备，因此首次和第二次启动需要等待 2-3 分钟，一般启动第 3 次后就会恢复正常。

特别鸣谢：

1. WinBetaMUI Team 中的其他主要参与开发的成员（WinBetaUser, Chung Andy）
2. IVBX Data, 本产品参考了她的 CverNate II
3. RealAero 的开发者
4. [az_micro](https://space.bilibili.com/567646893) 和 [CallCateIn58](https://space.bilibili.com/336583449) 提供启用 WinFS 的方法
5. [AndyChung123](https://space.bilibili.com/2119761603) [YuHua_o](https://space.bilibili.com/1468597922) 透明通知开启方法

<span class="warn">© Nicrozoft Corporation, 保留所有权利。
未经 Nicrozoft 允许, 禁止转载或修改, 否则 Nicrozoft 必将追究！</span>

十分感谢 WinBetaUser 在 bilibili 上测评了该系统。
