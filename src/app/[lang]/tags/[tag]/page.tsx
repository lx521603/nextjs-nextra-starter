// src/app/[lang]/tags/[tag]/page.tsx
import { getAllContent } from '@/lib/posts'

export default async function TagPage({ 
  params 
}: { 
  params: Promise<{ lang: string; tag: string }> 
}) {
  const { lang, tag } = await params
  const decodedTag = decodeURIComponent(tag)
  
  const { allContent } = await getAllContent(lang)
  const filteredPosts = allContent.filter(post => 
    post.tags.includes(decodedTag)
  )
  
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">
        标签: <span className="text-blue-600">#{decodedTag}</span>
      </h1>
      
      {filteredPosts.length === 0 ? (
        <p className="text-gray-500">该标签下暂无内容</p>
      ) : (
        <div className="space-y-6">
          {filteredPosts.map(post => (
            <article key={post.slug} className="border-b pb-6">
              <h2 className="text-xl font-semibold mb-2">
                <a 
                  href={`/${lang}/${post.slug}`}
                  className="hover:text-blue-600"
                >
                  {post.title}
                </a>
              </h2>
              <div className="flex flex-wrap gap-2 mt-2">
                {post.tags.map((t: string) => (
                  <a
                    key={t}
                    href={`/${lang}/tags/${encodeURIComponent(t)}`}
                    className="px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded text-sm"
                  >
                    #{t}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}