# Yang Yi — Personal Homepage

个人主页，展示个人简介、项目经历与简历。

🌐 https://yangyi626.github.io/

## 网站内容

- 个人简介与项目索引
- 项目详情、架构图与相关成果
- 在线简历与打印入口

## 本地预览

本站使用 HTML、CSS 和 JavaScript，无需构建。

在仓库目录运行：

```bash
python -m http.server 8000
```

浏览器访问 http://localhost:8000。

## 内容维护

更新内容后，请检查页面布局、链接与图片展示。
项目描述与实验结果应以可核实的材料为准。

## 作品纯享版

入口：[works.html](works.html)，首页「查看简历」后亦有链接。独立使用 `works.css` 与 `works.js`，无需构建或外部字体。目前上线亿灵、DataAgent、社交媒体运营 Agent、SPARK 与 C-MTCSD，顶部导航在五个独立页面之间切换，每页仅展示一个项目。

图片在 `assets/works/ailyn/`，保留原始 PNG 像素与内容，按设备分类入口、产品画面、本地协同场景、多端连接与统一治理、设备扩展与模型管理排序。英文文件名前缀即展示顺序；来源依次为 `微信图片_2026-09-14_184447_217.png`、`微信图片_2026-09-14_184428_602.png`、`微信图片_2026-09-14_184455_849.png`、`640.png`、`640 (1).png`。第三方素材中的宣传文字不作为个人职责或实测成果，也不据此关联 Agent-One 详情。

维护时在 `works.html` 更新对应 `figure` 的原图链接、图片尺寸、替代文本与简短标签；放大预览会自动读取图片流顺序及总数，新增图片时还需同步静态序号与标题行计数。上线其他项目时再启用导航并提供真实素材。检查完整图片、移动横向导航，以及弹窗关闭、方向键切换和焦点返回。

### 社交媒体运营 Agent

入口：[works-social.html](works-social.html)，与亿灵页复用 `works.css`、`works.js`，通过 `body.social-theme` 使用珊瑚橙与淡紫主题。各页 `data-project-name` 提供弹窗项目名；弹窗按当前页五张图切换，同步章节标题和简介。

素材来自「社交媒体运营Agent/设计稿」，仅复制以下五张 PNG 到 `assets/works/social-agent/`，均为 1920 × 1080，保留原始文件内容，不使用项目目录下的未知哈希名图片。

| 原始素材 | 站点文件 | 章节 |
| --- | --- | --- |
| 内容分析（笔记）.png | 01-note-analysis.png | 热门笔记 |
| 内容分析（关键词）.png | 02-keyword-analysis.png | 多维标签 |
| 内容生成-策略列表.png | 03-strategy-list.png | 选题策略 |
| 我的创作.png | 04-my-creations.png | 内容创作 |
| 内容生成-笔记排期.png | 05-content-schedule.png | 排期设计 |

项目简介依据 `detail.md`，前四章标注「产品设计稿」，第五章标注「排期设计」；排期为设计展示，不代表自动发布能力。

### SPARK

入口：[works-spark.html](works-spark.html)。这是 LLM 多智能体立场与话题协同演化研究，不是社交媒体运营工具；论文身份为 EMNLP 2025 Main、共同第一作者。简介、参与范围与论文/代码外链依据 `spark-detail.html`，不新增实验成绩。

复用 `works.css`、`works.js`，以 `body.spark-theme` 提供紫色与冰蓝主题，`data-project-name="SPARK"` 提供预览项目名。当前页包含五张研究图示，弹窗独立按本页图片顺序切换并同步标题、说明；架构、轨迹与消融图整宽展示，算法和提示词使用现有窄图容器，均保持原比例、不裁切。无外部字体或 CDN 依赖。

本页所有图片（含 `og:image`、原图链接及弹窗图源）仅来自 `E:/B workplace/36_面试/07_作品集/作品展示/SPARK/`。该目录有七张 PNG 和一份论文 PDF；根据截图可识别文字选择架构、算法、双层记忆提示词、演化轨迹与消融对照五张。两张发言生成提示词截图（`09-18-39`、`09-19-12`）与已有架构/流程说明重叠，未采用。不使用 `05_SPARK` 或网站已有 `assets/spark-overview.png` 作为本页素材来源。

