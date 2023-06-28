import signUpMobile from '../assets/images/illustration-sign-up-mobile.svg'

import signUpDesktop from '../assets/images/illustration-sign-up-desktop.svg'

import listIcon from '../assets/images/icon-list.svg'
import {
  useState,
  ChangeEvent,
  SyntheticEvent,
  ClipboardEvent,
  useEffect
} from 'react'
import validateEmail from '../utils/emailValidation'

function SignUp(): JSX.Element {
  const [email, setEmail] = useState<string>('')
  const [isEmail, setIsEmail] = useState<boolean>(false)
  const [submited, setSubmited] = useState<boolean>(false)

  useEffect(() => {
    setIsEmail(validateEmail(email))
  }, [email])

  function handleEmail(
    event: ChangeEvent<HTMLInputElement> & ClipboardEvent<HTMLInputElement>
  ) {
    setEmail(event.currentTarget.value)
  }

  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault()

    if (isEmail) {
      setSubmited(true)
    }
  }

  function handleButton() {
    setSubmited(false)
    setEmail('')
  }

  return (
    <>
      {!submited && (
        <main className="sign-up-page">
          <header>
            <picture>
              <source srcSet={` ${signUpDesktop} `} media='(min-width: 1440px)' />
              <img
                src={`${signUpMobile}`}
                alt=" two screens, a trend and a score image"
              />
            </picture>
          </header>
          <article className="article-wrapper">
            <section className="text-wrapper">
              <h1> Stay updated!</h1>
              <p>
                Join 60,000+ product managers receiveing monthly updates on:
              </p>
              <ul>
                <li>
                  <img src={listIcon} alt="" />
                  <p>Product discovery and building what matters</p>
                </li>
                <li>
                  <img src={listIcon} alt="" />
                  <p>Measuring to ensure updates are a success</p>
                </li>
                <li>
                  <img src={listIcon} alt="" />
                  <p>And much more!</p>
                </li>
              </ul>
            </section>
            <section className="form-wrapper">
              <form action="#" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email">Email address </label>
                  {!isEmail && email.length > 0 && (
                    <span>Valid email required</span>
                  )}
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email@company.com"
                  value={email}
                  onChange={handleEmail}
                  onPaste={handleEmail}
                />
                <input type="submit" value="Subscribe to monthly newsletter" />
              </form>
            </section>
          </article>
        </main>
      )}
      {submited && (
        <section className="confirmation-page">
          <img src={listIcon} alt="Confirmation image" />
          <h1>Thanks for subscribing!</h1>
          <p>
            A confirmation email has been sent to <strong>{email}</strong>.
            Please open it and click the button to confirm your subscription
          </p>
          <button onClick={handleButton}>Dismiss message</button>
        </section>
      )}
    </>
  )
}

export default SignUp
