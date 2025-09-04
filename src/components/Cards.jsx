import { useState, useEffect } from "react";
import MoreAbout from "./MoreAbout";
import axios from "axios";

const Cards = ({section}) => {
    const [persons, setPerson] = useState([]);
    const [moreAbout, setMoreAbout] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    useEffect(() => {
        const getUsers = async () => {
            const res = await axios.get('https://rickandmortyapi.com/api/character');
            setPerson(res.data.results);
        }

        getUsers();
    }, []);

    return (
        <section className="flex flex-col text-center">
            <h1 className="m-12 text-amber-50 font-bold text-4xl">{section}</h1>
            <article className="flex flex-wrap justify-center items-center">

                {persons.map((person) => {
                    return (
                        <div key={person.id} className= "flex gap-4 flex-col items-start bg-green-900 shadow-lg shadow-green-500 m-3.5 text-white rounded-2xl max-w-2xl sm:bg-green-950 p-5 hover:shadow-green-300">
                            <h1 className="font-bold">{person.name}</h1>
                            <img className="rounded-2xl" src={person.image} alt={person.name} />
                            <p>{person.status}</p>
                            <p>{person.species}</p>
                            <p>{person.gender}</p>
                            <p>{person.origin.name}</p>
                            <p>{person.location.name}</p>
                            <button onClick={() => setMoreAbout(!moreAbout)}>More About</button>
                            {moreAbout && (
                                <MoreAbout name={person.name} status={person.status} species={person.species} gender={person.gender} origin={person.origin} location={person.location} />
                            )}
                        </div>
                    )
                })}
            </article>
        </section>

        );
}

export default Cards;