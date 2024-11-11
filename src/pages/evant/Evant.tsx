import React from 'react'
import { useParams } from 'react-router-dom'

const Evant = () => {
    const { id } = useParams()
    return (
        <div>Evant {id}</div>
    )
}

export default Evant