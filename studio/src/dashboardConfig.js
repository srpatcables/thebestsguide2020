export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f5634a090670fd2885c44b1',
                  title: 'Sanity Studio',
                  name: 'thebestsguide-2020-studio',
                  apiId: '2f2e8efa-090e-41a2-a8a3-177da73862db'
                },
                {
                  buildHookId: '5f5634a090670fd59d5c431c',
                  title: 'Blog Website',
                  name: 'thebestsguide-2020',
                  apiId: '7334e864-1f96-4675-8605-99de49ef43aa'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/srpatcables/thebestsguide2020',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://thebestsguide-2020.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
