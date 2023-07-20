import Link from "next/link"
import  getAllPosts from "../../lib/cms"

export default async function Blog() {
  const posts = await getAllPosts()

  let n = new Array(10).fill(1).map((_,i)=>{
        return {
            title: `This is post ${i}`,
            slug: `this-is-post-${i}`,
            body: `This is post ${i} with the slug`,
        }
    })
  
//   let posts = [{
//     title: `This is post`,
//     slug: `this-is-post-`,
//     body: `This is  with the slug`,
// },{
//   title: `This is post`,
//   slug: `this-is-post-`,
//   body: `This is  with the slug`,
// }]
  
  // console.log(posts);
  
  return <div> 
    {posts.map((post,index) => {
    return (<Link href={`/blog/${post.slug}`} key={index}>
      <div >
        <h1>{post.title}</h1>
      </div>
    </Link>)
  })}
  
  </div>
}