import React, { useContext } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Loginpage = () => {

    const {createUser, updateProfileData, setUser} = useContext(AuthContext)

    const navigate = useNavigate()

    

    const handleSubmit =(e)=>{
        e.preventDefault()
        const form = new FormData(e.target)
        const name = form.get("name")
        const email = form.get("email")
        const photo = form.get("photo")
        const password = form.get("password")
        console.log(name);

        createUser(email,password)
        .then(res=> {
            console.log(res);
            const user = res.user
            setUser(user)


            updateProfileData({displayName: name, photoURL: photo})
            .then(res=>{
                // console.log(res);
                navigate('/')
                
            })
            .catch(err=>{
                console.log(err);
                
            })
            
        })
        .catch(error=>{
            console.log(error);
            
        })
    }

    return (
        <div>
            <div className="hero">
                <div className="hero-content  flex-col lg:flex-row-reverse">

                    <div className="card bg-base-100 px-6 rounded-none w-[500px] shrink-0 shadow-xl">
                        <h1 className='text-center text-2xl font-bold p-6 pt-14'>Registration your Account</h1>
                        
                        <hr className=''/>
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" />
                            </div>
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
                                <button className="btn bg-black text-white">Registration</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Loginpage;