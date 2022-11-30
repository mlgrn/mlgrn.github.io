import { Music } from '../typings'

export const fetchMusic = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getMusic`)

    const data = await res.json()
    const music: Music[] = data.music

    return music
}
