import React from "react";

export default function CardSuggestions(props) {
    const handleCardClick = ()=>{
        props.onClick(props.data);
    }
    return (
        <div className=" h-1/5 w-full flex flex-wrap justify-start" onClick={handleCardClick}>
            <div className={"h-full w-2/5 flex justify-center items-center"}>

                <img className={"h-11/12 w-11/12 rounded-2xl"} src={props.data.videoInfo.snippet.thumbnails.default.url}></img>
            </div>
            <div className={"h-full w-3/5 flex-col justify-start items-start p-1 "}>
                <div>
                    <text className={"font-bold text-white"}> {props.data.videoInfo.snippet.title} </text>
                </div>
            </div>
        </div>

    );
}