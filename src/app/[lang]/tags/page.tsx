// src/app/[lang]/tags/page.tsx
import { getAllContent } from '@/lib/posts'

export default async function TagsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  
  const result = await getAllContent(lang)
  const allTags = result.allTags || []
  const isTestData = result.isTestData || false
  
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">所有标签</h1>
      
      {!isTestData && allTags.length > 0 && (
        <div className="bg-green-50 border border-green-200 p-4 rounded mb-6">
          <p className="text-green-800 font-semibold">
            ✅ 标签系统运行正常！
          </p>
          <p className="text-green-700 text-sm mt-1">
            已自动从 {result.allContent?.length || 0} 篇文章中提取出 {allTags.length} 个标签
          </p>
        </div>
      )}
      
      {isTestData && (
        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded mb-6">
          <p className="text-yellow-800 font-semibold">
            ⚠️ 当前显示的是测试数据
          </p>
        </div>
      )}
      
      {allTags.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">暂无标签</p>
        </div>
      ) : (
        <div className="flex flex-wrap gap-3">
          {allTags.map(tag => (
            <a
              key={tag}
              href={`/${lang}/tags/${encodeURIComponent(tag)}`}
              className="px-4 py-2 bg-blue-100 hover:bg-blue-200 dark:bg-blue-900 dark:hover:bg-blue-800 rounded-full text-sm transition-colors"
            >
              #{tag}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}