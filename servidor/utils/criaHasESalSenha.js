import { randomBytes, scryptSync } from 'crypto';

function criaHasESalSenha(senhaDigitada) {
    const salSenha = randomBytes(16).toString('hex');
    const hashSenha = scryptSync(senhaDigitada, salSenha, 64).toString('hex');

    return { hashSenha, salSenha };
}

export default criaHasESalSenha;
