import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    if (fetchStatus,fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;

  fetch("http://localhost:8080/items", { signal })
    .then((res) => res.json())
    .then((data) => {
    });
    return()=> {
      console.log("cleaning up Useeffect.");
      controller.abort();
    };
},[fetchStatus]);

  return (
    <>
      <div>
        FetchDone : {fetchStatus.fetchDone}
        CurrentlyFetching: {fetchStatus.currentlyFetching}
      </div> 
    </>
  );
};

export default FetchItems;
