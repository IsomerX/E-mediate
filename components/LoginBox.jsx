import React, { useRef } from "react";

const STATES_OF_INDIA = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
];

const LoginBox = () => {
    const username_r = useRef();
    const password_r = useRef();

    return (
        <div className="p-8 bg-[#4f4f4f] text-white font-mont rounded-2xl flex flex-col gap-4 shadow-[#ffffff10] shadow-lg">
            <div className="flex gap-4">
                <div className="flex flex-col">
                    <label className="text-xl font-bold mb-3">
                        Username
                    </label>
                    <input
                        className="text-black px-2 py-3 text-lg rounded-lg h-12"
                        ref={username_r}
                        placeholder="Enter Username"
                        onChange={() => {
                            console.log(username_r.current.value);
                        }}
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-xl font-bold mb-3">Password</label>
                    <input
                        className="text-black px-2 py-3 text-lg rounded-lg h-12"
                        ref={password_r}
                        placeholder="Enter Password"
                        onChange={() => {
                            console.log(password_r.current.value);
                        }}
                        type="password"
                    />
                </div>
            </div>
            <button className="px-2 py-4 bg-black rounded-xl text-xl font-bold">Login</button>
        </div>
    );
};

export default LoginBox;
