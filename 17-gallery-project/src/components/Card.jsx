import React from 'react'

// function Card({elem,idx}) {
//   return (
//     <div>
//         <a href={elem.url} target="_blank">
//          <div key={idx}>
//           <div className="h-60 w-64 overflow-hidden bg-white rounded-xl">
//             <img
//               className="h-full w-full object-cover"
//               src={elem.download_url}
//             />                                                                    
//           </div>
//           <h2 className="font-bold text-lg ">{elem.author}</h2>
//         </div>
//        </a>
//     </div>
//   )
// }




function Card({ elem }) {
  return (
    <a href={elem.url} target="_blank">
      <div>
        <div className="h-60 w-64 overflow-hidden bg-white rounded-xl">
          <img
            className="h-full w-full object-cover"
            src={elem.download_url}
          />
        </div>
        <h2 className="font-bold text-lg">{elem.author}</h2>
      </div>
    </a>
  );
}
export default Card