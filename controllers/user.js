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
    // usersSchema
    // .paginate({}, options, (err, docs) =>{
    //     res.send({
    //         count: docs
    //     })
    // })
    
    // .then((data) => res.json(data))
    // .catch((error) => res.json ({message: error }));
    // console.log("Users found")
    // return res.status(200) 

    const currentPage = req.query.page || 1;
    const perPage = 10;
    let totalItems;
    usersSchema.find()
      .countDocuments()
      .then(count => {
        totalItems = count;
        return usersSchema.find()
          .skip((currentPage - 1) * perPage)
          .limit(perPage);
      })
      .then(data => {
        res
          .status(200)
          .json({
            message: 'Users found',
            data: data,
            totalItems: totalItems
          });
      })
      .catch(err => {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
      });
//   };
  
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
    // const { id } = req.params;
    // .deleteOne({ _id: id })
//     .then((data) => res.json(data))
//     .catch((error) => res.json ({message: error }));
//     console.log("User Deleted")
//     return res.status(200) 
// }
  const { id } = req.params;
  const { active } = req.body;
  usersSchema
  .updateOne({ _id: id }, { $set: { active } })
  .then((data) => res.json(data))
  .catch((error) => res.json ({message: error }));
  console.log("User deleted")
  return res.status(200).send("Deleted")
}
