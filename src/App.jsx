import React from 'react';
import './App.css';

function App() {
    const podcastLinks = [
        "https://podcasters.spotify.com/pod/show/stepwell-radio/embed/episodes/Understanding-Elections-Part-2-In-conversation-with-Sarthak-Bagchi-Interviewed-by-RJ-Ray-and-RJ-Aditi-e26nur8/a-aa3rk0i",
        "https://podcasters.spotify.com/pod/show/stepwell-radio/embed/episodes/Understanding-Elections-Part-1-In-conversation-with-Sarthak-Bagchi-Interviewed-by-RJ-Ray-and-RJ-Aditi-e26nupi",
        "https://podcasters.spotify.com/pod/show/stepwell-radio/embed/episodes/Psychology-of-Heartbreaks--In-conversation-with-Prof--Rucha-Sarwate-by-RJ-Kanav--Anjali-Choksi-e26nuld",
        "https://podcasters.spotify.com/pod/show/stepwell-radio/embed/episodes/The-Economic-Series--Ongoing-bank-crisis---In-conversation-with-Prof--Agarwal--Prof--Shah-and-Prof--Jhaveri-by-RJ-Aditi-and-RJ-Vani-e26nuk0",
        "https://podcasters.spotify.com/pod/show/stepwell-radio/embed/episodes/Short-Stories-with-Insiya-Episode-1-by-RJ-Insiya-e26nuj9",
        "https://podcasters.spotify.com/pod/show/stepwell-radio/embed/episodes/Shoorveer-Ep-2---In-conversation-with-Mrs--Sugandha-Thakran-with-PJ-Pranav--PJ-Sage-e26nuc4",
        "https://podcasters.spotify.com/pod/show/stepwell-radio/embed/episodes/Letters-to-the-dead-by-RJ-Jiya-with-RJ-Kavyan--RJ-Sage--RJ-Muskan-and-RJ-Kanav-e26nub6",
        "https://podcasters.spotify.com/pod/show/stepwell-radio/embed/episodes/Know-your-professor---In-conversation-with-Professor-Prachi-Vaidya-e26nu9n",
        "https://podcasters.spotify.com/pod/show/stepwell-radio/embed/episodes/Intangible-Love-e26nu6u",
        "https://podcasters.spotify.com/pod/show/stepwell-radio/embed/episodes/Future-of-higher-education-in-India---Professor-Pankaj-Chandra-in-Conversation-with-Professor-Maya-Jasanoff-e26nu2o",
        "https://podcasters.spotify.com/pod/show/stepwell-radio/embed/episodes/Creativity-and-Career---In-conversation-with-Professor-Kunal-Basu-e26nu1f",
        "https://podcasters.spotify.com/pod/show/stepwell-radio/embed/episodes/Clickbait-journalism---In-conversation-with-Prof--Ananya-Desai-e26nu0o",
        "https://podcasters.spotify.com/pod/show/stepwell-radio/embed/episodes/Discussing-the-National-Education-Policy-2020-with-Professor-Pankaj-Chandra-Vice-Chancellor--Ahmedabad-University-e1g0tt3",
        "https://podcasters.spotify.com/pod/show/stepwell-radio/embed/episodes/Climactic-Conversations-Episode-4-Communicating-Climate-Change-e1dik55",
        "https://podcasters.spotify.com/pod/show/stepwell-radio/embed/episodes/Climactic-Conversations-Episode-3-Trouble-in-the-Haystack--Effect-of-Climate-Change-on-Agriculture-and-Food-Security-e1dik3d",
        "https://podcasters.spotify.com/pod/show/stepwell-radio/embed/episodes/Climactic-Conversations-Episode-2--Covid-19--Climate-Change-and-Cities-Part-1--2-and-3-e1diju9",
        "https://podcasters.spotify.com/pod/show/stepwell-radio/embed/episodes/Ahmedabad-Literary-Festival-Special-e1ai7e7",
        "https://podcasters.spotify.com/pod/show/stepwell-radio/embed/episodes/Climactic-Conversations-Episode-1-Climate-Experts-Answer-the-most-Googled-Questions-on-Climate-Change-e199lpl",
        "https://podcasters.spotify.com/pod/show/stepwell-radio/embed/episodes/Interview-with-Thukral-and-Tagra-Pollinator-Studio-e199l2d",
        "https://podcasters.spotify.com/pod/show/stepwell-radio/embed/episodes/Tribute-to-B-R--Ambedkar---with-Professor-Sarthak-Bagchi-e14psqb",
        "https://podcasters.spotify.com/pod/show/stepwell-radio/embed/episodes/Radio--21st-Century-with-Professor-Shashi-Prabh-and-Professor-Saptam-Patel-e14pso0",
        "https://podcasters.spotify.com/pod/show/stepwell-radio/embed/episodes/A-Scientist-among-the-Worlds-Top-2---Professor-Anjan-Ananda-Sen-e14psa1",
        "https://podcasters.spotify.com/pod/show/stepwell-radio/embed/episodes/The-Idea-of-a-Blank-Lab-with-Professor-Aditya-Vaishya-e14ps6a",
        "https://podcasters.spotify.com/pod/show/stepwell-radio/embed/episodes/COVID-Tale-by-Asha-Eapen-e14ps4e",
        "https://podcasters.spotify.com/pod/show/stepwell-radio/embed/episodes/Understanding-Stock-Markets-with-Professor-Parag-Patel-e14okjg",
        "https://podcasters.spotify.com/pod/show/stepwell-radio/embed/episodes/Climate-Change-and-Women-In-Conversation-with-Professor-Tana-Trivedi-e14okh6",
        "https://podcasters.spotify.com/pod/show/stepwell-radio/embed/episodes/Can-we-predict-the-Next-Literary-Masterpiece-e14ok8f",
        "https://podcasters.spotify.com/pod/show/stepwell-radio/embed/episodes/Lets-Talk-Mental-Health-with-Ms--Kalpana-Pareek-e14ok8l",
        "https://podcasters.spotify.com/pod/show/stepwell-radio/embed/episodes/Life-at-Ahmedabad-University-In-Conversation-with-Hitesh-Samariya-e14ojv9",
        "https://podcasters.spotify.com/pod/show/stepwell-radio/embed/episodes/Archiving-the-Achievers-Interview-with-Professor-Siddhartha-Saxena-e14ojs1",
        "https://podcasters.spotify.com/pod/show/stepwell-radio/embed/episodes/Archiving-the-Achievers-Interview-with-Rameshwar-Bhatt-e14ojq1",
        "https://podcasters.spotify.com/pod/show/stepwell-radio/embed/episodes/Quest-to-Cosmos-by-Professor-Raghavan-Rangarajan-e14ojla",
        "https://podcasters.spotify.com/pod/show/stepwell-radio/embed/episodes/Veer-Jawan-by-Late-Colonel-Sanjiv-Kaushal-e1494aa"
    ].reverse();

    const frameStyle = {
        height: "300px",
        width: "2000px",
        frameBorder: "0",
        scrolling: "no"
    };
    return (
        <div className="App">
            <h1>Highlights Of Stepwell</h1>

            <div className="iframeContainer">
                {
                    podcastLinks.map((link) => (
                        <iframe src={link} style={frameStyle}></iframe>
                    ))
                }
            </div>
        </div>
    );
}

export default App;
