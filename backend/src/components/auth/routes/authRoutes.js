import validateJwt from '../middleware/validateJwt.js';

import { Router } from 'express';
import {
  signUpUser,
  signInUser,
  requestPasswordResetCtrl,
  verifyResetTokenCtrl,
  resetPasswordCtrl,
  verifyEmail,
  signOutUser,
} from '../controllers/authController.js';
import { validateSession } from '../controllers/sessionController.js';
import { userSchema, signInSchema } from '../../users/schemas/userSchema.js';
import { validationsZod } from '../../../middlewares/validationsZod.js';

const authRouter = Router();

// Endpoint de registrarse
authRouter.post('/sign-up', validationsZod(userSchema), signUpUser);

// Endpoint de iniciar sesion
authRouter.post('/sign-in', validationsZod(signInSchema), signInUser);

// Endpoint de cerrar sesion
authRouter.post('/sign-out', validateJwt, signOutUser);

// Endpoint para validar la sesión
authRouter.get('/session', validateJwt, validateSession);

// Enpoints de reset password
authRouter.post('/request-password-reset', requestPasswordResetCtrl);
authRouter.get('/reset-password/:token', verifyResetTokenCtrl);
authRouter.post('/reset-password/:token', resetPasswordCtrl);

// Enpoint de verificar email
authRouter.get('/verify-email/:token', verifyEmail);

export default authRouter;
