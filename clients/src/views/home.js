import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardAwards from "../components/card";
import { fetchAward } from "../function/award";

export default function Home() {
  const dispatch = useDispatch();
  const { awards } = useSelector((s) => s);
  useEffect(() => {
    dispatch(fetchAward());
  }, []);
  return (
    <>
      <header>
        <h1>Awards</h1>
      </header>
      {awards.length > 0 ? (
        awards.map((award) => <CardAwards award={award} key={award.id} />)
      ) : (
        <h1>No Data</h1>
      )}
    </>
  );
}
