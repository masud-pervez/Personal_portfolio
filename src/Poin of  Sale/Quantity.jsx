// import React, { useState } from "react";

// export default function Quantity({childToParent}) {
//   const [quantity, setQuantity] = useState(1);
  
//   const handleIncrement = ()=>{
//     setQuantity(quantity + 1)
//     childToParent(quantity)
//   };
//   const handleDecrement = ()=>{
//     setQuantity(quantity - 1)
//     childToParent(quantity)
//   };

//   return (
//     <div>
//       <button
//         type="button"
//         className="btn btn-outline-info px-2 py-0 mx-2"
//         onClick={handleIncrement}
//       >
//         +
//       </button>

//       <button
//         type="button"
//         className="btn btn-outline-danger px-2 py-0"
//         onClick={handleDecrement}
//       >
//         -
//       </button>
//     </div>
//   );
// }