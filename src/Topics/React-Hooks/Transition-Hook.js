import React, { useState, useTransition } from "react";

const mockData = [
  "apple",
  "banana",
  "cherry",
  "date",
  "fig",
  "grape",
  "kiwi",
  "lemon",
  "mango",
  "nectarine",
];

// export default function SearchBar() {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState([]);
//   const [isPending, startTransition] = useTransition();

//   const handleSearch = (e) => {
//     const { value } = e.target;
//     setQuery(value);

//     startTransition(() => {
//       const filteredResults = mockData.filter((item) =>
//         item.toLowerCase().includes(value.toLowerCase())
//       );
//       setResults(filteredResults);
//     });
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={query}
//         onChange={handleSearch}
//         placeholder="Search..."
//       />
//       {isPending ? (
//         <div>Loading...</div>
//       ) : (
//         <ul>
//           {results.map((result, index) => (
//             <li key={index}>{result}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// import React, { useState, useTransition } from "react";

export default function TransitionHook() {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);

  const [isPending, startTransition] = useTransition();

  const handleOnChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
    startTransition(() => {
      const list = [];
      for (let i = 0; i < 20000; i++) {
        list.push(e.target.value);
      }
      setData(list);
    });
  };

  return (
    <>
      <input onChange={handleOnChange} value={value} name="text" type="text" />
      {isPending ? (
        "Loading..."
      ) : (
        <ul>
          {data.map((info, index) => (
            <li key={index}>{info}</li>
          ))}
        </ul>
      )}
    </>
  );
}
