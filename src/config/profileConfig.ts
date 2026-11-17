import type { ProfileConfig } from "@/types/config";
import { withUserConfig } from "../utils/config-overlay.ts";

/**
 * 博主资料：头像 / 名称 / 简介 / 社交链接（侧栏 Profile 卡片、页脚、RSS 作者等消费）。
 * 类型见 src/types/config.ts。
 */
export const profileConfig: ProfileConfig = withUserConfig("profile", {
	avatar: "assets/images/avatar.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "阿杰",
	bio: "自托管 · 前后端 · AI 工作流，把服务跑在自己手里。",
	links: [
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/WirepullerDX",
		},
		{
			name: "Email",
			icon: "fa7-solid:envelope",
			url: "mailto:2744332103@qq.com",
		},
		{
			name: "RSS",
			icon: "fa7-solid:rss",
			url: "/rss/",
		},
		{
			name: "Atom",
			icon: "fa7-solid:atom",
			url: "/atom/",
		},
	],
});
