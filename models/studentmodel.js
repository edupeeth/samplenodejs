const mongoose = require('mongoose');
const schema = mongoose.Schema; 

var studentModelSchema = new schema ({
    name : {
        type : String,
        required : [true, 'student name is required field']
    },
    age : {
        type : Number
    }
});

module.exports = mongoose.model('StudentModel', studentModelSchema);

//You can use either this way @method2
/*var StuModel = mongoose.model('StudentModel', studentModelSchema);
module.exports = StuModel;*/