| 原始素材（绝对路径） | 站点文件 | 原始尺寸 | 章节 |
| --- | --- | --- | --- |
| `E:/B workplace/36_面试/07_作品集/作品展示/SPARK/Snipaste_2026-09-15_09-15-44.png` | `assets/works/spark/01-sara-tes-architecture.png` | 1588 × 758 | 个体如何思考，群体如何演化 |
| `E:/B workplace/36_面试/07_作品集/作品展示/SPARK/Snipaste_2026-09-15_09-18-52.png` | `assets/works/spark/02-simulation-workflow.png` | 697 × 775 | 把一次交流，接入逐日仿真 |
| `E:/B workplace/36_面试/07_作品集/作品展示/SPARK/Snipaste_2026-09-15_09-19-01.png` | `assets/works/spark/03-dual-memory-prompts.png` | 672 × 461 | 今日观点，如何进入长期记忆 |
| `E:/B workplace/36_面试/07_作品集/作品展示/SPARK/Snipaste_2026-09-15_09-16-45.png` | `assets/works/spark/04-stance-topic-trajectory.png` | 1726 × 693 | 沿着十四天，追踪观点与话题 |
| `E:/B workplace/36_面试/07_作品集/作品展示/SPARK/Snipaste_2026-09-15_09-17-51.png` | `assets/works/spark/05-memory-ablation.png` | 1602 × 524 | 移除一层记忆，再看群体变化 |

五张图片均按原始字节复制为英文文件名，原素材完全不动；`og:image` 使用第一张架构图。图注分别描述截图中的模块、伪代码、提示词、轨迹和对照面板，不将其表述为产品界面，不额外推断实验显著性或真实社会效果。旧复制文件 `01-research-architecture.png`、`02-research-overview.png` 保留但本页不再引用。

SHA256 校验映射（每行源文件与网站副本哈希相同，尺寸亦一致）：

| 站点文件名 | SHA256 |
| --- | --- |
| `01-sara-tes-architecture.png` | `dade76d7b0cb2e7f814680bd1dfd05a65fb7016f740d023b0ba2c9704f9b1de3` |
| `02-simulation-workflow.png` | `235608b76f4d3707261ba700015c501b5d3109fba0f57304e9a8ef202f62b741` |
| `03-dual-memory-prompts.png` | `3d503240c61ff9e2961c24b4d2fa77843392ca5dd102f045c5aa0d43e7a5751c` |
| `04-stance-topic-trajectory.png` | `be7b7b96bae09aea79c45b6a7d72dfd78fcee424405acd283c09a12e5030849f` |
| `05-memory-ablation.png` | `59b8dd2e83453f1a9564c8a5965f449b238f35259d41c62882f3d7291bf26ba1` |

### C-MTCSD

入口：[works-cmtcsd.html](works-cmtcsd.html)。中文多轮对话立场检测数据集与基准，WWW 2025 Companion、共同第一作者；定位、参与范围及论文/数据仓库外链依据 `cmtcsd-detail.html`。COLA 是适配的已有评测基线，不将数据集包装为 Agent 产品，也不新增成绩指标。

复用 `works.css?v=cmtcsd-1` 和未修改的 `works.js`。新增样式仅作用于 `body.cmtcsd-theme`，使用深绿底、薄荷绿与青蓝，适配长项目名。每页只展示当前项目；本页 `data-project-name="C-MTCSD"` 驱动八张图的弹窗标题、序号与章节说明，保留方向键、Esc、焦点返回、滚动渐入、鼠标光晕倾斜、阅读进度及 reduced-motion。

唯一图源：`E:/B workplace/36_面试/07_作品集/作品展示/C-MTCSD/`。已完整列出目录：一份 `3701716.3715307.pdf` 与八张 PNG。八图分别为论文表 1–8，无重复，全部采用；依据截图文字识别及详情页编写说明，未引用网站已有概念图、其他项目素材或外部图片。下表原文件均位于该唯一图源目录，站点文件均位于 `assets/works/cmtcsd/`。

| 原始素材 | 站点文件 | 原始尺寸 | 桌面布局 / 最大外框宽度 |
| --- | --- | --- | --- |
| Snipaste_2026-09-15_10-37-24.png | 01-collection-counts.png | 1097 × 398 | 采集与复标统计，居中 / 1000px |
| Snipaste_2026-09-15_10-37-33.png | 02-annotation-agreement.png | 1113 × 318 | 标注一致性，图文双栏 / 760px；1180px 以下转单栏 |
| Snipaste_2026-09-15_10-37-46.png | 03-label-distribution.png | 1213 × 549 | 标签分布，居中 / 1120px |
| Snipaste_2026-09-15_10-37-53.png | 04-conversation-depth.png | 1261 × 616 | 深度统计，居中 / 960px |
| Snipaste_2026-09-15_10-38-08.png | 05-in-target-results.png | 1229 × 733 | 目标内结果，独立居中 / 1160px |
| Snipaste_2026-09-15_10-38-15.png | 06-cross-target-results.png | 1252 × 687 | 跨目标结果，独立居中 / 1120px |
| Snipaste_2026-09-15_10-38-25.png | 07-zero-shot-results.png | 824 × 627 | 零样本结果，原宽封顶居中 / 824px |
| Snipaste_2026-09-15_10-38-37.png | 08-depth-group-results.png | 1722 × 643 | 深度分组结果，全内容宽 / 1320px |

