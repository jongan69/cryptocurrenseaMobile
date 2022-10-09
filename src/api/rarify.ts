import { RARIFY_API_KEY } from "@env"

type T = Awaited<ReturnType<typeof rarifyGetTrending>>;


interface TrendingList {
    data: [{
        id: string,
        type: string,
        attributes: {
            address: string;
            name: string;
            network: string;
            primary_interface: string;
            tokens: number;
            unique_owners: number;
        }[],
    },]
}

export const rarifyGetTrending = async () => {
    const trendingUrl = "https://api.rarify.tech/data/contracts?insights_trends.period=90d&include=insights_trends&sort=-insights_trends.volume_change_percent"
    try {
        const trending: void | [] = await fetch(trendingUrl, {
            headers: {
                Authorization: `BEARER ${RARIFY_API_KEY}`
            }
        }).then((res) => res.json())
            .then((data: TrendingList) => {
                console.warn('data', data)
                // return trending
            })
            return trending
    } catch (error) {
        console.warn('Something happened')
        return null
    }
}

export const rarifyGetTopRanked = async () => {
    const topRatedUrl = "https://api.rarify.tech/data/contracts?include=insights&sort=-insights.unique_buyers"
    fetch(topRatedUrl, {
        headers: {
            Authorization: `BEARER ${RARIFY_API_KEY}`
        }
    })
        .then(response => {
            return response.json();
        }).then(data => {
            console.log(data);
        })
}

export const rarifyGetSmartFloorPrice = async (network: string, contract: string) => {
    const smartFloorUrl = `https://api.rarify.tech/data/contracts/${network}:${contract}/smart-floor-price`
    fetch(smartFloorUrl, {
        headers: {
            Authorization: `BEARER ${RARIFY_API_KEY}`
        }
    })
        .then(response => {
            return response.json();
        }).then(data => {
            console.log(data);
        })
}

