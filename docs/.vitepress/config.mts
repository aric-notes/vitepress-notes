import { defineConfig } from 'vitepress'
import { enSidebar, zhSidebar } from './sidebar/index'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(__dirname, '../..')
dotenv.config({ path: path.resolve(projectRoot, '.env') })

export default defineConfig({
  base: process.env.VITEPRESS_BASE || '/',
  head: [['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }]],
  title: 'Aric Notes',
  description: 'Personal Notes',
  outDir: '../dist',
  locales: {
    root: {
      label: '简体中文',
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
          { text: '首页', link: '/' },
          { text: '组件', link: '/posts/components/index.md' },
          { text: 'Hooks', link: '/posts/hooks/index.md' },
          { text: 'Utils', link: '/posts/utils/index.md' },
          { text: '规范', link: '/posts/standard/index.md' },
          { text: '事故', link: '/posts/incidents/index.md' }
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
          message: '基于 MIT 许可发布',
          copyright: 'Copyright © 2019-present Aric'
        }
      }
    },
    en: {
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
          { text: 'Home', link: '/en/' },
          { text: 'Components', link: '/en/posts/components/index.md' },
          { text: 'Hooks', link: '/en/posts/hooks/index.md' },
          { text: 'Utils', link: '/en/posts/utils/index.md' },
          { text: 'Standard', link: '/en/posts/standard/index.md' },
          { text: 'Incidents', link: '/en/posts/incidents/index.md' }
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
    }
  }
})
