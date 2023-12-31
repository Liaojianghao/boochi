import './register.scss'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>boochi social</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos dicta
            nihil, consequatur mollitia consectetur error esse, explicabo modi
            pariatur, ipsum temporibus. Quibusdam quas, neque consequuntur
            ratione repellat tempora nam culpa.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}
