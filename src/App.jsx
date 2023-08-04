import React from 'react';
import './App.css';
import { podcastSeries } from "./podcastSeries";

function App() {

    //Saahil here. when you change the style it all breaks
    // Where do I change the style from?

    //here and the css file
  //oki
    const frameStyle = {
        height: "150px",
        width: "1200px",
    };

    

    const dividerStyle = {
        margin: "20px 0",
        borderBottom: "2px solid black"
    };
    return (
        <div className="App">
            <h1>Stepwell Radio Podcasts</h1>
            {
                Object.keys(podcastSeries).map((series, index) =>
                    <div key={index}>
                        <h2>{series}</h2>
                        {podcastSeries[series].map((link, linkIndex) =>
                            <iframe key={linkIndex} src={link} style={frameStyle} className="podcastIframe" title={`Podcast Episode ${linkIndex + 1}`}></iframe>

                        )}
                        <div style={dividerStyle}></div>
                    </div>
                )
            }
        </div>
    );
}
export default App;
