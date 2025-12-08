import React, { useState } from "react";


const LocationSearchPanel = () => {

    const locations = [
        "Sai Shakti Residency, 6th Cross, Lakshmi Nagar, Whitefield, Bengaluru, Karnataka 560066",
        "12/4 Shanti Villa, MG Road, Andheri East, Mumbai, Maharashtra 400069",
        "Flat 3B, Green Heights Apartment, Salt Lake Sector 2, Kolkata, West Bengal 700091",
        "27 Lotus Enclave, VIP Road, Jagatpura, Jaipur, Rajasthan 302017",
    ];

    const vehicles = [
        {
        img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSU3KL3chmwBpFis5dO2wxhpAF7UDOvrzD45XyPq4d02vNSGx0J",
        name: "Mini Car",
        time: "20 mins",
        price: "₹220",
        title: "Affordable, comfortable mini rides",
        capacity: 4
        },
        {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTOhrbMbZ9ocOsIv0kob4rzuLQbG3uM5LkXXu9b6G0YOPAos9H",
        name: "Bike",
        time: "10 mins",
        price: "₹57",
        title: "Affordable bike rides",
        capacity: 2
        },
        {
        img: "data:image/jpeg;base64,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",
        name: "Auto",
        time: "15 mins",
        price: "₹82",
        title: "Affordable auto rides",
        capacity: 3
        },
        {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPCm-GlvotPYU7TdKtaKtLht-ntnLI2wSEIQ&s",
        name: "Sedan",
        time: "25 mins",
        price: "₹320",
        title: "Comfortable sedans,top quality drivers",
        capacity: 4
        },
    ];

    const [showVehicles, setShowVehicles] = useState(false);


return (
        <>
            {/* LOCATION LIST - SHOW ONLY WHEN VEHICLES ARE HIDDEN */}
            {!showVehicles && (
                <div className="w-full h-screen p-2 overflow-auto">
                    {locations.map((location, index) => (
                        <div
                            key={index}
                            onClick={() => setShowVehicles(true)}
                            className="flex p-2 gap-4 border rounded-xl border-[#c6c3c3] active:border-black active:border-3 pb-4 pt-4 cursor-pointer"
                        >
                            <i className="ri-map-pin-fill text-2xl bg-[#E8E8E8] p-2 rounded-full"></i>
                            <h1 className="opacity-60">{location}</h1>
                        </div>
                    ))}
                </div>
            )}

            {/* VEHICLE SECTION - SHOW ONLY AFTER CLICKING LOCATION */}
            {showVehicles && (
                <div className="p-4 font-[Uber-medium] overflow-auto">
                    <h1 className="w-full text-center mb-6 text-xl font-[Uber-Medium]">
                        Choose a trip
                    </h1>

                    {vehicles.map((v, i) => (
                        <div
                            key={i}
                            className="flex justify-between items-center gap-4 p-3 rounded-xl border border-[#c6c3c3] active:border-black active:border-3 mb-1 cursor-pointer"
                        >
                            <img
                                src={v.img}
                                alt={v.name}
                                className="w-14 h-14 object-cover rounded-lg"
                            />

                            <div className="flex flex-col">
                                <h2 className="text-lg font-semibold">
                                    {v.name}  
                                    <i className="ri-user-fill opacity-60 text-md pl-4">{v.capacity}</i>
                                </h2>
                                <p className="text-sm opacity-70">{v.title}</p>
                                <p className="text-xs opacity-50">{v.time}</p>
                            </div>

                            <span className="ml-auto text-lg font-semibold">
                                {v.price}
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default LocationSearchPanel;
