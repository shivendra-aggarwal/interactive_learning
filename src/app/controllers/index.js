(function(controllers){
	var courseController = require("./courseController");

	controllers.init = function(app){
		courseController.init(app);
	};
})(module.exports);