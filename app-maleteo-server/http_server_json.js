
var http = require("http");
var url = require("url");

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

var solicitudes = [
    { nombre: "Pepito", email: "pepito@email.com" },
    { nombre: "Juanito", email: "juanito@email.com" },
    { nombre: "Felipito", email: "felipito@email.com" },
];
var server = http.createServer(
    (request, response) => {

		 const headers = {
/*			
			'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
			'Access-Control-Max-Age': 2592000, // 30 days
			/** add other headers as per requirement */
			'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
			"Content-Type": "application/json"
		  };
		// Request headers you wish to allow
		// res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

		// Set to true if you need the website to include cookies in the requests sent
		// to the API (e.g. in case you use sessions)
		// response.setHeader('Access-Control-Allow-Credentials', false);

		
        var miUrl = url.parse(request.url, true);
		
        console.log("Petición de URL: " + miUrl.path + " [" + request.method + "]");
        console.log("JSON: " + request);

		console.dir(request.param);
		
		if (request.method === 'OPTIONS') {
			response.writeHead(204, headers);
			response.end("Ok");
			return;
		  }
		else  if (request.method == 'POST') {
			console.log('POST');
			  response.writeHead(200, headers);
			var body = '';
			request.on('data', function(data) {
			  body += data;
			  console.log('Partial body: ' + body);
			});
			request.on('end', function() {
			  console.log('Body: ' + body);
			
			  response.writeHead(200, headers);
			  response.end('Recibido por POST: ' + body);
			  solicitudes.push(JSON.parse(body));

			  // Guardarlo en un fichero todo el array o en bb.dd.
			  // Moongose
			});			
		} 
		else  if (request.method == 'GET') {
			response.writeHead(200, headers);

			if (/^\/solicitudes\/\d/.test(request.url)) {
				var numero = parseInt(request.url.split('/')[2]);
				response.end(JSON.stringify(solicitudes[numero]));
			} else if (/^\/solicitudes/.test(request.url)) {
				response.end(JSON.stringify(solicitudes));
			} else {
				response.writeHead(404);
				response.end("ERROR");
			}
			// http://localhost/solicitudes/45
			// http://localhost?solicitudes=45
		}
    }
);
server.listen(8888);
console.log("Servidor Express iniciado ");