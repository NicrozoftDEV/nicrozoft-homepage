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
  - { label: "查看 GPL-3.0 开源协议", href: "/data/Win11Ext/NZActivator/GPL-v3.txt", kind: "link" }
  - { label: "下载 Nicrozoft Activator", href: "/data/Win11Ext/NZActivator/Nicrozoft_Activator.cmd", kind: "link" }
  - { label: "阅读 《安装前必读》", href: "/data/Win11Ext/安装前必读.pdf", kind: "link" }
  - { label: "阅读 《安装后必读》", href: "/data/Win11Ext/安装后必读.pdf", kind: "link" }
  - { label: "查看文件校验和 (6.0 完整版 ISO)", href: "/checksums/win11ext_6.0_full_iso", kind: "link" }
  - { label: "移动网盘链接 (6.0 完整版)", href: "https://yun.139.com/shareweb/#/w/i/2ur51sqSj0W80", kind: "iso" }
  - { label: "123 网盘链接 (6.0 完整版)", href: "https://www.123865.com/s/kb7cjv-23he3", kind: "iso" }
  - { label: "查看文件校验和 (6.0 基本版 ISO)", href: "/checksums/win11ext_6.0_basic_iso", kind: "link" }
  - { label: "[首选]移动网盘链接 (6.0 基本版)", href: "https://yun.139.com/shareweb/#/w/i/2u8ooGH7HPB37", kind: "iso" }
  - { label: "123 网盘链接 (6.0 基本版)", href: "https://www.123865.com/s/kb7cjv-s3he3", kind: "iso" }
  - { label: "查看文件校验和 (5.1 ISO)", href: "/checksums/win11ext_5.1_iso", kind: "link" }
  - { label: "NTDrv 网盘链接 (5.1)", href: "https://ntdrv.link/d/shared/Software/Nicrozoft/Windows_11_Extended_ProfessionalWorkstation_v5.1_Nicrozoft.iso", kind: "iso" }
  - { label: "123 网盘链接 (5.1)", href: "https://www.123912.com/s/kb7cjv-bHve3", kind: "iso" }
  - { label: "123 网盘链接 (5.1 备用链接)", href: "https://www.123865.com/s/kb7cjv-bHve3", kind: "iso" }
  - { label: "查看文件校验和 (5.0.1 ISO)", href: "/checksums/win11ext_5.0.1_iso", kind: "link" }
  - { label: "huang1111 网盘链接 (5.0.1)", href: "https://pan.huang1111.cn/s/GmNgFW?path=%2Fwin11ext%2Fv5.0.1%2FISO", kind: "iso" }
  - { label: "夸克网盘链接 (5.0.1)", href: "https://pan.quark.cn/s/f238528f69a4", kind: "iso" }
  - { label: "123 网盘链接 (5.0.1)", href: "https://www.123912.com/s/kb7cjv-ZiVc3", kind: "iso" }
  - { label: "123 网盘链接 (5.0.1 备用链接)", href: "https://www.123865.com/s/kb7cjv-ZiVc3", kind: "iso" }
notices:
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

该产品预计将在 6 月发布新版本，版本号和新增内容待定，可以在加入交流群以提出你的建议。

如果你喜欢该产品，可以考虑赞助 Nicrozoft，感谢你的支持。

如果没有赞助的条件，或者不想赞助，也请为视频点赞/投币，谢谢。

Nicrozoft Activator 也提供单独下载渠道，该产品基于 MAS-CN 修改，修改部分代码以实现无交互地激活 Windows 和 Office，以 GPL-3.0 协议开源。

以下为 v6.0 的下载相关内容

<span class="warn">关于使用该系统前后遇到的任何问题的解答，请参阅 《安装前必读》与《安装后必读》。</span>

移动网盘和 123 网盘下载均不限速，123 网盘下载时可能产生费用。
<span class="warn">**为保证你能下载正确的文件，请勿使用迅雷下载该镜像！
根据多方面消息，迅雷会偷换下载的镜像文件的链接，虽然已在 1/25 停止，但不排除后续恢复的可能性。
提供下载链接的网盘下载速度足够快，单线程也可跑满带宽，不需要第三方下载器加速**</span>

以下为 6.0 完整版的【镜像】文件，文件格式为[.iso]
<span class="warn">该产品不可以使用第三方安装器安装！否则会遇到 Office 故障等问题！由此原因遇到的任何问题不接受反馈。</span>

以下为 6.0 基本版的【镜像】文件，文件格式为[.iso]
<span class="warn">该产品可以使用第三方安装器安装，但是不保证不出问题，由此原因遇到的任何问题不接受反馈。</span>

以下是重制前版本(1.0 ~ 5.1)的内容，不建议阅读和使用。

