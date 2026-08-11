---
title: "Windows 11 优化版"
subtitle: "Windows 11 优化版 x64 25H2 专业工作站版 v6.0"
cover: "/img/11ext.png"
hero: "/img/windows11ext_full.png"
status: "planned"
order: 140
blurb: "Windows 11 优化版"
downloads:
  - { label: "赞助 Nicrozoft", href: "https://afdian.com/a/nicrozoft", kind: "link" }
  - { label: "观看 6.0 版本的介绍及演示视频", href: "https://www.bilibili.com/video/BV1uEZ4BMEQw", kind: "link" }
  - { label: "阅读 《安装前必读》", href: "/data/Win11Ext/安装前必读.pdf", kind: "link" }
  - { label: "阅读 《安装后必读》", href: "/data/Win11Ext/安装后必读.pdf", kind: "link" }
  - { label: "查看文件校验和 (6.0 完整版 ISO)", href: "/checksums/win11ext_6.0_full_iso", kind: "link" }
  - { label: "移动网盘链接 (6.0 完整版)", href: "https://yun.139.com/shareweb/#/w/i/2vMBA1KPbcAib", kind: "iso", password: "b6at" }
  - { label: "123 网盘链接 (6.0 完整版)", href: "https://www.123865.com/s/kb7cjv-23he3", kind: "iso" }
  - { label: "查看文件校验和 (6.0 基本版 ISO)", href: "/checksums/win11ext_6.0_basic_iso", kind: "link" }
  - { label: "移动网盘链接 (6.0 基本版)", href: "https://yun.139.com/shareweb/#/w/i/2u8ooGH7HPB37", kind: "iso", password: "ljar" }
  - { label: "123 网盘链接 (6.0 基本版)", href: "https://www.123865.com/s/kb7cjv-s3he3", kind: "iso" }
  - { label: "查看文件校验和 (5.1 ISO)", href: "/checksums/win11ext_5.1_iso", kind: "link" }
  - { label: "123 网盘链接 (5.1)", href: "https://www.123912.com/s/kb7cjv-bHve3", kind: "iso" }
  - { label: "123 网盘链接 (5.1 备用链接)", href: "https://www.123865.com/s/kb7cjv-bHve3", kind: "iso" }
notices:
  - groups: ["6.0 版"]
    tone: "critical"
    title: "Nicrozoft Activator 可能不起作用"
    body: "由于未知原因，基于 MAS 3.8 的 Nicrozoft_Activator 已失效。你可以在 PowerShell 运行 <br>`irm https://get.activated.win | iex`<br> 来执行来自上游 [Massgravel](https://massgrave.dev) 的激活。"
  - groups: ["6.0 版"]
    tone: "warning"
    title: "下载 6.0 版镜像前请注意"
    body: "为保证下载到正确的文件，<strong>请勿使用迅雷下载该镜像</strong>！网盘单线程即可跑满带宽，无需第三方下载器加速。下载前请阅读 <a href=\"/data/Win11Ext/安装前必读.pdf\" target=\"_blank\" rel=\"noopener\">《安装前必读》</a>。"
  - labels: ["*6.0 完整版*"]
    tone: "info"
    body: "完整版预装 Office、Adobe 等大型软件，体积较大，请确认磁盘空间充足。"
screenshots:
  - "/img/win11ext_1.png"
  - "/img/win11ext_2.png"
---

该系统在 v6.0 版本重制，从原版系统重新制作，重制后分为完整版本和基本版本，完整版本与重制前相似，但对系统进一步优化；基本版本未预装 Office、Adobe 等大型软件，仅预装系统优化必要的软件及运行库，具有更小的体积。
此系统并不基于任何其他修改版。除安装程序外,也没有参考其他任何修改版。只有安装程序使用了 Rectify 11 的部分文件，使其更加美观。同时该版本修复了安装程序启动管理器被吊销的问题。
该版本在审核模式下制作，并在封装前进行 Sysprep 通用化，解决了 SID 重复的问题，并且恢复了 OOBE。
此系统使用 Windows 部署映像服务和管理工具 (Dism) 封装，基本版将映像像转为 ESD 格式，并使用 Dism++ 添加卷标识符。

## 系统更改

1. 添加 80+ 个主题。
2. 集成了所有版本的 Microsoft Visual C++ Runtime。
3. 系统设置微调。
4. 安装了 ExplorerBlurMica，将资源管理器设为全窗口 Acrylic。
5. 安装了 Mica for Everyone，为各种窗口的框架设置为 Acrylic 材质。
6. 安装了新版微软雅黑 (11.3.0) 的 SemiBold、SemiLight、Heavy 三个字号。
7. 安装了 translucentTB 并将任务栏设为 Acrylic 半透明。
8. 集成了 .NET 8.0 SDK, 9.0 SDK, 10.0 SDK，以及 .NET Framework 4.8.1 SDK 和 3.5。
9. 安装了 7-Zip 并替换了压缩文件图标。
10. 调整了 CPU 的调度偏好，提升了性能。
11. 内置了激活工具 Nicrozoft Activator（基于 MAS）。
12. 集成了 DirectX 运行时。
13. 预装了一款驱动软件 Driver Boost。
14. 预装了一款支持 HDR 且具有 OCR、拾色等功能的开源截图软件 Snow Shot。
15. 预装了一款 Windows 插件管理软件 Windhawk，可用于修改一些 Windows 使用偏好。
16. 内置了一款磁盘管理软件 DiskGenius。
17. 内置了软件卸载工具 Geek Uninstaller。
18. 安装了一款文件搜索软件 Everything。

## 完整版额外内容

1. 安装了 Office 2024 专业增强版。
2. 安装了 Adobe 软件中的 Photoshop 2026、Premiere 2025、After Effects 2025、Audition 2025、Acrobat 2025、Illustrator 2025 六款软件。
3. 安装了 Files App。
4. 安装了 Visual Studio Code 并安装一些插件。
5. 安装了 PowerToys。
6. 集成了 Python 3.12、MinGW 15.1.0 x64、 MinGW 15.1.0 x86 和 JDK 21。

<span class="warn">© Nicrozoft Dev Group, 保留网站和演示视频的所有权利。
系统及预装的软件的所有权属于其各自的开发者，使用时需要遵守它们的许可条款或开源协议。
未经 Nicrozoft 许可, 请勿转载或修改该镜像、视频、网站页面等内容！</span>

该产品预计将在 7 月发布新版本，版本号和新增内容待定，可以在加入交流群以提出你的建议。

如果你喜欢该产品，可以考虑赞助 Nicrozoft，感谢你的支持。

如果没有赞助的条件，或者不想赞助，也请为视频点赞/投币，谢谢。
