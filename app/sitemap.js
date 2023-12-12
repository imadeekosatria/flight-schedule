import { getBandara } from "./page"
export default async function sitemap() {
    const b = await getBandara()
    const baseUrl = 'https://flight-schedule-three.vercel.app/'
    let bandaraFlight = [
        {
            url: baseUrl,
            lastModified: new Date(),
            priority: 1,
        }
    ]
  
    await Promise.all(
        b.map( async bandara=> {
            // console.log(bandara.code)
            const url = {
                url: baseUrl+`${bandara.code}`,
                lastModified: new Date(),
            }
            bandaraFlight.push(url)
        })
    )
    return bandaraFlight
}