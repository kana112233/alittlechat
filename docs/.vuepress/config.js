module.exports = {
  title: 'a little chat',
  description: 'A little chati',
  base: '/alittlechat/',
  themeConfig: {
    nav: require('./nav/zh'),
    sidebar: {
      '/guide/': getGuideSidebar('介绍', '深入'),
      '/start/': getGuideSidebar('步骤1', '步骤2'),
    },
    lastUpdated: 'Last Updated', 
    repo: 'kana112233/alittlechat',
     // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！'
  }

}

function getGuideSidebar (groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
        'getting-started',
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        'back-end',
      ]
    }
  ]
}

