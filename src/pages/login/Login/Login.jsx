
import Lottie from "react-lottie";
import animation from "../../../../public/animation/login.json"
import GoogleButton from "react-google-button";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
const Login = () => {
    const {logIn} = useContext(AuthContext);
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        logIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate("/");
        })
        .catch(error=>{
            setError(error.message)
        })

    }
    return (
        <div className="hero bg-base-200">
            <form onSubmit={handleLogin} className="hero-content flex-col lg:flex-row-reverse">
            <div className="hidden lg:block">
                <Lottie
                    options={{
                        animationData: animation,
                    }}
                    width={600}
                    height={800}
                />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" name="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-orange-primary outline-none border-none hover:bg-orange-secondary font-bold">Login</button>
                        </div>
                        <div className="w-full">
                            <GoogleButton className="mx-auto"
                                onClick={() => { console.log('Google button clicked') }}
                            />
                        </div>
                        {
                            error ?
                                <p className="text-error text-center">{error}</p> :
                                ""
                        }
                        <p className="text-center">Not have an account? <Link to="/register" className="text-orange-primary font-bold">Register</Link></p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;