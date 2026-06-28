window.addEventListener("scroll",function(){

const nav=document.querySelector("nav");

if(window.scrollY>50)
{
nav.style.boxShadow="0 5px 20px rgba(0,0,0,0.4)";
}
else
{
nav.style.boxShadow="none";
}

});