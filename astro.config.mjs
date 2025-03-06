// @ts-check
import starlight from '@astrojs/starlight';
import {defineConfig} from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site : 'https://aidiy.icu/',
    base : '/',
    integrations : [
        starlight({
            components : {
                // 重写默认的 `SocialIcons` 组件。
                Footer : './src/components/Footer.astro',
            },
            title : 'AIDIY',
            tableOfContents : {
                minHeadingLevel : 2,
                maxHeadingLevel : 5
            },
            social : {
                github : 'https://github.com/Axi404/ai-self-learning',
            },
            editLink : {
                baseUrl : 'https://github.com/Axi404/ai-self-learning/edit/main/',
            },
            logo : {
                src : './src/assets/logo.png',
            },
            favicon : '/favicon.ico',
            sidebar : [
                {
                    label : '写在一切之前',
                    items : [
                        {label : '关于本书', slug : '前言/前言'},
                        {label : '版权声明', slug : '前言/版权声明'},
                    ],
                },
                {
                    label : '贡献指南',
                    items : [
                        {label : '基本配置与部署', slug : '贡献指南/基本配置'},
                        {label : '撰写文档', slug : '贡献指南/撰写文档'},
                        {label : '提交 Pull Request', slug : '贡献指南/提交贡献'},
                        {label : '提交 Issue', slug : '贡献指南/提交需求'},
                    ],
                },
                {
                    label : '基础知识',
                    items : [
                        {label : '介绍', slug : '基础知识/介绍'},
                        {label : '课题组', slug : '基础知识/课题组'},
                        {label : '顶刊与顶会', slug : '基础知识/顶刊与顶会'},
                        {label : '名词对照表', slug : '基础知识/名词对照表'},
                    ],
                },
                {
                    label : '学习路线',
                    items : [
                        {label : '介绍', slug : '学习路线/介绍'},
                        {
                            label : '基础知识',
                            collapsed : true,
                            items : [
                                {label : '介绍', slug : '学习路线/基础知识/介绍'},
                                {label : '线性代数', slug : '学习路线/基础知识/线性代数'},
                                {label : '概率论', slug : '学习路线/基础知识/概率论'},
                                {label : '编程', slug : '学习路线/基础知识/编程'},
                                {label : '大模型使用', slug : '学习路线/基础知识/大模型使用'},
                            ]
                        },
                        {
                            label : '基础技能',
                            collapsed : true,
                            items : [
                                {label : '介绍', slug : '学习路线/基础技能/介绍'},
                                {label : 'Markdown', slug : '学习路线/基础技能/文档'},
                                {label : 'LaTeX', slug : '学习路线/基础技能/排版系统'},
                                {label : 'Linux', slug : '学习路线/基础技能/操作系统'},
                                {label : '远程连接', slug : '学习路线/基础技能/远程连接'},
                            ]
                        },
                        {label : '机器学习', slug : '学习路线/机器学习'},
                        {label : '深度学习', slug : '学习路线/深度学习'},
                    ],
                },
                {
                    label : '科研技巧',
                    items : [
                        {label : '介绍', slug : '科研技巧/介绍'},
                        {label : '思维模式', slug : '科研技巧/思维模式'},
                        {label : 'Idea 选择', slug : '科研技巧/方法选择'},
                        {label : '论文阅读', slug : '科研技巧/论文阅读'},
                    ]
                },
                {
                    label : '领域精通',
                    items : [
                        {label : '介绍', slug : '领域精通/介绍'},
                    ]
                },
            ],
        }),
    ],
});
