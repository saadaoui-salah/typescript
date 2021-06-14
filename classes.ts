interface UserInterface{
    name: string; // accecible from anywher
    age: number; // accecible within classes who inherete user class
    email: string; // accecible within user class
    regitser()
    payInvoice()
}

class User implements UserInterface{
    name: string; // accecible from anywher
    age: number; // accecible within classes who inherete user class
    email: string; // accecible within user class

    constructor(name: string, age: number, email: string){
        this.name = name;
        this.email = email;
        this.age = age;
        
        console.log(`User ${this.name} created`)
    }
    // private / protected
    regitser(){
        console.log(`${this.name} is registred`)
    }
    
    payInvoice(){
        console.log(`${this.name} is in premium plan`)
    }
}

class Member extends User{
    id: number;
    groupe: string;
    constructor(id: number, groupe: string, name: string, age: number, email: string){
        super(name, age, email);
        this.id = id;
        this.groupe = groupe;
    }

    payInvoice(){
        this.groupe = "premium"
        super.payInvoice();
    }

}



const user: User  = new User("Salah", 21, "email@example.com")
console.log(user.name)
user.regitser()


const memeber: Member  = new Member(1, "free", "Saadaoui", 21, "Saadaoui@example.com")
memeber.regitser()
memeber.payInvoice()
