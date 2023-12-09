import { getBandara } from "./page"
export default async function sitemap() {
    const b = await getBandara()
    let bandaraFlight = [
        {
            url: 'https://flight-schedule-three.vercel.app/',
            lastModified: new Date(),
            priority: 1,
        }
    ]
  
    await Promise.all(
        b.map( async bandara=> {
            // console.log(bandara.code)
            const url = {
                url: bandara.url,
                lastModified: new Date(),
            }
            bandaraFlight.push(url)
        })
    )
    return bandaraFlight
}