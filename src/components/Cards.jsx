import { useState, useEffect } from "react";
import MoreAbout from "./MoreAbout";
import axios from "axios";

const Cards = ({section}) => {
    const [persons, setPerson] = useState([]);
    const [moreAboutById, SetMoreAboutById] = useState(null);
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

                {moreAboutById === null ? persons.map((person) => {
                    return (

                        <div key={person.id} className= "flex gap-4 flex-col items-start bg-green-900 shadow-lg shadow-green-500 m-3.5 text-white rounded-2xl max-w-2xl sm:bg-green-950 p-5 hover:shadow-green-300">
                            <h1 className="font-bold">{person.name}</h1>
                            <img className="rounded-2xl" src={person.image} alt={person.name} />
                            <p>{person.status}</p>
                            <p>{person.species}</p>
                            <p>{person.gender}</p>
                            <p>{person.origin.name}</p>
                            <p>{person.location.name}</p>
                            <button onClick={() => {SetMoreAboutById(person.id);}}>More About</button>
                        </div>

                    )
                }) 
            : persons.filter((person) => person.id === moreAboutById).map((person) => {
                return (

                        <>
                        <MoreAbout id={person.id} name={person.name} img={person.image} status={person.status} species={person.species} gender={person.gender} origin={person.origin} location={person.location} />
                        </>
                    )
            })
            }
            </article>
        </section>

        );
}

export default Cards;