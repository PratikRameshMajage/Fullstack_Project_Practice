import React from "react";

const Card = () => {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Amazon Basic",
      des: "Lorem ipsum dolor sit amet consectetur, Possimus, eos?",
    },
    {
      image:
        "https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Amazon Basic",
      des: "Lorem ipsum dolor sit amet consectetur, Possimus, eos?",
    },
    {
      image:
        "https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Amazon Basic",
      des: "Lorem ipsum dolor sit amet consectetur, Possimus, eos?",
    },
    {
        image:
          "https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Amazon Basic",
        des: "Lorem ipsum dolor sit amet consectetur, Possimus, eos?",
      },
      {
        image:
          "https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Amazon Basic",
        des: "Lorem ipsum dolor sit amet consectetur, Possimus, eos?",
      },
      
  ];
  return (
    <>
      <div className="w-full h-[90%] flex justify-center items-center gap-10">
        {data.map((elem, index) => (
          <div>
            <div className="w-52 bg-zinc-100 rounded-md overflow-hidden">
              <div className="w-52 h-32 bg-zinc-300 text-zinc-500 text-xl font-semibold">
                <img src={elem.image} alt="Amazon" srcset="" />
              </div>
              <div className="w-full px-3 py-2 text-zinc-500">
                <h2 className="font-semibold">{elem.name}</h2>
                <p className="text-xs">{elem.des}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
