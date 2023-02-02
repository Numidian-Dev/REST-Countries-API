import Countries from "../components/Countries/Countries";
import Header from "../components/Header/Header";
import Link from "next/link";
import Result from "../components/SearchBar/Result";

export default function Home({ countries }) {
  const { search } = typeof window != "undefined" && window.location;
  let query = new URLSearchParams(search).get("search");

  return (
    <div>
      <Header />
      {query ? (
        <Result />
      ) : (
        <>
          <Countries />
        </>
      )}
    </div>
  );
}

export async function getStaticProps() {
  const countries = await fetch("https://restcountries.com/v2/all").then((r) =>
    r.json()
  );
  return {
    props: {
      countries,
    },
  };
}
