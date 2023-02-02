import { useEffect, useState } from 'react';
import Link from 'next/link'
import axios from "axios";
import Search from '../SearchBar/SearchBar';
const Countries = () => {
    const [countries, setCountries] = useState(null);
    const [loading, setLoading] = useState(true);

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

    console.log(loading
        ? ""
        : countries
            .sort((a, b) => {
                if (a.name > b.name) {
                    return -1;
                }
                if (a.name < b.name) {
                    return 1;
                }
                return 0;
            })
            .slice(Math.max(countries.length - 9, 0)).slice(1))

    return (
        <div className="container">
            <Search />
            <div className="container-countries">
                {loading
                    ? ""
                    : countries
                        .sort((a, b) => {
                            if (a.name > b.name) {
                                return -1;
                            }
                            if (a.name < b.name) {
                                return 1;
                            }
                            return 0;
                        })
                        .slice(Math.max(countries.length - 8, 0))
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

export default Countries;
