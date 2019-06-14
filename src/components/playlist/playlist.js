import React, { Component } from 'react';
import Media from './media'
import './playlist.css';
import Play from '../icons/play';
import Pause from '../icons/pause';
import FullScreen from '../icons/full-screen';
import Volume from '../icons/volume';

function Playlist(props) {
    const categories = props.data.categories

    return (
        categories.map((cat) => {
            return <div className="Categories">
                <h1> {cat.title}  
                <Play color="red" size="50" /> 
                <Pause color="red" size="50" />
                <Volume color="red" size="50" />
                <FullScreen color="red" size="50" />
                  </h1>
                
                <div className="Playlist">
                    {
                        cat.playlist.map((item) => {
                            return <Media
                                key={item.id}
                                // image={item.cover}
                                // title={item.title}
                                // type={item.type}
                                // author={item.author}
                                // Mandar todas estas propiedades se traduce a utilizar 
                                {...item}
                            />
                        })
                    }
                </div>
            </div>
        })
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