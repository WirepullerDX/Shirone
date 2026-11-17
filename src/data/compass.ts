/**
 * 站点罗盘数据（本地数据源）。
 * 用途：src/pages/compass.astro → organisms/CompassSection → molecules/CompassTile。
 * 添加站点：往对应 Shelf.entries 追加一项；数组顺序即展示顺序。
 * - icon：Iconify 名（material-symbols:xxx）或图片 URL（http(s)/绝对路径）；
 *   省略时瓷砖显示 label 首字母 tonal 块（不自动抓取 favicon）。
 * - image：用户自定义图片 URL（http(s)/绝对路径），优先于 icon 渲染；
 *   加载失败自动降级为首字母块。
 */

/** 单条站点记录 */
export interface CompassEntry {
	/** 站点名（瓷砖标题） */
	label: string;
	/** 外链地址 */
	href: string;
	/** 一句话说明（瓷砖副行；省略则显示域名） */
	note?: string;
	/** 图标：Iconify 名或图片 URL；省略 = 首字母兜底 */
	icon?: string;
	/** 用户自定义图片（http(s)/绝对路径）：优先于 icon 渲染；省略则走 icon/首字母 */
	image?: string;
}

/** 分组（Shelf = 罗盘上的收纳格） */
export interface CompassShelf {
	/** 锚点 id（字母数字，作分组定位与跳转） */
	key: string;
	/** 分组名 */
	name: string;
	/** 分组图标（Iconify 名，SectionTitle 行首） */
	icon?: string;
	/** 分组副文案（标题下弱文本，可选） */
	blurb?: string;
	entries: CompassEntry[];
}

export const compassData: CompassShelf[] = [
	{
		key: "development",
		name: "开发",
		icon: "material-symbols:code-rounded",
		blurb: "写代码时离不开的站点",
		entries: [
			{
				label: "GitHub",
				href: "https://github.com",
				note: "全球最大的代码托管平台",
				icon: "fa7-brands:github",
			},
			{
				label: "MDN Web Docs",
				href: "https://developer.mozilla.org",
				note: "最权威的 Web 技术文档",
			},
			{
				label: "Astro",
				href: "https://astro.build",
				note: "内容驱动型网站的 Web 框架",
			},
			{
				label: "Svelte",
				href: "https://svelte.dev",
				note: "把组件编译成高效原生 JS 的框架",
			},
			{
				label: "Tailwind CSS",
				href: "https://tailwindcss.com",
				note: "一个功能强大且灵活的 CSS 框架",
			},
		],
	},
	{
		key: "projects",
		name: "项目",
		icon: "material-symbols:code-rounded",
		blurb: "好用的开源项目",
		entries: [
			{
				label: "Firefly",
				href: "https://github.com/CuteLeaf/Firefly",
				note: "清晰美观的 Astro 个人博客主题模板",
				icon: "/favicon/firefly-32.png",
			},
		],
	},
	{
		key: "design",
		name: "设计",
		icon: "material-symbols:palette-outline-rounded",
		blurb: "配色、图标与灵感来源",
		entries: [
			{
				label: "Iconify",
				href: "https://icon-sets.iconify.design",
				note: "海量开源图标集合搜索",
			},
			{
				label: "iconfont",
				href: "https://www.iconfont.cn",
				note: "阿里巴巴矢量图标库",
			},
		],
	},
	{
		key: "tools",
		name: "工具",
		icon: "material-symbols:build-outline-rounded",
		blurb: "顺手的在线小工具",
		entries: [
			{
				label: "TinyPNG",
				href: "https://tinypng.com",
				note: "在线压缩 PNG / JPEG 图片",
			},
			{
				label: "Squoosh",
				href: "https://squoosh.app",
				note: "Google 出品的图片压缩与格式转换",
			},
			{
				label: "Carbon",
				href: "https://carbon.now.sh",
				note: "把代码片段生成漂亮的图片",
			},
		],
	},
	{
		key: "resources",
		name: "资源",
		icon: "material-symbols:auto-stories-outline-rounded",
		blurb: "文档、教程与阅读",
		entries: [
			{
				label: "Firefly Docs",
				href: "https://docs-firefly.cuteleaf.cn",
				note: "Firefly 主题模板文档",
				icon: "https://docs-firefly.cuteleaf.cn/logo.png",
			},
		],
	},
];
