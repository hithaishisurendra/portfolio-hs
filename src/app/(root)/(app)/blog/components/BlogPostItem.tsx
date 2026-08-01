'use client'

import type { IPost } from '@/types'
import formatDate from '@/utils/format-date'
import Link from 'next/link'
import React from 'react'

const BlogPostItem: React.FC<{ post: IPost }> = ({ post }) => {
  const href = post.metadata.projectLink || '/blog/' + post.slug

  return (
    <Link href={href} className="block bg-white/50 px-3 py-5 backdrop-blur dark:bg-black/80 md:px-5">
      <h3 className="text-lg md:text-xl">{post.metadata.title}</h3>
      <p className="text-sm opacity-60 dark:text-neutral-400">{formatDate(post.metadata.publishedAt)}</p>
    </Link>
  )
}

export default BlogPostItem
