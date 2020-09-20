const moment = require("moment");

console.log(moment().format());

console.log('webpack starterkit');

var NowMoment = moment();
  
var eDisplayMoment = document.getElementById('displayMoment');
eDisplayMoment.innerHTML = NowMoment;

btn.onclick = function getInputValue(){

var user_lan_id = document.getElementById("userLanId").value;
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("http://127.0.0.1:5000/api/v1/user?user_lan_id="+user_lan_id, requestOptions)
  .then(response => response.json())
  .then(function(data){
    var res = data.customers;

    var col = [];
        for (var i = 0; i < res.length; i++) {
            for (var key in res[i]) {
                if (key == "accounts") delete res[i].accounts;
                if (key == "roles") delete res[i].roles; 
                if (key == "related") delete res[i].related;  
                if (col.indexOf(key) === -1 && key != "accounts" && key != "roles" && key != "related") {
                    col.push(key);
                }
            }
        }

    console.log(res);
    console.log(col);

    var table = document.createElement("table");

    var tr = table.insertRow(-1);

    for (var i = 0; i < col.length; i++) {
      var th = document.createElement("th");
      th.innerHTML = col[i];
      tr.appendChild(th);
  }

  for (var i = 0; i < res.length; i++) {

    tr = table.insertRow(-1);

    for (var j = 0; j < col.length; j++) {
        var tabCell = tr.insertCell(-1);
        tabCell.innerHTML = res[i][col[j]];
    }
  }

  var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);

  }
  )
  .catch(error => console.log('error', error));
};