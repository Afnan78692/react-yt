// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Card from "./components/Card";

// const App = () => {
//   const [userData, setUserData] = useState([]);
//   const [index, setIndex]= useState(1)

//   const getData = async () => {
//     const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`,);
//     setUserData(response.data);
//   };


//   useEffect(function(){
//    getData();   
//   },[index])

//   let printUserData = <h3 className="text-gray-400 text-s absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-green-200">Loading....</h3>;

//   if (userData.length > 0) {
//     printUserData = userData.map(function (elem, idx) {

//       return (
//       <Card elem={elem}/>
//       );
//     });
//   }

//   return (
//     <div className="bg-black overflow-auto h-screen p-4 text-white">
//       <h1 className="fixed text-8xl">{index}</h1>   
//       <div className="flex h-[80%] flex-wrap gap-4 p-3">{printUserData}
//       </div>

//     <div className="flex  justify-center gap-6 items-center p-4">

//       <button
//       onClick={()=>{
//         if (index>1){
//         setIndex(index-1)
//         setUserData([])
//       }
//       }} 
//       className="bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold">
      
//       Prev
//       </button>
      
//       <h2>Page {index}</h2>

//       <button
//       onClick={()=>{
//       setIndex(index+1)
//       setUserData([])
//       }}
//       className="bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold">
      
//       Next
//       </button>

//       </div>

//     </div>
//   );
// };

// export default App;



import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    if (loading) return;

    setLoading(true);
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=10`
    );

    // append data (not replace)
    setUserData((prev) => [...prev, ...response.data]);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [page]);

  // infinite scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 100
      ) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black min-h-screen p-4 text-white">
      <div className="flex flex-wrap gap-4 p-3 justify-center">
        {userData.map((elem, idx) => (
          <Card key={idx} elem={elem} />
        ))}
      </div>

      {loading && (
        <h3 className="text-center text-green-300 font-semibold p-4">
          Loading more...
        </h3>
      )}
    </div>
  );
};

export default App;
