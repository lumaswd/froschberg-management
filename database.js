const mongoose = require('mongoose');

exports.connectToDatabase = () => {
    mongoose
        .connect('mongodb://AdminFroschberg:Geheim123@ds257241.mlab.com:57241/froschberg-management')
        .then(() => console.log('Database (mLab) connected.'))
        .catch(err => console.error(err));
};

