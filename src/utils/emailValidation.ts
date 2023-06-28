import isEmail from 'validator/lib/isEmail'
function validateEmail(email:string):boolean {
  return isEmail(email)
}

export default validateEmail