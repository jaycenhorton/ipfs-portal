var data = [{
    "name": "Bob",
        "phone": 8888888888,
        "youtube": "foo.bar/Bob",
        "linkedin": "linkedin.com/Bob"
}, {
    "name": "Alice",
        "phone": 7777777777,
        "youtube": "foo.bar/Alice",
        "linkedin": "linkedin.com/Alice"
}, {
    "name": "Jaycen",
        "phone": 6666666666,
        "youtube": "foo.bar/Jaycen",
        "linkedin": "linkedin.com/Jaycen"
}, {
    "name": "Jay",
        "phone": 5555555555,
        "youtube": "foo.bar/Jay",
        "linkedin": "linkedin.com/Jay"
}];


window.onload = function() {
  $("#go-lookup").click(function(){
    console.log("jquery called");
    var found= $("#numberToSearch").val();
    console.log("found " + found);
    lookupByPhone(found);
  });
}

function lookupByPhone(phone) {
  console.log("in lookupByPhone function" + " " + phone);
  return data.filter(
      function(data){
        if (data.phone == phone){
          $("#lookup-results-name").html(data.name);
          $("#lookup-results-phone").html(data.phone);
          $("#lookup-results-youtube").html(data.youtube);
          $("#lookup-results-linkedin").html(data.linkedin);
        }
        return data.phone == phone;
      }
  );  
}



