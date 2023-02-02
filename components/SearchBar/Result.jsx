import { useEffect, useState } from 'react';
import Link from 'next/link'
import axios from "axios";
import Search from '../SearchBar/SearchBar';
const Result = () => {
    const [countries, setCountries] = useState(null);
    const [loading, setLoading] = useState(true);


    const { search } = typeof window != "undefined" && window.location;
    let query = new URLSearchParams(search).get("search");
    const test = query;
    const searchAarray = loading ? "" : countries.filter((filtre) =>
        filtre.name.includes(query)
    );
    useEffect(() => {
        const load = async () => {
            setLoading(true);
            const res = await axios.get("https://restcountries.com/v2/all", {
                method: "get",
                headers: {
                    Accept: "application/json",
                },
            });
            setCountries(res.data);
            setLoading(false);
        };
        load();
    }, []);

    return (
        <div className="container">

            <Search />
            <div className="container-countries">
                {loading
                    ? ""
                    : searchAarray
                        .map((countrie) => {
                            return (
                                <Link key={countrie.name} href={`details/${countrie.name}`}>
                                    <div className="card" >
                                        <div className="card-img">
                                            <img src={countrie.flag} alt={countrie.name} />
                                        </div>
                                        <div className="card-decription">
                                            <h3>{countrie.name}</h3>
                                            <p><span className="name">Population:</span> {countrie.population}</p>
                                            <p><span className="name">Region:</span> {countrie.region} </p>
                                            <p><span className="name">Capital:</span> {countrie.capital}</p>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
            </div>
        </div>
    );
}

export default Result;
