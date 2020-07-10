
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        h=JSON.parse(xhttp.responseText);
       document.getElementById("hits").innerHTML = h.count;
    }
};
xhttp.open("GET", "https://4zk0zxf6rk.execute-api.us-east-2.amazonaws.com/dev/MyResource", true);
xhttp.send();