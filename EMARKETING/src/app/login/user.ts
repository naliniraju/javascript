
export class User{
    id: number;
    name : string;
    email : string;
    password:string;
    status : string;
    address : string;
    contact : number;
    setId(id:number){
        this.id = id;
    }
    getId():number{
        return this.id;
    }
    setName(name:string){
        this.name  = name;
    }
    getName():string{
        return this.name;
    }
    setEmail(email:string){
        this.email = email;
    }
    getEmail():string{
        return this.email;
    }
    setPassword(password:string){
        this.password = password
    }
    getPassword():string{
        return this.password
    }
    setStatus(status:string){
        this.status = status;
    }
    getStatus():string{
        return this.status;
    }
    setAddress(address:string){
        this.address = address;
    }
    getAddress():string{
        return this.address;
    }
    setContact(contact:number){
        this.contact = contact;
    }
    getContact():number{
        return this.contact;
    }
}