
export  interface IUserRepository
{
    getByCpf(cpf:string);
    updateByCpf(request:CadastroRequest);
}