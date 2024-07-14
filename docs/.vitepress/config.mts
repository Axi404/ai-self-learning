import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';


// https://vitepress.dev/reference/site-config
export default defineConfig({
  markdown: {
    image: {
      lazyLoading: true
    },
    math: true
  },
  vite: { 
    optimizeDeps: {
      exclude: [ 
        '@nolebase/vitepress-plugin-enhanced-readabilities/client', 
      ], 
    },
    ssr: { 
      noExternal: [ 
        // 如果还有别的依赖需要添加的话，并排填写和配置到这里即可
        '@nolebase/vitepress-plugin-enhanced-readabilities', 
      ], 
    }, 
  }, 
  lang: 'zh-CN',
  base: '/',
  // base: '/ai-self-learning/',
  title: "AIDIY",
  description: "AIDIY，人工智能自学指南。",
  themeConfig: {
    sidebarMenuLabel:'目录', 
    returnToTopLabel:'返回顶部', 
    lastUpdated: {
      text: '上次更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      },
    },
    footer: { 
      message: 'Released under the MIT License.', 
      copyright: 'Copyright © 2023-2024present AXi', 
    }, 
    docFooter: { 
      prev: '上一页', 
      next: '下一页', 
    }, 
    editLink: { 
      pattern: 'https://github.com/SurviveXJTU/SurviveXJTU.github.io/edit/main/docs/:path', // 改成自己的仓库
      text: '在GitHub编辑本页'
    }, 
    outline: {
      level: 'deep', // 显示2-6级标题
      label: '目录' // 文字显示
    },
    search: { 
      provider: 'local'
    }, 
    logo: {
      src: '/logo.svg',
      alt: 'Logo: AIDIY',
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '前言', link: '/前言' },
      { text: '贡献指南', link: '/前言/贡献指南' },
      { text: '常识', link: '/常识' },
      { text: '学习路线', link: '/学习路线' },
      { text: '科研技巧', link: '/科研技巧' },
      { text: '领域入门', link: '/领域入门' }
    ],

    sidebar: [
      {
        text: '前言',
        link: '/前言/',
        collapsed: true,
        items: [
          { text: '贡献指南', link: '/前言/贡献指南' },
        ]
      },
      {
        text: '常识',
        link: '/常识/',
        collapsed: true,
        items: [
          { text: '顶刊与顶会', link: '/常识/顶刊与顶会' },
          { text: '课题组', link: '/常识/课题组' },
          { text: '名词对照表', link: '/常识/名词对照表' },
        ]
      },
      {
        text: '学习路线',
        link: '/学习路线/',
        collapsed: true,
        items: [
          {
            text: '基础知识',
            link: '/学习路线/基础知识/',
            collapsed: true,
            items: [
              { text: '线性代数', link: '/学习路线/基础知识/线性代数' },
              { text: '概率论', link: '/学习路线/基础知识/概率论' },
              { text: 'ChatGPT', link: '/学习路线/基础知识/ChatGPT' },
              { text: '编程', link: '/学习路线/基础知识/编程' },
            ]
          },
          { text: '基础技能', link: '/学习路线/基础技能' },
          { text: '机器学习', link: '/学习路线/机器学习' },
          { text: '深度学习', link: '/学习路线/深度学习' },
        ]
      },
      {
        text: '科研技巧',
        link: '/科研技巧/',
        collapsed: true,
        items: [
          { text: '思维模式', link: '/科研技巧/思维模式' },
          { text: 'Idea选择', link: '/科研技巧/Idea选择' },
          { text: '论文阅读', link: '/科研技巧/论文阅读' },
        ]
      },
      {
        text: '领域入门',
        link: '/领域入门/',
        collapsed: true,
        items: [
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Axi404/ai-self-learning/' }
    ]
  }
})
