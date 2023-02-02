import { useRouter } from "next/router";
import Header from "../../components/Header/Header";
import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";

const Details = ({ countriesDetails }) => {
  const route = useRouter();
  const query = route.query;

  const Countrie = countriesDetails.filter(
    (filtre) => filtre.name === query.id
  );

  const countrie = Countrie[0];

  return (
    <div className="container-details">
      <Header />
      <div className="details">
        <Link href="/">
          <button className="back-btn">
            <BiArrowBack className="back-icon" /> Back
          </button>
        </Link>
        <div className="countrie-details">
          <div className="flag">
            <img src={countrie.flag} alt={countrie.name} />
          </div>
          <div className="countrie">
            <h1>{countrie.name}</h1>
            <div className="container-countrie">
              <div className="info">
                <p>
                  <span className="name-info">Native Name: </span>
                  {countrie.nativeName}
                </p>
                <p>
                  <span className="name-info">Population: </span>
                  {countrie.population.toLocaleString("en-US")}
                </p>
                <p>
                  <span className="name-info">Region: </span> {countrie.region}
                </p>
                <p>
                  <span className="name-info">Sub Region: </span>
                  {countrie.subregion}
                </p>
                <p>
                  <span className="name-info">Capital: </span>{" "}
                  {countrie.capital}
                </p>
              </div>
              <div className="info">
                <p>
                  <span className="name-info">Top Level Domaine: </span>
                  {countrie.topLevelDomain}
                </p>
                <p>
                  <span className="name-info">Currencies: </span>
                  {countrie.currencies !== undefined
                    ? countrie.currencies[0].name
                    : " "}
                </p>
                <p>
                  <span className="name-info">Languages: </span>
                  {countrie.languages[0].name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
export async function getStaticProps({ params }) {
  const countriesDetails = await fetch("https://restcountries.com/v2/all").then(
    (r) => r.json()
  );
  return {
    props: {
      countriesDetails,
    },
  };
}
export async function getStaticPaths() {
  const posts = await fetch("https://restcountries.com/v2/all").then((r) =>
    r.json()
  );
  return {
    paths: posts.map((post) => ({
      params: { id: post.name.toString() },
    })),
    fallback: false,
  };
}
