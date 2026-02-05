export const zhSidebar = {
  '/posts/components/': [
    {
      text: '组件',
      items: [
        { text: '介绍', link: '/posts/components/index.md' },
        {
          text: '基础组件',
          collapsed: false,
          items: [
            { text: '按钮组件', link: '/posts/components/basic/button.md' },
            { text: '表单组件', link: '/posts/components/basic/form.md' }
          ]
        },
        {
          text: '业务组件',
          collapsed: false,
          items: [
            { text: '用户卡片', link: '/posts/components/business/user-card.md' },
            { text: '数据表格', link: '/posts/components/business/data-table.md' }
          ]
        }
      ]
    }
  ],
  '/posts/hooks/': [
    {
      text: 'Hooks',
      items: [
        { text: '介绍', link: '/posts/hooks/index.md' }
      ]
    }
  ],
  '/posts/utils/': [
    {
      text: 'Utils',
      items: [
        { text: '介绍', link: '/posts/utils/index.md' }
      ]
    }
  ],
  '/posts/standard/': [
    {
      text: '规范',
      items: [
        { text: '介绍', link: '/posts/standard/index.md' },
        {
          text: 'React',
          collapsed: false,
          items: []
        },
        {
          text: '最佳实践',
          collapsed: false,
          items: []
        },
        {
          text: 'GitHub',
          collapsed: false,
          items: []
        }
      ]
    }
  ],
  '/posts/incidents/': [
    {
      text: '事故分析',
      items: [
        { text: '介绍', link: '/posts/incidents/index.md' }
      ]
    }
  ]
}
