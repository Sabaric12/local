var xhttp=new XMLHttpRequest();
xhttp.onreadystatechange= function(){
    console.log(this.readyState);
}
xhttp.open("GET","https://opentdb.com/api.php?amount=3");
xhttp.send();
