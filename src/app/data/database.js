(function(database){

	var mongodb = require("mongodb");
	var mongoUrl = "mongodb://localhost:27017/interactive_learning";
	var theDb = null;

	database.getDb = function(nextCallBack){
		if(!theDb){
			mongodb.MongoClient.connect(mongoUrl,function(err,db){
				if(err){
					nextCallBack(err,null);
				}else{
					theDb = {
						db: db,
						courses: db.collections("courses");
					};
					nextCallBack(null,theDb);
				}
			})
		}else{
			nextCallBack(null,theDb);
		}
	}

	
	
})(module.exports);