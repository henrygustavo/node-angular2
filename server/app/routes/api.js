module.exports = function(app, express) {
    var apiRouter = express.Router();


    apiRouter.get('/me', function(req,res){

        res.json({
            message:"Hi from server"
        });
    });

    return apiRouter;
}    