const cont = require('./../controllers/controllers');

module.exports = function(app){
    app.get('/tasks', cont.tasks);
    app.get('/tasks/:id', cont.get);
    app.put('/tasks/:id', cont.put);
    app.post('/tasks', cont.post);
    app.delete('/tasks/:id', cont.delete);
};