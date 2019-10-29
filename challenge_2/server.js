const express = require('express');
const app = express();
//const path = require('path');
let fs = require('fs');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('client'));


const port = 3000;

app.listen(port, () => {
  console.log(`Reportly is listening on ${port}`);
});

// app.get('/', function (req, res) {
//   res.resendfile('index.html');
// });

app.post('/upload',(req,res) => {

	var jsonData = JSON.parse(req.body.data);

	 //console.log(req);

	// for(var k in jsonData) {
	// 	console.log(jsonData[k]);
	// }



	var convertedData = convertJsonToCSV(jsonData);
	console.log(convertedData);

	// console.log("hiiii");
	// var test = "tasneem";
	res.end(convertedData);


  
});

// app.get('/upload',(req,res) => {
// 	res.end()
// }


//convert from Json to CSV 
var convertJsonToCSV = function(json) {

	var csvArray =[];

	var inner = function(data) {

		csvArray.push( data.firstName + ',' + data.lastName + ',' + data.county + ',' + data.city + ',' + data.role + ',' + data.sales + '\n'); 
		for(var i = 0; i< data.children.length; i++){
    	inner(data.children[i]);
  	}
    
  	return csvArray;

	};
    
  var result = inner(json);

 //  var properties =  "firstName,lastName,county,city,role,sales" + '\n'
 //  console.log(properties); 
	// for(var i = 0; i<result.length; i++) {
 //        console.log(result[i]);
 //    }

	var report =  "firstName,lastName,county,city,role,sales" + '\n'
  // console.log(properties); 
	for(var i = 0; i<result.length; i++) {
        report += result[i];
    } 

	return report;

}


