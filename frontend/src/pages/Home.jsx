import React from 'react'
import "remixicon/fonts/remixicon.css";
import Navigation from '../components/Navigation';

const Home = () => {
  const items = [
    {
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSU3KL3chmwBpFis5dO2wxhpAF7UDOvrzD45XyPq4d02vNSGx0J",
      title: "Trip",
    },
    {
      img: "data:image/jpeg;base64,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",
      title: "Shuttle",
    },
    {
      img: "https://example.com/img3.jpg",
      title: "Toto",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTOhrbMbZ9ocOsIv0kob4rzuLQbG3uM5LkXXu9b6G0YOPAos9H",
      title: "Bike",
    },
    {
      img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTW9lhVCihzJbpKwakWLeuSnKQrVENZarSyX9u5b4EDNl9UdG4Z",
      title: "Courier",
    },
    {
      img: "Reserve",
      title: "Reserve",
    },
    {
      img: "Rentals",
      title: "Rentals",
    },
    {
      img: "Intercity",
      title: "Intercity",
    },
  ];

  const uberOne = [
    {
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTEO5pf0zJArv_HwAOoXoAfSPddqI3xDsNwHhiiypt_LEWGL8Of",
      heading: "Uber One gets you more",
      title: "Top-rated drivers",
      subtitle: "Exceptional service on trips",
    },
    {
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSYDraA01hhPZc7Rg7YiSPKN336X3WgDYCHp9c-H92QQqgqd4PQ",
      heading: "Elevate your ride",
      title: "Request Go Sedan",
      subtitle: "Comfortably affordable sedans",
    },
    {
      img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTV51NrC4qEdGJalZBDhsV3PKes2Q2H9zv7G7Rbae4Pho2XO-yQ",
      heading: "Plan your next trip",
      title: "Travel intercity",
      subtitle: "Exceptional service on trips",
    },
  ];

  return (
    <>
      <div className="w-full pl-5 pt-13 pb-2 fixed bg-white">
        <img className="h-9 w-[20%]" src="logo.png" alt="" />
      </div>
      <div className="h-full w-full p-3 font-[Uber-Medium]">
        <div className="w-full bg-[#e8e8e8] rounded-full p-3 pl-5 pr-5 flex items-center justify-between mt-30">
          <div className="flex items-center justify-between">
            <i className="ri-search-line font-bold text-3xl"></i>
            <h1 className="text-xl ml-4">Where to?</h1>
          </div>
          <div className="flex items-center justify-between bg-white rounded-full p-2">
            <i className="ri-calendar-event-line font-bold text-2xl"></i>
            <h1 className="text-lg ml-4">Later</h1>
          </div>
        </div>
        <div className="mt-5">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl">Suggestions</h1>
            <i className="ri-arrow-right-line text-2xl bg-[#f3f3f3] rounded-full p-2"></i>
          </div>
          <div className="mt-6 grid grid-cols-4 gap-2">
            {items.map((item, index) => (
              <div key={index} className="bg-[#f3f3f3] p-4 rounded-2xl">
                <img
                  className="w-16 h-16 rounded-full mx-auto"
                  src={item.img}
                  alt={item.title}
                />
                <h1 className="text-center mt-1">{item.title}</h1>
              </div>
            ))}
          </div>
          <div className="w-full h-45 overflow-hidden flex items-center justify-between bg-[#EBD4FE] rounded-xl border-2 border-[#D6C4E6] mt-4">
            <div className="w-[60%] p-4 gap-10 flex flex-col items-start justify-between">
              <h1 className="text-lg font-semibold">
                For when you need more room
              </h1>
              <button className="p-3 bg-white rounded-full">
                Request Uber XL
              </button>
            </div>
            <img
              className="object-cover w-[40%] h-full"
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQpsdYeQ7SsiO-MvhP7MKPHzTZwY7a5wxAZisFaCf7gBoZ0bdY3"
              alt=""
            />
          </div>
          <div className="overflow-hidden mt-2">
            {uberOne.map((uberOne, index) => (
              <div
                key={index}
                className="w-full p-2 mb-4 flex flex-col shrink-0 items-start justify-between"
              >
                <h1 className="text-lg font-semibold mb-2">
                  {uberOne.heading}
                </h1>
                <img
                  className="object-cover w-full h-full rounded-xl"
                  src={uberOne.img}
                  alt=""
                />
                <h1 className="text-lg mt-3">{uberOne.title}</h1>
                <h1 className="text-md opacity-50">{uberOne.subtitle}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full bottom-0 fixed bg-white">
        <Navigation />
      </div>
    </>
  );
}

export default Home