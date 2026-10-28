# 赵博洋 / Zby

> AI 产品 · Agent Systems
>
> 把复杂能力做成可理解、可控制、可回看的系统。

我关心的不是把模型摆进页面，而是让一个 AI 能力在真实流程里有明确的输入、权限、状态、证据与退出方式。

## Current focus

- **Agent Runtime 与工作流**：把意图识别、Skill 路由、工具调用、状态迁移、结果校验与异常处理组织成可追踪的任务链路。
- **Memory / RAG / Eval**：区分短期上下文、长期记忆、知识检索与权限边界；用 Trace、Bad Case 与评测集让系统能被复盘。
- **产品体验与治理**：让复杂能力通过渐进式披露、任务状态、断点续跑与 HITL 变得可理解，同时避免越权、静默循环与不可审计的外部动作。

## Selected systems

| 系统 | 我解决的核心问题 | 入口 |
| --- | --- | --- |
| **KOX Agent / Copilot** | 将 MCP、CLI、Skill 与工作流产品化为统一的对话入口与可观测 Runtime | [项目档案](https://zby-123-coder.github.io/projects/) |
| **CRM 智能协同平台** | 让合同、诊断、督导与智能客服在多租户、审批、审计边界内协作 | [项目档案](https://zby-123-coder.github.io/projects/) |
| **「小引」AI 陪学助教** | 用三层记忆、影子 Agent、多状态机与多 Lane Session 支撑长期、可续跑的陪伴式教学 | [项目档案](https://zby-123-coder.github.io/projects/) |
| **简历 Agent** | 以结构化事实层、Typst 与自动校验，将“改内容”与“改版式”解耦 | [项目档案](https://zby-123-coder.github.io/projects/) |

## How I work

- **模型提出建议，规则和人完成授权。** 高风险外部动作要有参数校验、限额、审批和审计，而不是让 Agent 静默执行。
- **把系统做成能解释的东西。** 一条结果应能回到它的上下文、检索证据、工具调用与状态变化。
- **把验证说清楚。** 源码检查、本地冒烟、评测结果和真实业务效果不是同一件事；没有验证过的结论就保留边界。

## Explore

- [个人作品集](https://zby-123-coder.github.io/)
- [项目档案](https://zby-123-coder.github.io/projects/)
- [工作随笔](https://zby-123-coder.github.io/blogs/)

---

*持续记录：如何让 AI 从一个会说话的界面，变成值得被交付的系统。*
