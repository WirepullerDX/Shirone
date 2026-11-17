import type { AnnouncementConfig } from "@/types/announcementConfig";
import { withUserConfig } from "../utils/config-overlay.ts";

/**
 * 公告栏配置
 * 组件显示由 sidebarConfig 统一控制
 */
export const announcementConfig: AnnouncementConfig = withUserConfig(
	"announcement",
	{
		title: "关于这里", // 公告标题，填空使用 i18n 字符串 Key.announcement
		content:
			"这里记录技术实践中的探索与踩坑，也写点别的——内容不设限，慢慢更新。", // 公告内容
		closable: true, // 允许用户关闭公告
		link: {
			enable: true, // 启用链接
			text: "关于本站", // 链接文本
			url: "/about/", // 链接 URL
			external: false, // 外部链接
		},
	},
);
