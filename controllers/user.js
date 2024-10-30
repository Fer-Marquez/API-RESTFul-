const usersSchema = require('../models/users')
const options = {
    page: 1,
    limit: 3 
};

exports.postUser = async(req, res, next) => {
    console.log("User post")
    return res.status(200).send("Mensaje con exito")
}
// crear usuario
exports.postUser = async(req, res) => {
    const user = usersSchema(req.body);
    user.save()
    .then((data) => res.json(data))
    .catch((error) => res.json ({message: error }));
    console.log("User created")
    return res.status(201)     
    
}
//buscar todos los usuarios
exports.allUser = async(req, res) => { 
    usersSchema
    .paginate({}, options, (err, docs) =>{
        res.send({
            count: docs
        })
    })
    .then((data) => res.json(data))
    .catch((error) => res.json ({message: error }));
    console.log("Users found")
    return res.status(200) 

}
//buscar a un usuario por id 
exports.getUserById = async(req, res) => { 
    const { id } = req.params;
    usersSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json ({message: error }));
    console.log("User found")
    return res.status(200) 

}
//actualizar un usuario
exports.updateUserById = async(req, res) => { 
    const { id } = req.params;
    const { username, password, first_name, last_name } = req.body;
    usersSchema
    .updateOne({ _id: id }, { $set: {username, password, first_name, last_name} })
    .then((data) => res.json(data))
    .catch((error) => res.json ({message: error }));
    console.log("User Updated")
    return res.status(200) 
}
//borrar un usuario
exports.deleteUserById = async(req, res) => { 
    const { id } = req.params;
    usersSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json ({message: error }));
    console.log("User Deleted")
    return res.status(200) 
}
