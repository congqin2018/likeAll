document.documentElement.style.scrollBehavior = 'smooth';
const interval = 300;
let running = true;



// articles.forEach((article) => {
//     let likeButton = article.querySelector('div[data-testid="like"]');
//     if(likeButton) {
//         likeButton.scrollIntoView(false);
//         likeButton.click();
//     }
// });

// let i = articles.length;


let timerId = setInterval(() =>{
    if(!running) {
        clearInterval(timerId);
        return;
    }

    let timeLine = document.querySelector('div[aria-label="タイムライン: ホームタイムライン"]');
    let articles = timeLine.querySelectorAll('article');

    let firstLikeButton = null;
    articles.forEach((article) => {
        if(!firstLikeButton) {
            firstLikeButton = article.querySelector('div[data-testid="like"]');
        }
    })
    if(firstLikeButton) {
        firstLikeButton.scrollIntoView();
        firstLikeButton.click();
    } else {
        articles[articles.length-1].scrollIntoView()
    }
   
}, interval);
