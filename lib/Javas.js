function reg(form) {
    var fail = false;

    var log = form.Login.value;
    var pass = form.Password.value;
    var repass = form.RePassword.value;

    var passy = /[0-6a-z_-]/;;

    if (log == '' || log == ' ') {
        fail = "Stupid Login"
    } else if (passy.test(pass) == false) {
        fail = "Stupid Password"
    } else if (repass != pass) {
        fail = "Stupid RePassword"
    }

    if (fail) {
        alert(fail);
        return false;
    }
}