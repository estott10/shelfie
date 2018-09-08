module.exports = {
          
    getInventory: (req, res, next) => {
        const dbInstance= req.app.get('db');

        dbInstance.get_inventory()
            .then( result => {
                res.send(result) 
            })
            .catch( err => {
                res.status(500).send({errorMessage: "failed to retreive product"});
                console.log(err)
            }) 
    },

    addInventory: (req, res, next) => {
        const dbInstance= req.app.get('db');
        const { product_name, price, image} = req.body

        dbInstance.create_product([product_name, price, image])
            .then( result => {
                
                dbInstance.get_inventory()
                .then( result => {
                res.send(dbInstance.get_inventory()
                .then( result => {
                    res.send(result)
                }))
                    })
            })
            .catch( err => {
                res.status(500).send({errorMessage: "failed to create product"});
                console.log(err)
            }) 
    },

       deleteInventory: (req, res, next) => {
           const dbInstance= req.app.get('db');
         
           dbInstance.delete_inventory(req.params.id)
             .then(result => {
                res.sendStatus(200)
                })
                .catch( err => {
                    res.status(500).send({errorMessage: "failed to retreive product"});
                    console.log(err)
            }) 
        }

}