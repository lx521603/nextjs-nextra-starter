// src/lib/posts.ts
import { getPageMap } from 'nextra/page-map'

export async function getAllContent(lang: string) {
  try {
    const pageMap = await getPageMap(lang)
    console.log('=== 详细调试信息 ===')
    
    const allContent = []
    const allTags = []
    
    // 深度遍历 pageMap
    function traverse(node: any, path: string = '') {
      if (!node) return
      
      // 调试：打印节点详细信息
      console.log('节点:', node.name || 'unnamed', '类型:', node.kind, '路径:', path)
      console.log('节点完整信息:', node)
      
      // 检查是否有 frontmatter
      if (node.frontMatter) {
        console.log('找到 frontMatter:', node.frontMatter)
        
        // 修复标题显示问题：处理 React 组件和字符串
        let title = '未命名'
        if (typeof node.title === 'string') {
          title = node.title
        } else if (node.name) {
          title = node.name
        } else if (node.frontMatter.title && typeof node.frontMatter.title === 'string') {
          title = node.frontMatter.title
        }
        
        const content = {
          slug: node.route || path,
          title: title,
          tags: node.frontMatter.tags || []
        }
        
        allContent.push(content)
        
        if (content.tags.length > 0) {
          allTags.push(...content.tags)
          console.log(`✅ 找到带标签文章: ${content.title}`, content.tags)
        } else {
          console.log(`❌ 文章无标签: ${content.title}`, node.frontMatter)
        }
      }
      
      // 递归遍历子节点
      if (node.children && Array.isArray(node.children)) {
        for (const child of node.children) {
          const newPath = path ? `${path}/${child.name || ''}` : (child.name || '')
          traverse(child, newPath)
        }
      }
    }
    
    // 遍历所有根节点
    for (const node of pageMap) {
      traverse(node)
    }
    
    const uniqueTags = [...new Set(allTags)]
    console.log('=== 最终结果 ===')
    console.log('找到文章数:', allContent.length)
    console.log('所有文章:', allContent)
    console.log('最终标签:', uniqueTags)
    
    // 如果没有找到真实标签，返回测试数据
    if (uniqueTags.length === 0) {
      console.log('⚠️ 未找到真实标签，返回测试数据')
      return {
        allContent: [
          {
            slug: 'docs/newfdy',
            title: '新品上市',
            tags: ['新品', '不脱妆粉底液', '粉底液']
          }
        ],
        allTags: ['新品', '不脱妆粉底液', '粉底液', '测试数据'],
        isTestData: true
      }
    }
    
    return {
      allContent,
      allTags: uniqueTags,
      isTestData: false
    }
    
  } catch (error) {
    console.error('获取内容失败:', error)
    return {
      allContent: [],
      allTags: ['错误', '测试'],
      isTestData: true
    }
  }
}