Windows 11 优化版 64位。
系统基于 Windows 11 24H2 专业工作站版。
此系统并不基于任何其他修改版。除安装程序外, 也没有参考其他任何修改版。只有安装程序使用了 Rectify 11 的部分文件。
此系统使用 Dism 封装，并使用 Wimlib-ImageX (1.0 使用 Dism++) 将镜像转为 ESD 格式并添加卷信息。我们坚决抵制任何流氓软件！抵制流氓封装工具 Easy Sysprep！

## 旧版本系统更改

1. 添加了 77 个主题。
2. 永久激活了系统。
3. 调整了桌面图标。
4. 默认显示文件扩展名。
5. 安装了 Microsoft Office Professional Plus 2021 并使用 Ohook 模式永久激活（非 KMS）。
6. 安装了 Visual Studio Code, PowerToys, Files App, Dev Home。
7. 为 VSCode 安装了 Python, C++, Code Runner 插件。
8. 安装了 Mica for Everyone。
9. 安装了火绒安全软件。
10. 安装程序样式大幅调整。
11. 为 Edge 安装了 Adguard 插件。
12. 【2.0 内容】新增 8 个主题, 其中包含 "Nebulas in 4K" 主题。
13. 【2.0 内容】修复了 Mica for Everyone 无法启动的问题。
14. 【2.0 内容】更新了 Files App。
15. 【2.0 内容】将 Files App 设为默认资源管理器。
16. 【2.0 内容】安装了 Adobe Photoshop 2023。
17. 【2.0 内容】为 Edge 设置了圆角标签页。
18. 【2.0 内容】一些系统和应用设置微调。
19. 【3.0 内容】安装了新版微软雅黑 (11.3.0)。
20. 【3.0 内容】安装了 translucentTB 并将任务栏设为 Acrylic 半透明。
21. 【3.0 内容】安装了 ExplorerBlurMica，将资源管理器设为全窗口 Acrylic。
22. 【3.0 内容】更新了系统、VSCode、PowerToys 和大量 Microsoft Store 应用。
23. 【3.0 内容】安装了画图 3D。
24. 【3.0 内容】添加了华为 MateBook 16s 的 OEM 主题。
25. 【3.0 内容】为 Microsoft Edge 开启了 Mica 效果，并设置了垂直标签页。
26. 【4.0 内容】更新了系统和软件。
27. 【4.0 内容】安装了 Visio 和 Project 并永久激活。
28. 【4.0 内容】调整了资源管理器透明度以保证文字清晰可见。
29. 【4.0 内容】安装了 Adobe Photoshop 2024（25.9）。（之前的版本为 2023）
30. 【4.0 内容】优化了字体设置，使字体观感更加舒适，同时修复了字号重复的问题。
31. 【4.0 内容】安装了火绒安全软件 6.0。
32. 【5.0 内容】更新系统版本至 24H2 的 2025 01 累积更新。
33. 【5.0 内容】更新系统的各个软件至最新版本。
34. 【5.0 内容】将微软雅黑的 Regular，Light，Bold 三个字号恢复至原版。
35. 【5.0 内容】安装 Adobe Acrobat 2024 和 Adobe Premiere 2024。
36. 【5.0 内容】添加 Windows Server 2025 和 Microsoft Community 的主题。
37. 【5.0 内容】内置一个工具，用于在物理机安装后移除 VMware Tools 并清理导致计算机被误判为虚拟机的注册表，放置在桌面右上角，该程序开源至 Github。
38. 【5.0 内容】内置了常用文件搜索软件 Everything。
39. 【5.1 内容】更新了系统和大部分软件。
40. 【5.1 内容】将 Office 升级至 Office 2024 专业增强版。
41. 【5.1 内容】将 Adobe 软件（Acrobat Pro、Photoshop、Premiere）升级至 2025 版本，同时加装 After Effects。
42. 【5.1 内容】集成了所有版本的 Microsoft Visual C++ Runtime。

该镜像并没有设置跳过 Windows 11 硬件检查的内容。因此你的计算机(或虚拟机)必须满足 Windows 11 硬件要求。
如果你确实要在不满足 Windows 11 硬件要求的计算机上安装该系统，你需要按 Shift+F10, 然后输入 SkipCheck (这是 Nicrozoft 在 boot.wim\Windows\System32 下放置的一个 bat 脚本，用于跳过硬件检查), 就可以继续安装了。

<span class="warn">© Nicrozoft Corporation, 保留所有权利。
未经 Nicrozoft 允许, 禁止转载或修改, 否则 Nicrozoft 必将追究！</span>

十分感谢 WinBetaUser 和 Microhard-1724 在 bilibili 上测评该系统。

5.0.1 版本仅是修复了安装程序的一些问题，系统功能完全相同，因此已安装 5.0 的用户不需要安装 5.0.1。

<span class="warn">4.0 及更早版本的产品文件已遗失，不可下载。</span>
