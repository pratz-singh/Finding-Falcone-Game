var dropdown1 = $("#dropdown11");
var dropdown2 = $("#dropdown21");
var dropdown3 = $("#dropdown31");
var dropdown4 = $("#dropdown41");
var radio1 = $("#html1");
var radio2 = $("#html2");
var radio3 = $("#html3");
var radio4 = $("#html4");
var planet1;
var planet2;
var planet3;
var planet4;
let planet_names = [];
let vehicle_names = [];
var q1 = 0;
var q2 = 0;
var q3 = 0;
var x, y, a, b;
var j,k,l,m;
let totaltime=0;


$.getJSON('https://findfalcone.herokuapp.com/planets', function (data) {
    $.each(data, function (key, entry) {
      dropdown1.append($('<option></option>').attr('value', entry.distance).text(entry.name));
    })
  });

function myFunction1() {
  planet1 = dropdown11.options[dropdown11.selectedIndex].text;
  $("#image1").attr("src", "images/"+planet1+".png");
      $.getJSON('https://findfalcone.herokuapp.com/vehicles', function (data) {
        x = document.getElementById("dropdown11").value;
        $("#dist1").text("Distance: "+x);
        $(radio1).empty();
        $.each(data, function (key, entry) {
            if(x<=entry.max_distance){
            radio1.append(
              $('<input>').prop({
                type: 'radio',
                name: 'vehicle1',
                value: entry.name,
                "speed": entry.speed,
                quantity: entry.total_no
              })
            ).append(
              $('<label>').prop({
                for: entry.name
              }).html(entry.name+' - '+entry.total_no)
            ).append('<img src="images/'+entry.name+'.png" width="60px" height="60px" style = "margin-left:0px">').append(
              $('<br>')
            );
            }
          })
      });
     }

function myFunction2() {
  planet2 = dropdown21.options[dropdown21.selectedIndex].text;
  $("#image2").attr("src", "images/"+planet2+".png");
      $.getJSON('https://findfalcone.herokuapp.com/vehicles', function (data) {
        y = document.getElementById("dropdown21").value;
        $("#dist2").text("Distance: "+y);
        $(radio2).empty();
        $.each(data, function (key, entry) {
          q1 = 0;
          for (let i of vehicle_names) {
            if(entry.name == i){
               q1++;
            }
        }
            if(y<=entry.max_distance && q1<entry.total_no){
            radio2.append(
              $('<input>').prop({
                id: entry.name,
                type: 'radio',
                name: 'vehicle2',
                value: entry.name,
                "speed": entry.speed,
                quantity: entry.total_no
              })
            ).append(
              $('<label>').prop({
                for: entry.name
              }).html(entry.name+' - '+(entry.total_no-q1))
            ).append('<img src="images/'+entry.name+'.png" width="60px" height="60px" style = "margin-left:0px">').append(
              $('<br>')
            );
            }
          })
      });
     }

     function myFunction3() {
      planet3 = dropdown31.options[dropdown31.selectedIndex].text;
      $("#image3").attr("src", "images/"+planet3+".png");
      $.getJSON('https://findfalcone.herokuapp.com/vehicles', function (data) {
        a = document.getElementById("dropdown31").value;
        $("#dist3").text("Distance: "+a);
        $(radio3).empty();
        $.each(data, function (key, entry) {
          q1 = 0;
          for (let i of vehicle_names) {
            if(entry.name == i){
              q1++;
            }
        }
            if(a<=entry.max_distance && q1<entry.total_no){
            radio3.append(
              $('<input>').prop({
                id: entry.name,
                type: 'radio',
                name: 'vehicle3',
                value: entry.name,
                "speed": entry.speed,
                quantity: entry.total_no
              })
            ).append(
              $('<label>').prop({
                for: entry.name
              }).html(entry.name+' - '+(entry.total_no-q1))
            ).append('<img src="images/'+entry.name+'.png" width="60px" height="60px">').append(
              $('<br>')
            );
            }
          })
      });
     }

     function myFunction4() {
      planet4 = dropdown41.options[dropdown41.selectedIndex].text;
      $("#image4").attr("src", "images/"+planet4+".png");
      $.getJSON('https://findfalcone.herokuapp.com/vehicles', function (data) {
        b = document.getElementById("dropdown41").value;
        $("#dist4").text("Distance: "+b);
        $(radio4).empty();
        $.each(data, function (key, entry) {
          q1 = 0;
          for (let i of vehicle_names) {
            if(entry.name == i){
              q1++;
            }
        }
            if(a<=entry.max_distance && q1<entry.total_no){
            radio4.append(
              $('<input>').prop({
                id: entry.name,
                type: 'radio',
                name: 'vehicle4',
                value: entry.name,
                "speed": entry.speed,
                quantity: entry.total_no,
              })
            ).append(
              $('<label>').prop({
                for: entry.name
              }).html(entry.name+' - '+(entry.total_no-q1))
            ).append('<img src="images/'+entry.name+'.png" width="60px" height="60px" style = "margin-left:0px">').append(
              $('<br>')
            );
            }
          })
      });
     }

