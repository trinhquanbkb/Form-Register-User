const checkEmpty = (nameId, error) => {
  const value = document.getElementById(nameId).value
  if (value == "") {
    document.getElementById(error).innerHTML = "Bạn chưa điền giá trị này"
    document.getElementById(error).style.display = "block"
  } else {
    document.getElementById(error).innerHTML = ""
    document.getElementById(error).style.display = "none"
    return true
  }
}

const checkName = (nameId, error) => {
  const value = document.getElementById(nameId).value
  const regex = /[a-z]/ig
  if (value == "") {
    document.getElementById(error).style.display = "none"
  } else {
    if (regex.test(value)) {
      document.getElementById(error).innerHTML = ""
      document.getElementById(error).style.display = "none"
      return true
    } else {
      document.getElementById(error).innerHTML = "Tên không dùng số hoặc ký tự đặc biệt"
      document.getElementById(error).style.display = "block"
    }
  }
}

const checkPassword = (nameId, error) => {
  const value = document.getElementById(nameId).value
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
  if (value == "") {
    document.getElementById(error).style.display = "none"
  } else {
    if (regex.test(value)) {
      document.getElementById(error).innerHTML = ""
      document.getElementById(error).style.display = "none"
    } else {
      document.getElementById(error).innerHTML = "Password cần ít nhất 8 ký tự và có ký tự số"
      document.getElementById(error).style.display = "block"
    }
  }
}

const checkPasswordConfirm = (pass, nameId, error) => {
  const passwordCurrent = document.getElementById(pass).value
  const value = document.getElementById(nameId).value
  if (value == "") {
    document.getElementById(error).style.display = "none"
  } else {
    if (value == passwordCurrent) {
      document.getElementById(error).innerHTML = ""
      document.getElementById(error).style.display = "none"
    } else {
      document.getElementById(error).innerHTML = "Password cần giống password đã nhập"
      document.getElementById(error).style.display = "block"
    }
  }
}

const checkPhone = (nameId, error) => {
  const value = document.getElementById(nameId).value
  const regex = /^[0-9]{10,10}$/
  if (value == "") {
    document.getElementById(error).style.display = "none"
  } else {
    if (regex.test(value)) {
      document.getElementById(error).innerHTML = ""
      document.getElementById(error).style.display = "none"
      return true
    } else {
      document.getElementById(error).innerHTML = "Số điện thoại chỉ bao gồm chữ số có 10 ký tự"
      document.getElementById(error).style.display = "block"
    }
  }
}

const checkEmail = (nameId, error) => {
  const value = document.getElementById(nameId).value
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (value == "") {
    document.getElementById(error).style.display = "none"
  } else {
    if (regex.test(value)) {
      document.getElementById(error).innerHTML = ""
      document.getElementById(error).style.display = "none"
      return true
    } else {
      document.getElementById(error).innerHTML = "Chưa đúng định dạng email"
      document.getElementById(error).style.display = "block"
    }
  }
}

const validation = () => {
  //Check firstname
  checkEmpty("firstName", "error_firstName")
  checkName("firstName", "error_firstName_all_letter")

  //Check lastName
  checkEmpty("lastName", "error_lastName")
  checkName("lastName", "error_lastName_all_letter")

  //Check password
  checkEmpty("password", "error_password")
  checkPassword("password", "error_password_length")

  //Check confirm password
  checkEmpty("confirmPassword", "error_confirmPassword")
  checkPasswordConfirm("password", "confirmPassword", "error_confirmPassword_regex")

  //Check phone
  checkEmpty("phone", "error_phone")
  checkPhone("phone", "error_phone_regex")

  //Check email
  checkEmpty("email", "error_email")
  checkEmail("email", "error_email_regex")
}

document.getElementById("btnDangKy").onclick = () => {
  validation()
}
