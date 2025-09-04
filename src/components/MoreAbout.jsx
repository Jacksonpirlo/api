const MoreAbout = ({id, img, name, status, species, gender, origin, location}) => {

    return (
        <div key={id} className="flex gap-4 flex-col items-start bg-green-900 shadow-lg shadow-green-500 m-3.5 text-white rounded-2xl max-w-2xl sm:bg-green-950 p-5 hover:shadow-green-300">
        <h2>Name: {name}</h2>
        <img src={img} alt={name} />
        <p>Status: {status}</p>
        <p>Species: {species}</p>
        <p>Gender: {gender}</p>
        <p>Origin: {origin.name}</p>
        <p>Location: {location.name}</p>
        </div>
    )
}

export default MoreAbout;