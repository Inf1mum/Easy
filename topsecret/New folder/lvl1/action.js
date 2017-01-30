document.addEventListener("DOMContentLoaded", function(event) { 

   var flag = true;
   var countCut = 0;

  sImage.addEventListener("click", function (){

    countCut++;
    if(flag){
      sImage.classList.remove("secondCut");
      sImage.classList.add("firstCut");
      flag = false;
    }
    else{
      sImage.classList.remove("firstCut");
      sImage.classList.add("secondCut");
      flag = true;
    }
    if(countCut == 5){
       swal("Хорошая работа!", "Уровень 1 пройден!", "success");
    }
  }); 
});