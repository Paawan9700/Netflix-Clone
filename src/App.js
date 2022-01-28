import React from 'react';
import './design/App.css';
import { Banner } from './components/Banner';
import Nav from './components/Nav';
import Row from './components/Row';
import requests from './requests';

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />

      {/* using row component to show all the different categories */}
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginal} isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
