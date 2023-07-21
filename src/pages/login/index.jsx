import './login.scss'

export default function Login() {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello world!</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos dicta
            nihil, consequatur mollitia consectetur error esse, explicabo modi
            pariatur, ipsum temporibus. Quibusdam quas, neque consequuntur
            ratione repellat tempora nam culpa.
          </p>
          <span>Don't you have an account?</span>
          <button>Register</button>
        </div>
        <div className="right">
          <h1>login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>login</button>
          </form>
        </div>
      </div>
    </div>
  )
}
