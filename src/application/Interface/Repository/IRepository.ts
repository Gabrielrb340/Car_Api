
export default interface IRepository<T>{
    getall()
    getById(id:string)
    softDelete(id:string)
    update(object:T)
    create(object:T)
}