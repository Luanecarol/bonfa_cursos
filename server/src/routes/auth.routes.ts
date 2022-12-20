import { Router } from 'express';
import { LoginDto } from '../dto/loginDTO';
import { GetAccountByUsername } from '../repositories/AccountRepository';
import { generateToken } from '../services/authService';

const authRouter = Router();

authRouter.post('/login', async (req, res) => {
  const body = req.body as LoginDto;

  if (!body.username || !body.password)
    return res.status(400).json({
      erro: 'Email e senha obrigatórios',
    });

  const account = await GetAccountByUsername(body.username);
  if (!account)
    return res.status(404).json({
      erro: 'Usuário ou senha incorretos',
    });

  if (body.password != account.password)
    return res.status(401).json({
      erro: 'Usuário ou senha incorretos',
    });

  return res.status(200).json({ token: generateToken(account) });
});

export default authRouter;
