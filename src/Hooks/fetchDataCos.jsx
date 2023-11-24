// import { useState, useEffect } from "react";
// import React from "react";

// const API_URL = "http://localhost:3000/cos";

// const useFetchProduseCos = (id = "") => {
//   const [cos, setCos] = useState([]);
//   const [error, setError] = useState(false);

//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`${API_URL}/${id}`);
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const produseData = await response.json();
//         setCos(produseData);

//         setLoading(false);
//       } catch (error) {
//         setError("Eroare 888");

//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [id]);

//   return { cos, loading, error, setError };
// };

// export default useFetchProduseCos;