所有图片按原始字节复制，逐张 SHA256 与 PNG 真实宽高校验一致，原素材未修改。`figure` 同时受容器宽度、原图宽度与版式最大宽度约束；图片 `height: auto`，保持完整比例、不裁切、不强制放大小图，移动端单列。`og:image` 使用标签分布表。前三页仅将 C-MTCSD 待上线按钮替换为链接，保留原内容、布局与版本参数；四页各有唯一的 active / aria-current，DataAgent 仍 disabled。

静态检查包括 `node --check works.js`、`git diff --check`、四页本地引用与锚点、ARIA ID 引用、重复 ID、导航状态及图片声明尺寸与原始 PNG 一致性。不使用浏览器工具，因此不将静态检查表述为交互或视觉实测。

### DataAgent

入口：[works-dataagent.html](works-dataagent.html)。三章为真实任务静态回放、方案演进、赛后结果对照。复用 `works.css` / `works.js`，新增隔离的蓝色与琥珀黄主题及 `dataagent.js`；五页导航全部互链，各页仅一个 active。共享 JS 未改动，无图时仍保留渐入与阅读进度。项目定位依据 `kdd-detail.html` 与本地架构说明：KDD Cup 2026 DataAgent-Bench 阶段一 54/703；个人参赛字段语义增强，赛后复现上游冠军方案并优化，不代表本人获冠军。

来源路径以下均相对于用户提供的 `03_DataAgent_KDD/` 资料根目录，刻意不发布本机盘符、私人绝对路径或运行账号：

- 真实问题：`项目版本/19_kdd/kdd-cup/data/public/input/task_89/task.json`；公开演示集身份见同项目 `data/public/README.md`。
- 真实代码与阶段日志：`项目版本/19_kdd/kdd-cup/artifacts/runs/qwen35_full50_t0_w4_s80_20260826/task_89/trace.json`。19 步运行按理解/查字段/求解/校验/答案编辑分组，步骤编号对应 `step_id`；只节录工具动作、代码和反馈，不复制内部思考、raw_response、原始堆栈或完整日志。求解代码来自步骤 17，仅省略注释与空行。
- 知识补充：`项目版本/19_kdd/kdd-cup/data/public/input/task_89/context/knowledge.md`。页面明确这是给读者的补充，轨迹未证明 Agent 读取它。
- 答案对照：上述 trace 的 `answer.rows` 为 `+14.925`；`项目版本/19_kdd/kdd-cup/data/public/output/task_89/gold.csv` 为 `+16.445`。必须保留差异提示：提交成功不等于答对，历史数据快照是否一致尚未核实；不声称赛后已修复此题。
- 方案与 50 题指标：`项目版本/kddcup2026_champion_optimization/docs/optimization_design_and_evaluation.md` §3–10，及 `介绍材料/项目介绍/02_KDD_DataAgent_四阶段架构与实现详解.md`。0.8190 持平、40/50 持平、Token −33.4%、轮数 −10.0%、完整历史流程耗时约 −37.4% 是另一组赛后本地历史汇总，含 task_25 / 379 结果复用、task_418 长尾后确定性补齐，不是官方提升或严格冷启动 A/B。
- 官网背景核对入口：<https://dataagent.top/>；策划资料另见 `作品展示/DataAgent/03_来源与公开素材索引.md`（相对于同级作品集根目录）。该展示目录只有文字与第三方 PDF，没有本人界面图片，因此本页用 HTML 排版真实文本及方案说明，不引用他队幻灯片，不新画运行图，也未使用站点演进图片。

回放显著标注「真实案例回放 · 非在线运行」，无后端、API、外部依赖或数据包分发，不执行展示代码、不重新调用模型或官方评分器。五阶段支持点击、左右键、Home/End、`aria-selected` / `tabpanel` 与焦点管理；无 JS 时五段正文均可读。表格与代码独立滚动，手机单列，尊重 reduced-motion。静态检查覆盖新旧 JS 语法、五页链接/锚点/ARIA/重复 ID/导航、代码节录与指标算术；未做浏览器视觉实测。
