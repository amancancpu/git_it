var userloggedin=true;
function checkuserloggedIn(){
    var promise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(userloggedin)
            {
                resolve('User log innnnnnn');
            }
            else
            reject('User log ouuuuuuuuuut');
        },1000);
    });
    return promise;
}
checkuserloggedIn().then((msg)=>{
    console.log(msg);
}).catch((msg)=>{
    console.log(msg);
});