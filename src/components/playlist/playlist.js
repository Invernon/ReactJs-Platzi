import React, { Component } from 'react';
import Media from './media'
import './playlist.css';


function Playlist(props) {
    // const categories = props.data.categories
    return ( 
        <div className="Playlist">
            {
                props.playlist.map((item) => {
                    return <Media
                        openModal = {props.handleOpenModal}
                        key={item.id}
                        {...item}
                    />
                })
            }
        </div>
    )
}

// class Playlist extends Component {
//     render() {
//         console.log(this.props.data)
//         // Una Lista.
//         // const playlists = this.props.data.categories[0].playlist
//         const categories = this.props.data.categories

//         return (
//             categories.map((cat) => {
//                 return <div className="Categories">
//                     <h1> {cat.title} </h1>
//                     <div className="Playlist">
//                         {
//                             cat.playlist.map((item) => {
//                                 return <Media
//                                     key={item.id}
//                                     // image={item.cover}
//                                     // title={item.title}
//                                     // type={item.type}
//                                     // author={item.author}
//                                     // Mandar todas estas propiedades se traduce a utilizar 
//                                     {...item}
//                                 />
//                             })
//                         }
//                     </div>
//                 </div>

//             })



//         )
//     }
// }

export default Playlist;