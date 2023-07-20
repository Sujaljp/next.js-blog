'use client'

export default function PostError({error}){
    return <div>OOps! there is error!
        {error.message}
    </div>
}