function rocket1() {
    event.preventDefault();
    planet1 = dropdown11.options[dropdown11.selectedIndex].text;
    let radioValue = $("input[name='vehicle1']:checked").val();
    planet_names.push(planet1);
    vehicle_names.push(radioValue);
    let temp = $("input[name='vehicle1']:checked").prop("speed");
    totaltime = totaltime + (x / temp);
    $("#total_dist").text("Total Time: "+totaltime);
    $(dropdown2).empty();
    $.getJSON('https://findfalcone.herokuapp.com/planets', function (data) {
    dropdown2.append($('<option></option>').attr('value', 0).text("Select Planet 2"));
    $.each(data, function (key, entry) {
        if(entry.name!=planet1){
        dropdown2.append($('<option></option>').attr('value', entry.distance).text(entry.name));
        }
      })
    });
}

function rocket2() {
  event.preventDefault();
  planet2 = dropdown21.options[dropdown21.selectedIndex].text;
  let radioValue = $("input[name='vehicle2']:checked").val();
  planet_names.push(planet2);
  vehicle_names.push(radioValue);
  let temp = $("input[name='vehicle2']:checked").prop("speed");
    totaltime = totaltime + (x / temp);
    $("#total_dist").text("Total Time: "+totaltime);
  $(dropdown3).empty();
  $.getJSON('https://findfalcone.herokuapp.com/planets', function (data) {
    dropdown3.append($('<option></option>').attr('value', 0).text("Select Planet 3"));
  $.each(data, function (key, entry) {
      if(entry.name!=planet1 && entry.name!=planet2){
      dropdown3.append($('<option></option>').attr('value', entry.distance).text(entry.name));
      }
    })
  });
}

function rocket3() {
  event.preventDefault();
  planet3 = dropdown31.options[dropdown31.selectedIndex].text;
  let radioValue = $("input[name='vehicle3']:checked").val();
  planet_names.push(planet3);
  vehicle_names.push(radioValue);
  let temp = $("input[name='vehicle3']:checked").prop("speed");
  totaltime = totaltime + (x / temp);
  $("#total_dist").text("Total Time: "+totaltime);
  $(dropdown4).empty();
  $.getJSON('https://findfalcone.herokuapp.com/planets', function (data) {
    dropdown4.append($('<option></option>').attr('value', 0).text("Select Planet 4"));
  $.each(data, function (key, entry) {
      if(entry.name!=planet1 && entry.name!=planet2 && entry.name!=planet3){
      dropdown4.append($('<option></option>').attr('value', entry.distance).text(entry.name));
      }
    })
  });
}

function rocket4() {
  event.preventDefault();
  planet4 = dropdown41.options[dropdown41.selectedIndex].text;
  let radioValue = $("input[name='vehicle4']:checked").val();
  planet_names.push(planet4);
  vehicle_names.push(radioValue);
  let temp = $("input[name='vehicle3']:checked").prop("speed");
  totaltime = totaltime + (x / temp);
  result();
}

async function getToken (){
 let response = await fetch('https://findfalcone.herokuapp.com/token', {
  method: "POST",
  headers: {"Accept": "application/json"}
});
response = await response.json();
return response.token;
}

// function getToken (){
//   token = fetch('https://findfalcone.herokuapp.com/token', {
//    method: "POST",
//    headers: {"Accept": "application/json"}
//  }).then(response => response.json()) 
//  .then(json => console.log(json))
//  .catch(err => console.log(err));
//  console.log(token);
//  }
 

var fans;
var target;
async function result(){
  let token = await getToken();
  console.log(token);
fetch('https://findfalcone.herokuapp.com/find', {
  method: "POST",
  headers: {"Accept": "application/json",
  "Content-Type": "application/json" },
 "body": JSON.stringify({
  token,
  planet_names,
  vehicle_names
})
}).then(response => (response.json())) 
.then(data => {
  fans = data.status;
  target = data.planet_name;
  if(fans == "success"){
    success();
  }else {
    failure();
  }
}).catch(err => console.log(err));
}

function success(){
  localStorage.setItem("target", target);
  localStorage.setItem("totaltime", totaltime);
  window.location.replace("success.html");
  $("#target_image1").attr("src", "images/"+target+".png");

}

function failure(){
  window.location.replace("fail.html");
}