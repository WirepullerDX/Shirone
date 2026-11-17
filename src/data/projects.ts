/**
 * 项目页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/projectsConfig.ts 控制。
 */
import type { ProjectItem } from "@/types/projectsConfig";

export const projectsData: ProjectItem[] = [
	{
		key: "ayaka-meme-pack",
		title: "神里绫华·花时来信",
		summary:
			"神里绫华（花时来信皮肤）VTuber 风格动态表情包，包含 190 个 GIF、18 个分类。",
		category: "media",
		phase: "shipped",
		technologies: ["Genshin Impact", "GIF", "VTuber"],
		cover: "/assets/projects/ayaka-meme-pack.webp",
		repository: "https://github.com/WirepullerDX/ayaka-meme-pack",
		year: "2026",
	},
];

/** 获取所有项目数据列表 */
export function getProjectsList(): ProjectItem[] {
	return projectsData;
}
