---
title: "Windows 10 优化版"
subtitle: "Windows 10 优化版 x64 22H2 专业工作站版 v2.0"
cover: "/img/10ext.png"
hero: "/img/windows10ext.png"
status: "planned"
order: 170
blurb: "Windows 10 优化版"
downloads:
  - { label: "赞助 Nicrozoft", href: "https://afdian.com/a/nicrozoft", kind: "link" }
  - { label: "观看 2.0 版本的介绍及演示视频", href: "https://www.bilibili.com/video/BV1EAZKBZEeE/", kind: "link" }
  - { label: "阅读 《安装后必读》", href: "/data/Win10Ext/安装后必读.pdf", kind: "link" }
  - { label: "查看文件校验和 (2.0 完整版 ISO)", href: "/checksums/win10ext_2.0_full_iso", kind: "link" }
  - { label: "移动网盘链接 (2.0 完整版)", href: "https://yun.139.com/shareweb/#/w/i/2sUfF0DBF8Dms", kind: "iso" }
  - { label: "123 网盘链接 (2.0 完整版)", href: "https://www.123865.com/s/kb7cjv-W3he3", kind: "iso" }
  - { label: "查看文件校验和 (2.0 基本版 ISO)", href: "/checksums/win10ext_2.0_basic_iso", kind: "link" }
  - { label: "移动网盘链接 (2.0 基本版)", href: "https://yun.139.com/shareweb/#/w/i/2sUfExBAvCuum", kind: "iso" }
  - { label: "123 网盘链接 (2.0 基本版)", href: "https://www.123865.com/s/kb7cjv-dhhe3", kind: "iso" }
notices:
  - groups: ["2.0 版"]
    tone: "critical"
    title: "Nicrozoft Activator 可能不起作用"
    body: "由于未知原因，基于 MAS 3.8 的 Nicrozoft_Activator 已失效。你可以在 PowerShell 运行 <br>`irm https://get.activated.win | iex`<br> 来执行来自上游 [Massgravel](https://massgrave.dev) 的激活。"
  - groups: ["2.0 版"]
    tone: "warning"
    title: "下载 2.0 版镜像前请注意"
    body: "为保证下载到正确的文件，<strong>请勿使用迅雷下载该镜像</strong>！网盘单线程即可跑满带宽，无需第三方下载器加速。下载前请阅读 <a href=\"/data/Win11Ext/安装前必读.pdf\" target=\"_blank\" rel=\"noopener\">《安装前必读》</a>。"
  - labels: ["*2.0 完整版*"]
    tone: "info"
    body: "完整版预装 Office、Adobe 等大型软件，体积较大，请确认磁盘空间充足。"
---

该系统在 v2.0 版本重制，从原版系统重新制作，重制后分为完整版本和基本版本，完整版本与重制前相似，但对系统进一步优化；基本版本未预装 Office、Adobe 等大型软件，仅预装系统优化必要的软件，具有更小的体积。
此系统并不基于任何其他修改版。除安装程序外,也没有参考其他任何修改版。同时该版本修复了安装程序启动管理器被吊销的问题。
该版本在审核模式下制作，并在封装前进行 Sysprep 通用化，解决了 SID 重复的问题，并且恢复了 OOBE。
此系统使用 Windows 部署映像服务和管理工具 (Dism) 封装并将镜像转为 ESD 格式，并使用 Dism++ 添加卷标识符。

## 系统更改

1. 安装了所有版本的 Microsoft Visual C++ 运行库。
2. 集成了 .NET 8.0 SDK, 9.0 SDK, 10.0 SDK，以及 .NET Framework 4.8.1 SDK 和 3.5。
3. 安装了新版微软雅黑 (11.3.0) 的 SemiBold、SemiLight、Heavy 三个字号。
4. 内置了 80+ 款主题。
5. 调整了任务栏的 Acrylic 透明度。
6. 安装了 7-Zip 并替换了压缩文件图标。
7. 集成了 DirectX 运行时。
8. 预装了一款支持 HDR 且具有 OCR、拾色等功能的开源截图软件 Snow Shot。
9. 预装了一款 Windows 插件管理软件 Windhawk，可用于修改一些 Windows 使用偏好。
10. 内置了一款磁盘管理软件 DiskGenius。
17. 内置了软件卸载工具 Geek Uninstaller。
18. 安装了一款文件搜索软件 Everything。

## 完整版额外内容

1. 安装了 Visual Studio Code 并安装一些插件。
2. 安装了 Adobe 软件中的 Photoshop 2026、Premiere 2025、After Effects 2025、Audition 2025、Acrobat 2025、Illustrator 2025 六款软件。
3. 安装了 Office 2024 专业增强版。
4. 安装了 Files App。
5. 安装了 PowerToys。
6. 集成了 Python 3.12、MinGW 15.1.0 x64、 MinGW 15.1.0 x86 和 JDK 21。

<span class="warn">© Nicrozoft Dev Group, 保留网站和演示视频的所有权利。
系统及预装的软件的所有权属于其各自的开发者，使用时需要遵守它们的许可条款或开源协议。
未经 Nicrozoft 许可, 请勿转载或修改该镜像、视频、网站页面等内容！</span>

如果你喜欢该产品，可以考虑赞助 Nicrozoft，感谢你的支持。
如果没有赞助的条件，或者不想赞助，也请为视频点赞/投币，谢谢。
