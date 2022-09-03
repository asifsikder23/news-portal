const loadCategory = async() => {
    const url = `https://openapi.programming-hero.com/api/news/category/01`
    const res = await fetch(url);
    const data = await res.json();
    displayNews(data);
}
const displayNews = allNews =>{
    const newContainer = document.getElementById('news-container');
    allNews.forEach(news => {
        newsDiv = document.createElement('div');
        newsDiv.classList.add ('card');
        newsDiv.innerHTML =`
        
        `
    });
}

loadCategory('');