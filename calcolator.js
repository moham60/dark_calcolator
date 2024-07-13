let calcolators = document.querySelector('.calcolator');
let btns=document.querySelectorAll("span");
let value=document.getElementById("value");
for(let  i=0;i<btns.length;i++)
{
    btns[i].addEventListener("click",function(){
        if(this.innerHTML=="=")
        {
            value.innerHTML=eval(value.innerHTML);
        }
        else  if (this.innerHTML == "Clear") {
            value.innerHTML = "";
        }
        else{
            value.innerHTML += this.innerHTML;
        }
    }
    )
}