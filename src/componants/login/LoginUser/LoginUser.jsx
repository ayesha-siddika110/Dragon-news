import { useContext } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { AuthContext } from '../../../Provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { RingLoader } from 'react-spinners';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const LoginUser = () => {
    const {signInUser, setUser, loading} = useContext(AuthContext)
    const navigate = useNavigate()


    const handleSubmit =(e)=>{
        e.preventDefault()
        const form = new FormData(e.target)
        const email = form.get("email")
        const password = form.get("password")
        console.log(email,password);

        signInUser(email,password)
        .then(res=> {
            console.log(res);
            const user = res.user
            setUser(user)
            navigate('/')
            
        })
        .catch(error=>{
            console.log(error);
            
        })
    }

    return (
        <div className=''>
            
            <div className="hero">
                <div className="hero-content  flex-col lg:flex-row-reverse">

                    <div className="card bg-base-100 px-6 rounded-none w-[500px] shrink-0 shadow-xl">
                        <h1 className='text-center text-2xl font-bold p-6 pt-14'>Login Account</h1>
                        
                        <hr className=''/>
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                               
                            </div>
                            <div className='text-sm'><Checkbox {...label} defaultChecked />Accept Terms And Conditions</div>
                            <div className="form-control mt-6">
                                <button className="btn bg-black text-white">Login</button>
                            </div>

                            <div className='text-center'>
                                Do not Have an Account ? <Link className='text-[#D72050] font-bold' to="/login/registration">Registration</Link>

                            </div>

                            
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LoginUser;