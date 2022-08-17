import { InscricaoRoute } from './src/routes/inscricao-route';
import { UsuarioRoutes } from './src/routes/user-route';
import * as Hapi from "@hapi/hapi";
import { AppDataSource } from './src/data-source';
import * as Bcrypt from 'bcrypt'
import { AcidenteRoute } from './src/routes/acidente-route';
const users = {
    john: {
        username: 'john',
        password: '$2a$10$iqJSHD.BGr0E2IxQwYgJmeP3NvhPrXAeLSaGCj6IR/XU5QtjVu5Tm',   // 'secret'
        name: 'John Doe',
        id: '2133d32a'
    }
};
const validate = async (request, username, password) => {
    console.log(username, password)
    const user = users[username];
    if (!user) {
        return { credentials: null, isValid: false };
    }
    const isValid = await Bcrypt.compare(password, user.password);
    const credentials = { id: user.id, name: user.name };

    return { isValid, credentials };
};
class App {
    app:Hapi.Server;
    
    constructor() {        
    }
   
    public async init(){
        this.app = Hapi.server({
            host:'127.0.0.1',
            port:'4000',
            routes: {
                cors:true
        }})
        AppDataSource.initialize()
        await this.app.register(require('@hapi/basic'));
        this.app.auth.strategy('simple','basic',{validate})
        this.app.route(UsuarioRoutes);
        this.app.route(InscricaoRoute);
        this.app.route(AcidenteRoute);

    }
    public async start() {
        await this.app?.start();
    }
}
const app = new App();
 
export default app; 