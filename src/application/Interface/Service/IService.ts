
export default interface IService<T>{
    getall()
    getById(id:string)
    softDelete(id:string)
    insert(object:T)
}