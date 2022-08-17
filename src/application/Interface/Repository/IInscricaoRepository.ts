
export default interface IInscricaoRepository{
    getInscricaoByCpf(cpf:string);
    login(email:string,pass:string)
}