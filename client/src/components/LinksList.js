import React from 'react'
import {Link} from 'react-router-dom'

export const LinksList = ({links}) => {
    if(!links.length){
        return <p className = "center">no links</p>

    }
    return (
        <table>
            <thead>
            <tr>
                <th></th>
                <th>Original</th>
                <th>Shorted</th>
                <th>open</th>
            </tr>
            </thead>

            <tbody>
            {links.map((link, index) => {
            return (
                <tr key = {link._id}>
                    <td>index + 1</td>
                    <td>{link.from}</td>
                    <td>{link.to}</td>
                    <td>
                        <Link to={`/detail/${link._id}`}> open </Link>
                    </td>
                </tr>
            )

            }) }
            </tbody>
        </table>
    )
}