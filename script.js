let docBody = document.getElementById("myPortfolio");
let progressBar = document.querySelector(".top-progressbar") 
let rootElement = document.documentElement;
let hamburger = document.querySelector(".hamburger");
let ulwrapper = document.querySelector(".ulwrapper");
let oldwidth = 0;



const progressbarOnscroll = () =>{
    let distance = -document.getElementById("myPortfolio").getBoundingClientRect().top;
    // console.log(distance)
    let progressbarWidth = (distance / (docBody.getBoundingClientRect().height - rootElement.clientHeight)) * 100;
    // console.log(docBody.getBoundingClientRect().height);
    // console.log(progressbarWidth); 
    // console.log(Math.round(progressbarWidth));
    let pageHeight = Math.round(progressbarWidth);
    if (pageHeight-oldwidth >= 5 || pageHeight-oldwidth <=-5){
        colorchange();
        oldwidth=pageHeight;
    }
    progressBar.style.width = pageHeight + "%"
}

const colorchange = () => {
    // const randomColor1 = parseInt((Math.random()*16777215).toString(16)); 
    // const randomColor2 = parseInt((Math.random()*16777215).toString(16)); 
    const randomColor1 = parseInt((Math.random()*16777215)).toString(16);
    const randomColor2 = parseInt((Math.random()*16777215)).toString(16);
    // console.log(randomColor1);

    // console.log(randomColor1, randomColor2);
    // 16777215 is the decimal representaion of ffffff
    // toString is used to convert it again to hexdecimal
    // progressBar.style.backgroundColor = "#" + randomColor;
    progressBar.style.background = 'linear-gradient('
    + "to right" + ', ' + "#" + randomColor1 + ', ' + "#" + randomColor2 + ')';
    console.log(progressBar.style.background);
}

addEventListener("scroll" , () =>{
    progressbarOnscroll();
});

hamburger.addEventListener("click" , () =>{
    ulwrapper.classList.toggle("show");

})
