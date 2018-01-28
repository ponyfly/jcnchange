function showErrorOrRight(flag, errorText) {
  var $iStatus = $(this).next('.i-status')
  var $errorText = $(this).parent().find('.error-text')
  if (flag === 'error') {
    if (errorText) {$errorText.html(errorText)}
    if ($iStatus.hasClass(('error-status'))) return
    if ($iStatus.hasClass('right-status')) {
      $iStatus.removeClass('right-status')
    }
    $iStatus.addClass('error-status').next('.error-text').show()
  } else if (flag === 'right') {
    if ($iStatus.hasClass(('right-status'))) return
    if ($iStatus.hasClass('error-status')) {
      $iStatus.removeClass('error-status')
    }
    $iStatus.addClass('right-status').next('.error-text').hide()
  }
}

$(function () {

  $('#nick').on('blur', function () {
    var nick = $(this).val();
    if (!nick || nick.trim() === "") {
      showErrorOrRight.call(this, 'error')
    } else {
      showErrorOrRight.call(this, 'right')
    }
  })

  $('#password').on('blur', function () {
    var password = $(this).val();
    if (!password || password.trim() === "") {
      showErrorOrRight.call(this, 'error', '密码不能为空')
    } else {
      if (password.length < 6) {
        showErrorOrRight.call(this, 'error', '输入密码不少于6位')
      } else {
        showErrorOrRight.call(this, 'right')
      }
    }
  })

  $('#confirm-password').on('blur', function () {
    var password = $('#password').val();
    var confirmPassword = $(this).val();
    if (!confirmPassword || confirmPassword.trim() === "" || password !== confirmPassword) {
      showErrorOrRight.call(this, 'error')
    } else {
      showErrorOrRight.call(this, 'right')
    }
  })

  $('#telphone').on('blur', function () {
    var telphone = $(this).val();
    if (!telphone || telphone.trim() === "") {
      showErrorOrRight.call(this, 'error', '请输入注册手机号')
    } else {
      if (!regTelphone(telphone)) {
        showErrorOrRight.call(this, 'error', '请输入正确的手机号')
      } else {
        showErrorOrRight.call(this, 'right')
      }
    }
  })

  $('#name').on('blur', function () {
    var name = $(this).val();
    if (!name || name.trim() === "") {
      showErrorOrRight.call(this, 'error', '请输入姓名')
    } else {
      if (!/^[\u4e00-\u9fa5]+$/.test(name)) {
        showErrorOrRight.call(this, 'error', '请输入正确姓名')
      } else if (name.length < 2) {
        showErrorOrRight.call(this, 'error', '请输入正确姓名')
      } else {
        showErrorOrRight.call(this, 'right')
      }
    }
  })

  $('#card').on('blur', function () {
    var card = $(this).val();
    if (!card || card.trim() === "") {
      showErrorOrRight.call(this, 'error', '请输入身份证号')
    } else {
      if (!regCard(card)) {
        showErrorOrRight.call(this, 'error', '请输入正确的身份证号')
      } else {
        showErrorOrRight.call(this, 'right')
      }
    }
  })

  $('#check-rule').on('change', function () {
    var isChecked = $('#check-rule').is(':checked')
    var $iStatus = $('.protocol').find('.i-status')
    if (isChecked) {
      if ($iStatus.hasClass(('right-status'))) return
      if ($iStatus.hasClass('error-status')) {
        $iStatus.removeClass('error-status')
      }
      $iStatus.addClass('right-status').next('.error-text').hide()
    } else {
      if ($iStatus.hasClass(('error-status'))) return
      if ($iStatus.hasClass('right-status')) {
        $iStatus.removeClass('right-status')
      }
      $iStatus.addClass('error-status').next('.error-text').show()
    }
  })

  $('#login-nick').on('blur', function () {
    var nick = $(this).val();
    if (!nick || nick.trim() === "") {
      showErrorOrRight.call(this, 'error')
    } else {
      showErrorOrRight.call(this, 'right')
    }
  })

  $('#login-pass').on('blur', function () {
    var loginPass = $(this).val();
    if (!loginPass || loginPass.trim() === "") {
      showErrorOrRight.call(this, 'error')
    } else {
      showErrorOrRight.call(this, 'right')
    }
  })

  $('.submit-btn').on('click', function () {
    var nick = $("#nick").val();
    var password = $("#password").val();
    var confirmPassword = $("#confirm-password").val();
    var telphone = $("#telphone").val();
    var name = $("#name").val();
    var card = $("#card").val();

    if (!nick || nick == "") {
      showErrorOrRight.call($("#nick"), 'error')
      // alert('请输入昵称', 2);
      return;
    }

    if (!password || password == "") {
      showErrorOrRight.call($("#password"), 'error', '密码不能为空')
      // alert('请输入密码', 2);
      return;
    }

    if (password && password.length < 6) {
      showErrorOrRight.call($("#password"), 'error', '输入密码不少于6位')
      // alert('输入密码不少于6位', 2);
      return;
    }

    if (!confirmPassword || confirmPassword.trim() === "" || password !== confirmPassword) {
      showErrorOrRight.call($("#confirm-password"), 'error')
      return
    }

    if (!telphone || telphone == "") {
      showErrorOrRight.call($("#telphone"), 'error', '请输入注册手机号')
      // alert('请输入注册手机号', 2);
      return;
    } else {
      if (!regTelphone(telphone)) {
        showErrorOrRight.call($("#telphone"), 'error', '请输入正确的手机号')
        // alert('请输入正确的手机号', 2);
        return;
      }
    }

    if (!name || name == "") {
      showErrorOrRight.call($("#name"), 'error', '请输入姓名')
      // alert('请输入姓名', 2);
      return;
    }

    if (!/^[\u4e00-\u9fa5]+$/.test(name)) {
      showErrorOrRight.call($("#name"), 'error', '请输入正确姓名')
      // alert('请输入正确姓名', 2);
      return;
    } else {
      if (name.length < 2) {
        showErrorOrRight.call($("#name"), 'error', '请输入正确姓名')
        // alert('请输入正确姓名', 2);
        return;
      }
    }

    if (!card || card == "") {
      showErrorOrRight.call($("#card"), 'error', '请输入身份证号')
      // alert('请输入身份证号', 2);
      return;
    } else {
      if (!regCard(card)) {
        showErrorOrRight.call($("#card"), 'error', '请输入正确的身份证号')
        // alert('请输入正确的身份证号', 2);
        return;
      }
    }

    if (!$("input[type='checkbox']").is(':checked')) {
      // alert('请勾选《她社区用户协议》之后才能注册');
      $('#check-rule').triggerHandler('change')
      return;
    }

    var dataReg = {
      'userName': nick,
      'password': password,
      'name': name,
      'mobilePhone': telphone,
      'identityCardNo': card
    }
    $.ajax({
      contentType: 'application/json',
      url: 'http://www.j.cn/live/register/ajaxRegister',
      method: 'POST',
      data: JSON.stringify(dataReg),
      dataType: 'json',
      success: function (data) {
        if (data.code == '00000') {
          window.location.href = 'http://www.j.cn'
        } else {
          alert(data.message);
        }

        // console.log(data);
      },
      error: function () {
        alert('注册失败');
        console.log('error');
      }
    });

  });

  $('.login-btn').on('click', function () {
    var loginNick = $("#login-nick").val();
    var loginPass = $("#login-pass").val();

    if (!loginNick || loginNick == "") {
      showErrorOrRight.call($("#login-nick"), 'error')
      // alert('请输入昵称', 2);
      return;
    }

    if (!loginPass || loginPass == "") {
      showErrorOrRight.call($("#login-pass"), 'error')
      // alert('请输入密码', 2);
      return;
    }

    var dataLogin = {
      'userName': loginNick,
      'password': loginPass
    };
    $.ajax({
      contentType: 'application/json',
      url: 'http://www.j.cn/live/login/ajaxLogin',
      type: 'POST',
      data: JSON.stringify(dataLogin),
      dataType: 'json',
      success: function (data) {
        if (data.code == '00000') {
          window.location.href = "http://www.j.cn";
        } else {

          alert(data.message);
        }

        // console.log(data);
      },
      error: function () {
        console.log('error');
      }
    });

  });

  $('.nav-bar .login').on('click', function () {
    $('.nav-bar .register').removeClass('active');
    $(this).addClass('active');
    $('.content-register').hide();
    $('.content-login').show();
  });

  $('.nav-bar .register').on('click', function () {
    $('.nav-bar .login').removeClass('active');
    $(this).addClass('active');
    $('.content-login').hide();
    $('.content-register').show();
  });

  //电话手机号匹配
  function regTelphone(tels) {
    var telps = tels.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/);
    var mobs = tels.match(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\\d{8}$/);
    if (telps || mobs) {
      return true;
    } else {
      return false;
    }
  }

  //匹配身份证
  function regCard(cards) {
    var cardsNum = cards.match(/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/);
    if (cardsNum) {
      return true;
    } else {
      return false;
    }
  }
});