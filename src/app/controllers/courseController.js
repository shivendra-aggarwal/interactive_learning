(function(courseController){

	courseController.init = function(app){

		app.get("/api/course", function(req,res){

			res.set("Content-Type", "application/json");
			res.send({foo: "bar"});

		});
	};
})(module.exports);