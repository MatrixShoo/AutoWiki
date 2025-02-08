import { defineConfig } from 'vitepress'
import VitePressPluginAutoNavSidebar from '@movk-repo/vitepress-plugin-auto-nav-sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "软件指南Wiki",
  description: "软件操作指南",

  //自动生成nav和sidebar
  vite: {
    plugins: [
      VitePressPluginAutoNavSidebar({
        documentRootPath:'/docs',
      })
    ]
  },
  //主题设置
  themeConfig: {
    logo: 'https://wiki-cdsoft.oss-cn-hangzhou.aliyuncs.com/wp-content/uploads/2024/01/cropped-android-chrome-512x512-2.png',
    //页面大纲
    outline:{
      level:[2,6],
      label:'页面导航'
    },
    darkModeSwitchLabel:'显示模式',
    //用于自定义深色模式开关标签，该标签仅在移动端视图中显示。
    lightModeSwitchTitle:'浅色模式',
    //用于自定义悬停时显示的浅色模式开关标题。
    darkModeSwitchTitle:'深色模式',
    //用于自定义悬停时显示的深色模式开关标题。
    sidebarMenuLabel:'菜单',
    //用于自定义侧边栏菜单标签，该标签仅在移动端视图中显示。
    returnToTopLabel:'回到顶部',
    //用于自定义返回顶部按钮的标签，该标签仅在移动端视图中显示。

    //文章底部添加在github上编辑的按钮
    editLink: {
      pattern: 'https://github.com/MatrixShoo/CDSoftWiki/edit/main/docs/:path',
      text: '在GitHub上编辑此文档'
    },
    //启用最后更新时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    //启用algolia搜索
    search: {
      provider: 'algolia',
      options: {
        appId: 'VNUQ9V1AA6',
        apiKey: '91d0b4cafedfffc8b6043fe056ee4609',
        indexName: 'cdsoftcn',
        locales: {
          zh: {
            placeholder: '搜索文档',
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                searchBox: {
                  resetButtonTitle: '清除查询条件',
                  resetButtonAriaLabel: '清除查询条件',
                  cancelButtonText: '取消',
                  cancelButtonAriaLabel: '取消'
                },
                startScreen: {
                  recentSearchesTitle: '搜索历史',
                  noRecentSearchesText: '没有搜索历史',
                  saveRecentSearchButtonTitle: '保存至搜索历史',
                  removeRecentSearchButtonTitle: '从搜索历史中移除',
                  favoriteSearchesTitle: '收藏',
                  removeFavoriteSearchButtonTitle: '从收藏中移除'
                },
                errorScreen: {
                  titleText: '无法获取结果',
                  helpText: '你可能需要检查你的网络连接'
                },
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                  searchByText: '搜索提供者'
                },
                noResultsScreen: {
                  noResultsText: '无法找到相关结果',
                  suggestedQueryText: '你可以尝试查询',
                  reportMissingResultsText: '你认为该查询应该有结果？',
                  reportMissingResultsLinkText: '点击反馈'
                }
              }
            }
          }
        }
      }
    },
    //页面底部添加前一篇和后一篇按钮
    docFooter: {
      prev: '前一篇',
      next: '后一篇'
    },
    //添加主页页脚
    footer: {
      message: '<a href="https://vitepress.dev/zh/" target="_blank">基于VitePress生成</a>',
      copyright: 'Copyright © 2024 <a href="https://cdsoftcn.com/" target="_blank">杭州成大经纬科技有限公司</a>'
    },
    // https://vitepress.dev/reference/default-theme-config
    //默认的nav和sidebar
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    
  },
  
  head: [
    [
      'script',
      {
        async: 'true',
        defer: 'true',
        src: 'http://123.60.71.32:40205/tracker.js',
        'data-website-id': 'clx1br3mx000clj4lhsrzhjwv'
      }
    ],
    //网站图标
    ['link', { rel: 'icon', href: 'https://wiki-cdsoft.oss-cn-hangzhou.aliyuncs.com/wp-content/uploads/2024/01/symbol.svg' }]
  ],
  sitemap: {
    hostname: 'https://wiki.cdsoftcn.com/'
  },
  //链接去除.html
  cleanUrls:true,
      //标记文本显示中文
  markdown: {
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    },
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true
    }
  },
})
