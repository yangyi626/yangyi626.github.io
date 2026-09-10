# C-MTCSD 流程图提示词

生成方式：内置 imagegen。用于 cmtcsd-detail.html；旧图保留。

Use case: infographic-diagram
Create a polished Chinese scientific workflow diagram for C-MTCSD personal research portfolio website. Brand-new image, landscape 16:9 high resolution. Pure white background, restrained teal and slate-blue outlines, no gradients, no texture, no decorative illustrations. Large crisp Chinese sans-serif typography, ample white space, clean aligned arrows. Title "C-MTCSD｜数据构建与评测流程". Subtitle "结合回复上下文，判断当前发言对指定目标的立场".
Four equal columns numbered 01 02 03 04 with single left-to-right connecting arrows between column headers. Each column contains top-to-bottom steps with unambiguous downward arrowheads, no crossovers. Main workflow fills canvas, minimal text, readable on website.
Column 01 title "微博采集与筛选":
box "五个讨论目标" then small two-line list "iPhone 15 · 萝卜快跑 · 预制菜" / "裸辞 · 不婚主义".
down arrow to "关键词召回与 API 采集"
down arrow to "目标相关性审核"
down arrow to "互动量与内容长度筛选"
bottom output pill "候选帖子与评论".
Column 02 title "回复路径与样本构造":
small top box "指定目标 T"
below vertical chain three distinct nodes "原帖" → "父评论" → "当前句". First two grouped by a left bracket labeled "历史上下文"; last node teal highlighted labeled "预测对象".
Below chain separate note "按祖先路径顺序组织文本"
bottom output pill "目标 + 路径文本".
Column 03 title "多人标注与质检":
box "两轮试标与规则校准"
down arrow "每条至少双人独立标注"
down arrow "分歧与错误样本复标"
down arrow "确定当前句立场"
bottom output pill "Against / Favor / None"
small text under pill "反对 / 支持 / 未呈现明确立场".
Column 04 title "基线评测与分层分析":
box "固定训练 / 验证 / 测试划分"
down arrow "传统模型 · 预训练模型 · LLM"
down arrow to three stacked or equal inline labels "目标内" "跨目标" "零样本" under group label "评测设置"
down arrow "按目标与深度统计 F_avg"
bottom compact formula "F_avg = (F1反对 + F1支持) / 2".
A clean footer spanning width with exactly three equally sized metric cells:
"24,264" / "标注实例"
"0.934" / "平均 Kappa"
"64.07%" / "GPT-4 零样本 F_avg".
Important conceptual accuracy: current utterance alone is prediction object but history supplied. Arrows describe dataset-to-evaluation construction, not inference repeatedly annotating. Do not include nine-cell empty grids, line charts, best/hardest claims, monotonically decreasing performance, six rounds, model architecture inventions, extra metrics, giant icons, branding or watermark. Keep all literal labels accurate.
