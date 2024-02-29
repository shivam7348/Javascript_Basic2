const user = {
    username: "Shiva",
    price: 999,
    
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to wesite`);   // this refer to current context in object
    }
}
user.welcomeMessage()


