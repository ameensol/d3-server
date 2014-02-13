var fs = require('fs');

var json = [];

for (var i=0; i<5000; i++) {
  json.push({
    name: i.toString(),
    count: i
  });
}

fs.writeFile("fixture_big_data.json", JSON.stringify(json), function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("The file was saved!");
  }
});