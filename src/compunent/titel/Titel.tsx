interface titel {
    name: string
}
const Titel = ({ name }: titel) => {
    return (
        <strong
            className="text-3xl text-gray-800 block my-5"
        >{name}</strong>
    )
}

export default Titel