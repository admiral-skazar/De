import React from "react";

export default function CardSuggestions(props) {
    console.log(props.data)
    return (
        <div className=" h-1/5 w-full flex flex-wrap bg-white justify-start">
            <div className={"h-full w-2/5 flex justify-center items-center"}>

                <img className={"h-11/12 w-11/12 rounded-2xl"} src={props.data}></img>
            </div>
            <div className={"h-full w-3/5 flex-col justify-start items-start p-1 "}>
                <div>
                    <text className={"font-bold"}> Martin Garrix </text>
                </div>
                <div>
                    <text className={"font-light"}>Best Musician of All Time </text>
                </div>
            </div>
        </div>

    );
}