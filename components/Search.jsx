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

const Search = () => {
    const case_number_r = useRef();
    const state_name_r = useRef();

    return (
        <div className="p-8 bg-[#4f4f4f] text-white font-mont rounded-2xl flex flex-col gap-4 shadow-[#ffffff10] shadow-lg">
            <div className="flex gap-4">
                <div className="flex flex-col">
                    <label className="text-xl font-bold mb-3">
                        Case Number
                    </label>
                    <input
                        className="text-black px-2 py-3 text-lg rounded-lg h-12"
                        ref={case_number_r}
                        placeholder="Enter Case Number"
                        onChange={() => {
                            console.log(case_number_r.current.value);
                        }}
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-xl font-bold mb-3">State Name</label>
                    <select
                        className="text-black px-2 py-3 text-lg rounded-lg h-12"
                        ref={state_name_r}
                        onChange={() => {
                            console.log(state_name_r.current.value);
                        }}
                    >
                        {STATES_OF_INDIA.map((state) => (
                            <option key={state}>{state}</option>
                        ))}
                    </select>
                </div>
            </div>
            <button className="px-2 py-4 bg-black rounded-xl text-xl font-bold">Search</button>
        </div>
    );
};

export default Search;
