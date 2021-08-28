let mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Keneth:Lapuertanegra2021@adoptpetcluster.hrxsv.mongodb.net/AdoptPet', { useNewUrlParser: true });

module.exports = mongoose;