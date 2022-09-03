const loadCategory = async() => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.data);
    displayCategory(data.data);
    
}
const displayCategory=(news =>{
    const newsContainer = document.getElementById('news-container');

    
    news.news_category.forEach(news_category => {
        console.log(news_category);
        const newsDiv = document.createElement('li');
        newsDiv.classList.add('li');
        newsDiv.innerHTML=`
        <a class=" container text-decoration-none text-black fs-5 fw-bold" href ="">${news_category.category_name}</a>
        <hr>
        `;
        newsContainer.appendChild(newsDiv)
    });
})
        // const displayAllNews = () =>{
        // const showAll = document.getElementById('show-all-news.length')
        // const showNews = document.getElementById('show-all-news')
        // for(const show of showAll.length){
        
        // }

loadCategory();