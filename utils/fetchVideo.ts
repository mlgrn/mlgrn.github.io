import { Video } from '../typings'

export const fetchVideo = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getVideo`)

    const data = await res.json()
    const video: Video[] = data.video

    return video
}
