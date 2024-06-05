const UsuariosGet = (req,res) => {
    const {nombre="",edad=0}=req.query;
    res.json({
        msg:'API-get',
        nombre,
        edad
    })
}

const UsuariosPost = (req,res) => {
    res.json({
        msg:'API-post',
    })
} 

const UsuariosPut = (req,res) => {
    const {id}=req.params;
    res.json({
        msg:'API-put',
        id    
    })
}

const UsuariosDelete = (req,res) => {
    res.json({
        msg:'API-delete'
    })
}

const UsuariosPatch = (req,res) => {
     res.json({
        msg:'API-patch'
    })
}

module.exports = {UsuariosGet,UsuariosPost,UsuariosPut,UsuariosDelete,UsuariosPatch}