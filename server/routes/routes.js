const accountController = require('../controllers/accountController');
const meetingController = require('../controllers/meetingController');
const activityController = require('../controllers/activityController');

module.exports = (app) => {
    
    app.get('/api/login/:email', accountController.login);
    app.post('/api/create-account', accountController.createAccount);

    app.get('/api/meetings', meetingController.readMeetings);
    app.post('/api/create-meeting', meetingController.createMeeting);
    app.put('/api/update-meeting/:id', meetingController.updateMeeting);
    app.delete('/api/delete-meeting/:id', meetingController.deleteMeeting);

    app.get('/api/activities',activityController.readActivities);
    app.post('/api/create-activity', activityController.createActivity);
    app.put('/api/update-activity/:id', activityController.updateActivity);
    app.delete('/api/delete-activity/:id', activityController.deleteActivity);
}