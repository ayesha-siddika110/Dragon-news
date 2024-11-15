import React from 'react';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Loginpage = () => {
    return (
        <div>
            <div className="hero">
                <div className="hero-content  flex-col lg:flex-row-reverse">

                    <div className="card bg-base-100 px-6 rounded-none w-[500px] shrink-0 shadow-xl">
                        <h1 className='text-center text-2xl font-bold p-6 pt-14'>Registration your Account</h1>
                        <hr className=''/>
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                               
                            </div>
                            <div className='text-sm'><Checkbox {...label} defaultChecked />Accept Terms And Conditions</div>
                            <div className="form-control mt-6">
                                <button className="btn bg-black text-white">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Loginpage;