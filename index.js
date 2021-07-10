var Koa = require("koa");
var app = module.exports = new Koa();
var html = 
	`<html>
		<head>
			<meta charset-"UTF-8">
			<title>A small test page</title>
			<script src="//localhost:9091"></script>
		</head>
		<body>
			Page rendered at : <span id="demo"></span>
		</body>
		<script language="javascript">
			document.getElementById('demo').innerHTML = new Date();
		</script>
	</html>`;

app.use(function *(){
		if(this.request.path === "/client"){
			this.body = html;
			return;
		}
		this.body = "Koa says hi";
});

var port = process.env.PORT || (process.argv[2]=='test' ? 4001:3000);

if(!module.parent){app.listen(port);}

console.log("Application started. Listening on port: " + port);