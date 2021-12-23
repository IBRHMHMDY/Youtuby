$(document).ready(function (){
    $("#btnShow").on("click", function (){
        read();
    });

    $(".reply").click(function(){
        $(this).parents("div.row").next("div.card").toggle();
    });
});

function read(){
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnShow = document.getElementById("btnShow");

    if(dots.style.display === "none"){
        dots.style.display = "inline";
        btnShow.innerHTML = "عرض المزيد";
        moreText.style.display = "none";
    }else{
        dots.style.display = "none";
        btnShow.innerHTML = "عرض أقل";
        moreText.style.display = "inline";
    }
}
