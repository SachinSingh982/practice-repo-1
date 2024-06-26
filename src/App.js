import React from "react";
// import Throttling from "./Topics/Throttling";
// import Loading from "./Loading";
// const Posts = lazy(() => import("./Components/SuspenseReact"));
// const Comments = lazy(() => import("./Components/Comment"));
import Hooks from "./Topics/React-Hooks";
// import Debouncing from "./Topics/Debouncing";

const App = () => {
  return (
    <>
      {/* <Suspense fallback={<Loading />}>
        <Posts />
        <Comments />
      </Suspense> */}

      {/* <Suspense fallback={<Loading />}></Suspense> */}

      {/* Topic */}
      {/* Hooks in react */}
      <Hooks />

      {/* Debouncing in react */}
      {/* <Debouncing /> */}

      {/* ------------Throttling in react----------- */}
      {/* <Throttling /> */}
    </>
  );
};

export default App;
