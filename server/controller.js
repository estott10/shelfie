module.exports = {
        
        
        
    getInventory: (req, res, next) => {
        const dbInstance= req.app.get('db');

        dbInstance.get_inventory()
            .then( result => {
                res.send(result)
                console.log(result)
                debugger
            })
            .catch( err => {
                res.status(500).send({errorMessage: "failed to retreive allstars"});
                console.log(err)
            }) 
    },


}