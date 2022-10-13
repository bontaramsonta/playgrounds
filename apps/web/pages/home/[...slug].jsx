import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Post = () => {
  useEffect(()=>{
    console.log('[load]')
  })
  const router = useRouter()
  const { slug } = router.query

  return <p>Post: {slug.join('/')}</p>
}

export default Post