module.exports = function (app, express) {
    var apiRouter = express.Router();

    apiRouter.get('/me', function (req, res) {

        res.json({message: "Hi from server"});
    });

    apiRouter
        .route('/items')
        .get(function (req, res) {

            res.json([{
                id: "1",
                name: "Item 1"
            }, {
                id: "2",
                name: "Item 2"
            }]);
        });

    return apiRouter;
}