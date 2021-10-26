const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const activityRouter = require('./activity.js')
const countriesRouter = require('./countries.js')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/activity', activityRouter);
router.use('/countries', countriesRouter);

module.exports = router;
