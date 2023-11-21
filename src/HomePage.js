import React, {useEffect} from "react";
import {useState} from "react";
import CardSuggestions from "./CardSuggestions";
import { fetchVideoIds } from "./api/search";
import { debounce } from 'lodash';

export default function HomePage() {
    const [inputText, setInputText] = useState("");
    var [videoIds, setVideoIds] = useState([]);
    
    const [videos, setvideos] = useState([]);
    const getVideos = async () => {
        try {
            let imageURLs = [];
            for (let i = 0; i < 10; i++) {
                const res = await fetch('https://random.imagecdn.app/500/150');
                const imageBlob = await res.blob();
                imageURLs[i] = URL.createObjectURL(imageBlob);
            }
            setvideos(imageURLs);
            console.log(videos);

        } catch (error) {
            console.error("Error fetching videos:", error);
        }
    };
    useEffect(() => {
        // Use an IIFE (Immediately Invoked Function Expression) to call async function
        ( async () => {
             await getVideos();

        })();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchVideoIds(inputText);
            setVideoIds(data);
            console.log(inputText, "text received");
            console.log(videoIds);
        };
    
        fetchData();
    }, [inputText]);

    const handleChange = () => {
        var inputValue = document.getElementById("523").value;
        setVideoIds([]);
        setInputText(inputValue);
    };

    const sendInput = async () => {
        const data = await fetchVideoIds(inputText);
        setVideoIds(data);
        console.log(inputText, "text received");
    };

        return (
            <div className={"h-screen w-screen justify-evenly flex-col"}>
                <div className={"h-1/5 w-full flex  bg-amber-300 justify-center  items-center"}>
                    <input onChange={handleChange} id={"523"} value={inputText} className={"h-12 border-none w-5/12 rounded-3xl p-4"  }></input>
                    <button onClick={sendInput} className={"h-12 border-4 border-none w-3/12 rounded-3xl text-center text-white bg-black mx-7 "}>Search
                    </button>
                </div>
                <div className={"h-4/5 flex bg-pink-500 items-center justify-evenly"}>
                    <div className={"h-3/4 w-8/12 border-none flex justify-center  "}>
                        <iframe className={"h-full w-11/12"} src="https://www.youtube.com/embed/xNRJwmlRBNU"
                                allowFullScreen></iframe>
                    </div>
                    <div className={"h-3/4 w-3/12 border-4 border-black flex-col justify-start  "}>
                        <CardSuggestions data={videos[0]}/>
                        <CardSuggestions data={videos[1]}/>
                        <CardSuggestions data={videos[2]}/>
                        <CardSuggestions data={videos[3]}/>
                        <CardSuggestions data={videos[4]}/>
                    </div>
                </div>

            </div>
        );

}