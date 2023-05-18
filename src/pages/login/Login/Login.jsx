
import Lottie from "react-lottie";
import animation from "../../../../public/animation/login.json"
const Login = () => {
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }
    return (
        <div className="hero bg-base-200">
            <form onSubmit={handleLogin} className="hero-content flex-col lg:flex-row-reverse">
                <Lottie
                    options={{
                        animationData: animation,
                    }}
                    width={600}
                    height={800}
                />
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
                            <button type="submit" className="btn bg-orange-primary outline-none border-none hover:bg-orange-secondary">Login</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;