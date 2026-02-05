import { defineConfig } from 'vitepress'
import { enSidebar, zhSidebar } from './sidebar/index'

export default defineConfig({
  head: [['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }]],
  title: 'Aric Notes',
  description: 'Personal Notes',
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: 'Aric Notes',
      description: 'Personal Development Notes',
      themeConfig: {
        logo: '/favicon.svg',
        lastUpdated: {
          text: 'Last updated'
        },
        docFooter: {
          prev: 'Previous',
          next: 'Next'
        },
        outline: {
          label: 'On this page',
          level: [2, 3]
        },
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Components', link: '/posts/components/index.md' },
          { text: 'Hooks', link: '/posts/hooks/index.md' },
          { text: 'Utils', link: '/posts/utils/index.md' },
          { text: 'Standard', link: '/posts/standard/index.md' },
          { text: 'Incidents', link: '/posts/incidents/index.md' }
        ],
        sidebar: enSidebar,
        search: {
          provider: 'local',
          options: {
            translations: {
              button: {
                buttonText: 'Search',
                buttonAriaLabel: 'Search documentation'
              },
              modal: {
                noResultsText: 'No results for',
                resetButtonTitle: 'Reset search',
                footer: {
                  selectText: 'to select',
                  navigateText: 'to navigate',
                  closeText: 'to close'
                }
              }
            }
          }
        },
        socialLinks: [{ icon: 'github', link: 'https://github.com/afeiship' }],
        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2019-present Aric'
        }
      }
    },
    zh: {
      label: '中文',
      lang: 'zh-CN',
      title: 'Aric Notes',
      description: '个人笔记',
      themeConfig: {
        logo: '/favicon.svg',
        lastUpdated: {
          text: '更新时间'
        },
        docFooter: {
          prev: '上一页',
          next: '下一页'
        },
        outline: {
          label: '大纲',
          level: [2, 3]
        },
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '组件', link: '/zh/posts/components/index.md' },
          { text: 'Hooks', link: '/zh/posts/hooks/index.md' },
          { text: 'Utils', link: '/zh/posts/utils/index.md' },
          { text: '规范', link: '/zh/posts/standard/index.md' },
          { text: '事故', link: '/zh/posts/incidents/index.md' }
        ],
        sidebar: zhSidebar,
        search: {
          provider: 'local',
          options: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        },
        socialLinks: [{ icon: 'github', link: 'https://github.com/afeiship' }],
        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2019-present Aric'
        }
      }
    }
  }
})
