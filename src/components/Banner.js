import React, { useState, useEffect } from 'react'
import '../design/Banner.css'
import axios from '../axios'
import requests from '../requests'

export const Banner = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginal);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );

            return request;
        }

        fetchData();
    }, []);

    // console.log("abc");
    // console.log(movie);

    // a standard function just to truncate the paragraph or something like that
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <header className='banner'
            style={{
                backgroundSize: "cover",
                backgroundPosition: "center center",
                // here question mark actually means that if somehow the required movie is not there then
                // app will not gonna crash and handle somehow
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            }}>

            <div className="banner_contents">
                <h1 className="banner_title">
                    {/* some api actually does not give consistent information so movie's name can be present in different format */}
                    {/* // this is the way to deal that */}
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>

                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>

                <h1 className="banner_description">
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>

            {/* just to have that faded effect at the bottom */}
            <div className="banner--fadeBottom" />

        </header>
    )
}
