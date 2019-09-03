function fechaAba(){
    var icon=document.getElementById("iconUp");
    var seta=document.getElementById("seta");

    icon.style="color: #146678; background-color:#F2F2F2; line-height: 18px;"

    if(seta.className.match("fa fa-sort-asc")){
        $("#iconUp").html("<i id='seta' class='fa fa-sort-desc' aria-hidden='true'></i>");

    }else{
        $("#iconUp").html("<i id='seta' class='fa fa-sort-asc' aria-hidden='true'></i>");
        document.getElementById("tab3").click();
    }
    

}

function voltarSetaInicial(){
    $("#iconUp").html("<i id='seta' class='fa fa-sort-asc' aria-hidden='true'></i>");
}