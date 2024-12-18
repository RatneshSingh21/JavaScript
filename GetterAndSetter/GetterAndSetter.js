class User{
    constructor (email,password)
    {
        this.email=email;
        this.password=password;
    }
    get _password()
    {
        return _password;
    }

    set _password(value)
    {
         this._password=value;
    }
    
}
const c =new User("ratnesh@gmail.com",123);
console.log(c.password);