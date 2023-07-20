const delay = (time:number) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(1)
        }, time*1000)
    })

}

const getAllPosts = async () => {
    await delay(3)

    return new Array(10).fill(1).map((_,i)=>{
        return {
            title: `This is post ${i}`,
            slug: `this-is-post-${i}`,
            body: `This is post ${i} with the slug`,
        }
    })
}

export default getAllPosts;