var express = require('express');
var app = express();

app.use('/api/books', function (req, res) {
	console.log('GET /api/books');
	res.json({
		book1: 'Kings of Crypto',
		book2: 'Bad Blood',
		book3: 'Everything Store',
		book4: 'Hatching Twitter'
	});
});

app.use(express.static(__dirname));

app.listen(8000, function () {
	console.log('listening on 8000');
});