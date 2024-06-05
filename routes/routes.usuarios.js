const { Router } = require('express');
const { UsuariosGet, UsuariosPut, UsuariosDelete, UsuariosPatch, UsuariosPost } = require('../controllers/controllers.usuarios');
const router = Router();

router.get('/',UsuariosGet);
router.put('/:id',UsuariosPut);
router.delete('/:id', UsuariosDelete);
router.patch('/',UsuariosPatch);
router.post('/',UsuariosPost);

module.exports = router;