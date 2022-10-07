// Varriables
const generalBtn = document.getElementById('general');
const businessBtn = document.getElementById('business');
const sportBtn = document.getElementById('sport');
const technologyBtn = document.getElementById('technology');
const searchBtn = document.getElementById('searchBtn');

const newsQuery = document.getElementById('newsQuery');
const newsType = document.getElementById('newsType');
const newsdetails = document.getElementById('newsdetails');

// Array
var newsDataArr = [];

// APi
const API_KEY = "eedf352019d44e7b878e0542cbc6e948";
const HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?country=ng&apiKey=";
const GENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=";
const BUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=";
const SPORT_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=sport&apiKey=";
const TECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=";
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";

window.onload = function() {
    newsType.innerHTML = "<h4>Headlines</h4>";
    fetchHeadlinesNews();
};

generalBtn.addEventListener("click", function(){
    newsType.innerHTML = "<h4>General</h4>";
    fetchGeneralNews();
});

businessBtn.addEventListener("click", function(){
    newsType.innerHTML = "<h4>Business</h4>";
    fetchBusinessNews();
});

sportBtn.addEventListener("click", function(){
    newsType.innerHTML = "<h4>Sport</h4>";
    fetchSportNews();
});

technologyBtn.addEventListener("click", function(){
    newsType.innerHTML = "<h4>Technology</h4>";
    fetchTechnologyNews();
});

searchBtn.addEventListener("click", function(){
    newsType.innerHTML = "<h4>Search : "+newsQuery.value+"</h4>";
    fetchQueryNews();
});

const fetchHeadlinesNews = async () => {
    const response = await fetch(HEADLINES_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300) {
        const myjson = await response.json();
        newsDataArr = myjson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
    }

    displayNews();
}

const fetchGeneralNews = async () => {
    const response = await fetch(GENERAL_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300) {
        const myjson = await response.json();
        newsDataArr = myjson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
    }

    displayNews();
}

const fetchBusinessNews = async () => {
    const response = await fetch(BUSINESS_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300) {
        const myjson = await response.json();
        newsDataArr = myjson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
    }

    displayNews();
}

const fetchSportNews = async () => {
    const response = await fetch(SPORT_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300) {
        const myjson = await response.json();
        console.log(myjson);
        newsDataArr = myjson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
    }

    displayNews();
}

const fetchTechnologyNews = async () => {
    const response = await fetch(TECHNOLOGY_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300) {
        const myjson = await response.json();
        newsDataArr = myjson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
    }

    displayNews();
}

const fetchQueryNews = async () => {

    if(newsQuery.value == null)
        return;

    const response = await fetch(SEARCH_NEWS+encodeURIComponent(newsQuery.value)+"&apikey="+API_KEY);
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300) {
        const myjson = await response.json();
        newsDataArr = myjson.articles;
    } else {
        // errors handle
        console.log(response.status, response.statusText);
    }

    displayNews();
}

function displayNews() {

    newsdetails.innerHTML = "";

    if(newsDataArr.length == 0) {
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    newsDataArr.forEach(news => {
        
        var date = news.publishedAt.split("T");

        var col = document.createElement('div');
        col.className="col-sm-12 col-md-4 col-lg-3 p-2 card";

        var card = document.createElement('div');
        card.className= "p-2";

        var image = document.createElement('img');
        image.setAttribute("height", "matchparnt");
        image.setAttribute("width", "100%");
        image.src=news.urlToImage;

        var cardBody = document.createElement('div');

        var newsHeading = document.createElement('h5');
        newsHeading.className = "card-title";
        newsHeading.innerHTML = news.title;


        var dateHeading = document.createElement('h6');
        dateHeading.className = "text-primary";
        dateHeading.innerHTML = date[0];

        var description = document.createElement('p');
        description.className="text-muted";
        description.innerHTML = news.description;

        var link = document.createElement('a');
        link.className="btn btn-dark";
        link.setAttribute("target", "_blank");
        link.href = news.url;
        link.innerHTML="Read more";

        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(description);
        cardBody.appendChild(link);
        
        card.appendChild(image);
        card.appendChild(cardBody);

        col.appendChild(card);

        newsdetails.appendChild(col);
    });
    
}