import {NEWS_API_KEY} from "@env"

export const newsTrending = async () => {
    const trendingHeadlinesUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`
    await fetch(trendingHeadlinesUrl, {
        mode: 'GET',
    })
    .then(response =>{
        return response.json();
    })
}

export const newsByCategory = async () => {
    const CategoryHeadlinesUrl = `https://newsapi.org/v2/everything?q=apple&from=2022-08-15&to=2022-08-15&sortBy=popularity&apiKey=${NEWS_API_KEY}`
    fetch(CategoryHeadlinesUrl, {
        mode: 'GET',
    })
    .then(response =>{
        return response.json();
    }).then(data =>{
        console.log(data);
    })
}

export const newsByTopic = async () => {
    const TopicHeadlinesUrl = `https://newsapi.org/v2/everything?q=apple&from=2022-08-15&to=2022-08-15&sortBy=popularity&apiKey=${NEWS_API_KEY}`
    fetch(TopicHeadlinesUrl, {
        mode: 'GET',
    })
    .then(response =>{
        return response.json();
    }).then(data =>{
        console.log(data);
    })
}