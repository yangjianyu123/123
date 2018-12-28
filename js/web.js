var header = document.querySelector('header');
var request = new XMLHttpRequest();
var requestURL = 'https://raw.githubusercontent.com/yangjianyu123/yangjianyu/master/web-json';
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var jsonObj = request.response;
    person(jsonObj);
    show(jsonObj);
  }
function person(jsonObj){
    var title = document.createElement('h1');
    title.textContent=jsonObj['titlename'];
    header.appendChild(title);
    } 
function show (jsonObj){
    var heroes = jsonObj['members'];
    for(var i = 0; i < heroes.length; i++)
    {   
        var myArticle = document.createElement('article');
        var image =document.createElement('img');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        myH2.textContent = heroes[i].name;
        image.src =heroes[i].imageurl;

        myPara1.textContent =heroes[i].content1;
        myPara2.textContent =heroes[i].content2;
        myPara3.textContent =heroes[i].content3;
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(image);
        header.appendChild(myArticle);
    }
    console.log(image.src);
}


