// .vuepress/config.js
const { mdEnhancePlugin } = require("vuepress-plugin-md-enhance");
const { defaultTheme } = require('@vuepress/theme-default')

module.exports = {
    lang: 'zh-CN',
    title: '小学奥数',
    theme: defaultTheme({
        // 在这里进行配置
        navbar: [
            // NavbarItem
            {
                text: '一年级',
                children: ['/02/a01/'],
            },
            {
                text: '二年级',
                children: ['/02/a01/'],
            },
            {
                text: '三年级',
                children: ['/02/a01/'],

            },
            {
                text: '四年级',
                children: ['/02/a01/'],
            },
            {
                text: '五年级',
                children: ['/02/a01/'],

            },
            {
                text: '六年级',
                children: ['/02/a01/'],
            },
        ],
        // 侧边栏对象
        //项目仓库的 URL
        repo: 'https://github.com/vastxie/Elementary-Mathematical-Olympiad',
        editLinkText: '在 GitHub 上编辑此页',
        docsRepo: 'https://github.com/vastxie/Elementary-Mathematical-Olympiad',
        docsBranch: 'main',
        docsDir: 'docs',
        editLinkPattern: ':repo/edit/:branch/:path',
    }),
    plugins: [
        mdEnhancePlugin({
            // 启用 TeX 支持
            tex: true,
            // 启用幻灯片
            presentation: true,
        }),

    ],
};