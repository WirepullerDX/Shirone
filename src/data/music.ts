import type { TrackDescriptor } from "@/types/musicConfig";

/**
 * 侧栏音乐本地曲目数据源。
 * 遵循「零额外负担」原则：配置与数据解耦，此处专用于管理本地曲目列表。
 *
 * 添加曲目：在 musicTracks 中追加一项即可：
 * - id: 唯一标识
 * - title: 曲目标题
 * - artist: 艺术家（可选）
 * - cover: 封面图地址（可选；推荐相对 /src，亦支持 /public 或绝对 URL）
 * - source: 音频文件地址（相对 /public 或绝对 URL）
 * - duration: 曲目时长（秒，可选）
 */
export const musicTracks: readonly TrackDescriptor[] = [
	{
		id: "yuesheng-jin-xindeng-ming",
		title: "月声尽，心灯明",
		artist: "鸣潮先约电台 / jixwang / Cassie Wei",
		cover: "assets/images/music/yuesheng-jin-xindeng-ming.webp",
		source: "/assets/music/yuesheng-jin-xindeng-ming.mp3",
	},
	{
		id: "yuanhangxing-de-gaobie",
		title: "远航星的告别",
		artist: "鸣潮先约电台 / jixwang / Tarokiki / Emi Evans",
		cover: "assets/images/music/yuanhangxing-de-gaobie.webp",
		source: "/assets/music/yuanhangxing-de-gaobie.mp3",
	},
];
