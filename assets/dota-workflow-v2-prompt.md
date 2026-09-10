# Dota 2 架构图提示词

生成方式：内置 imagegen。用于 tig-detail.html，原图片保留。

Use case: infographic-diagram
Create a clean Chinese technical architecture workflow for a portfolio Dota 2 project. Pure white background, landscape 16:9, large legible Chinese sans-serif, navy titles, restrained blue/teal outlines, pale color fills. Generous margins. No game artwork, no icons competing with content, no fake charts, no watermark.
Title: "Dota 2｜宏观动作预测与多阶段后训练"
Subtitle: "Qwen2.5-14B · 当前与近期状态 → 1～2 个宏观动作"
Layout THREE horizontal bands, clear sequential arrowheads. Top band DATA, middle TRAINING with four nodes, bottom RESULTS. No crossing arrows.

TOP band title "01 数据构建｜先按比赛划分，再生成决策样本".
Left node "OpenDota Replay" → "质量过滤 · 比赛级划分". From this node fork into two parallel horizontal lanes:
upper blue lane "截至 t 的状态" → "经济 / 英雄 / 建筑 / 近期事件" → "模型输入 Prompt".
lower orange lane "未来事件检测" → "Backward Filling" → "Priority Overwrite" → "主动作 + 至多一个辅助动作".
At right enclose the two outputs with a data-record bracket caption "状态—动作样本". Under lanes concise note "未来事件仅用于监督与评分，不进入 Prompt". Do NOT connect future labels into input Prompt. No label-arrow straight into inference.
Keep labels horizontally readable.

MIDDLE band title "02 训练主链｜Qwen2.5-14B 预训练版".
Four aligned columns, first compact start node "Qwen2.5-14B" then arrow to a SFT card then arrow to GRPO card then arrow to OPD-lite card. Use smaller start node so three cards have ample room.
SFT card heading "LoRA SFT"
lines "仅监督 Assistant 输出"
"r=16 · α=32 · 3 epoch"
"学习率 2e-4"
GRPO card heading "GRPO"
lines "同状态分组采样 G=4"
"主动作 + 动作集 F1 + 格式奖励"
"概率比裁剪 ε=0.2"
"冻结 SFT 参考模型 · KL 系数 0.01"
"600 步 · 学习率 5e-6"
OPD-lite card heading "OPD-lite 纠错续训"
lines "训练预测回放 → 纠正目标"
"类别均衡随机采样 800 行"
"正确 continuation 监督"
"80 步 · 学习率 2e-6"
One clean arrow from data record to training band labeled "训练划分", feeding SFT and explaining shared training data in band caption "各阶段使用原始状态 Prompt；标签进入监督目标或奖励函数". No need draw numerous fanout arrows.
Under training cards centered small text "输入上限 8,192 Token｜生成上限 2,048 Token｜BF16 LoRA"

BOTTOM band title "03 固定评测｜主动作准确率"
Compact table with columns "评测集" "预训练模型" "SFT" "GRPO" "OPD-lite"
row "主测试集 · 1,253 个决策点" "17.24%" "58.58%" "58.50%" "64.88%"
row "独立留出 · 74 场 / 2,815 个决策点" "14.14%" "59.29%" "59.50%" "64.30%"
Highlight final column teal, no fake rising graph. Footer "独立留出测试集用于方案确定后的泛化验证；按比赛隔离".
A simple downward arrow from training band to evaluation band is sufficient, labeled "各阶段模型". Never return evaluation data to training. Never write Instruct, lightweight GRPO, teacher KL for OPD-lite, Top-k, pass@1, model accuracy monotonic improvement. All numbers and Chinese labels accurate. Clear polished readable flow with unobstructed arrows and no dense decorative clutter.
