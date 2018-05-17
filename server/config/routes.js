const cont = require('./../controllers/controllers');
const path = require('path');

module.exports = function(app){
    app.get('/tasks', cont.tasks);
    app.get('/tasks/:id', cont.get);
    app.put('/tasks/:id', cont.put);
    app.post('/tasks', cont.post);
    app.get('/task/:id', cont.delete);
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"));
      });
};