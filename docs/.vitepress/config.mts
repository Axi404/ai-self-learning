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
      { text: '知识图谱', link: '/知识图谱' },
      { text: '科研技巧', link: '/科研技巧' }
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
        text: '知识图谱',
        link: '/知识图谱/',
        collapsed: true,
        items: [
          { text: '基础知识', link: '/知识图谱/基础知识' },
          { text: '基础技能', link: '/知识图谱/基础技能' },
          { text: '机器学习', link: '/知识图谱/机器学习' },
          { text: '深度学习', link: '/知识图谱/深度学习' },
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
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Axi404/ai-self-learning/' }
    ]
  }
})
