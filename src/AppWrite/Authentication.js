import { Client , Account , ID } from "appwrite";
import config from "../config/config";

export class AuthService{
    client = new Client();
    Account;

    constructor(){
        this.client
        .setEndpoint(config.appWriteUrl)
        .setProject(config.appWriteProjectId)

        this.Account = new Account(this.client);
    }

    async createAccount({email , password , name}){
        try {
            const userAccount = await this.Account.create(ID.unique , email , password , name);

            if(userAccount){
                this.Account.login({email , password});
            } else {
                return userAccount;
            }

        } catch (error) {
            console.log('appWrite :: Authentication :: createAccount :: error ' , error);
            
        }
    }

    async login({email , password}){
        try {
            return this.Account.createEmailSession(email , password);
        } catch (error) {
            console.log('appWrite :: Authentication :: login :: error ' , error);
            
        }
    }

    async getCurrentUser(){
        try {
            return await this.Account.get();
        } catch (error) {
            console.log("Appwrite Service :: getCurrentUser :: error :: " , error);
        }

        return null;
    }

    async logout(){
        try {
            return await this.Account.deleteSessions();
        } catch (error) {
            console.log("Appwrite Service :: logout :: error :: " , error);
        }
    }

}

const authService = new AuthService();

export default authService;