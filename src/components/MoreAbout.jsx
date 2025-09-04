const MoreAbout = ({name, status, species, gender, origin, location}) => {

    return (
        <>

        <h2>Name: {name}</h2>
        <p>Status: {status}</p>
        <p>Species: {species}</p>
        <p>Gender: {gender}</p>
        <p>Origin: {origin.name}</p>
        <p>Location: {location.name}</p>
        </>
    )
}

export default MoreAbout;