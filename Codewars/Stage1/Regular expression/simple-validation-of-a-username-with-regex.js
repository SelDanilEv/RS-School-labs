console.log(validateUsr("ff"))

function validateUsr(username) {
    let res = new RegExp("^([0-9]|_|[a-z]){4,16}$");
    return res.test(username)
}