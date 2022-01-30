var target = localStorage.getItem("target");
var totaltime = localStorage.getItem("totaltime");
// alert(target);
$("#target_planet").attr("src", "images/"+target+".png");
$("#planet_name").text(target);
$("#time").text("Total time: "+totaltime);
