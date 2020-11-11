

// insert line 4 (""""""window.onscroll = function() {myFunction2()};"""""""") into your custom.js 
//window.onscroll = function() {myFunction2()};

function myFunction2() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("content").innerHTML = "v" +winScroll +"px";
}




function IndicatorSelection()  
{  
    var checkboxes = document.getElementsByName("toggle-indicators"); 
    for(var i = 0; i < checkboxes.length; i++)  
    {  
        if(checkboxes[i].checked)
        document.getElementById("indicatorsID").style.opacity = "1"     
    else    
    document.getElementById("indicatorsID").style.opacity = "0"
    }  
}  
