const express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());
const port = process.env.PORT || 3000;

list = [ { name: 'farhan', time: '6pm' } ];
countdown = 7;
population = 50;
latestInfo = 'Jonah just entered the store ';

app.get('/update', (req, res) => {
	res.send({
		list,
		countdown,
		population,
		latestInfo
	});
});
app.get('/enter/:name', (req, res) => {
	latestInfo = `${req.params['name']} just entered the store`;
	population++;
	countdown++;
});

app.get('/exit/:name', (req, res) => {
	latestInfo = `${req.params['name']} just left the store`;
	population--;
	countdown--;
});
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
