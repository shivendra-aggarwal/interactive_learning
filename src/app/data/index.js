(function(data){

	var database = require("./database");
	var seedData = require("./seedData");

	data.getCourses = function(nextCallBack){
		nextCallBack(null, seedData.)
	};

	function seedDatabase() {
		database.getDb(function(err,db) {
			if(err){
				console.log("Failed to seed  database: " + err);
			} else {
				db.courses.count(function(err,count){
					if(err){
						console.log("Failed to retrieve database count");
					} else {
						if(count == 0){
							seedData.courses.forEach(function(item){
								db.courses.insert(item, function(err){
									if(err) console.log("Failed to insert data into the database");
								});
							});
						}
					}
				});
			}
		});
	}

	seedDatabase();

})(module.exports);