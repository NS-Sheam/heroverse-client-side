import Lottie from "react-lottie";
import animation from "../../../../public/animation/sign-up.json"
import GoogleButton from "react-google-button";
import { Link } from "react-router-dom";

const Register = () => {
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, name);
    }
    return (
        <div className="hero bg-base-200 py-4">
            <form onSubmit={handleRegister} className="hero-content flex-col lg:flex-row lg:gap-20">
                <Lottie
                    options={{
                        animationData: animation,
                    }}
                    width={500}
                    height={500}
                />
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="email" name="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-orange-primary outline-none border-none hover:bg-orange-secondary font-bold">Login</button>
                        </div>
                        <p className="text-center">Already have an account? <Link to="/login" className="text-orange-primary font-bold">Login</Link></p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;