window.onload = function () {
    var regtel = /^1[3|4|5|7|8|9]\d{9}$/;
    var regqq = /^[1-9]\d{4,}$/;
    var reguname = /^[\u4e00-\u9fa5]{2,8}$/;
    var regmsg = /^\d{6}$/;
    var regpwd = /^[a-zA-Z0-9_-]{6,16}$/;
    var tel = document.querySelector("#tel");
    var qq = document.querySelector("#qq");
    var uname = document.querySelector("#uname");
    var msg = document.querySelector("#security");
    var pwd = document.querySelector("#pwd");
    var confirm = document.querySelector("#confirm");
    regexp(tel, regtel);
    regexp(qq, regqq);
    regexp(uname, reguname);
    regexp(msg, regmsg);
    regexp(pwd, regpwd);
    function regexp(ele, reg) {
        ele.onblur = function () {
            if(reg.test(this.value)) {
                this.nextElementSibling.className = "success";
                this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 恭喜你输入正确';
            } else {
                this.nextElementSibling.className = "error";
                this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 格式不正确，请重新输入';
            }
        }
    }
    confirm.onblur = function () {
        if (this.value === pwd.value) {
            this.nextElementSibling.className = "success";
            this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 恭喜你输入正确';
        } else {
            this.nextElementSibling.className = "error";
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 两次密码输入不一致，请重新输入';
        }
    };
};