import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories'
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/containers/handleError';
import VideoPlayer from '../../player/containers/video-player';
// import Playlist from './src/components/playlist/playlist';

class Home extends Component {
    // Estados
    state = {
        modalVisible: false,
        media: undefined,
    }

    handleOpenModal = (media) => {
        this.setState({
            modalVisible: true,
            media
        })
    }

    handleCloseModal = (event) => {
        this.setState({
            modalVisible: false,
        })
    }

    render() {
        return (
            <HandleError>
                <HomeLayout>
                    <Related />
                    <Categories
                        categories={this.props.data.categories}
                        handleOpenModal={this.handleOpenModal}
                    />
                    {/* Buena práctica para colocar condicionales */}
                    {this.state.modalVisible &&
                        <ModalContainer>
                            <Modal handleClick={this.handleCloseModal}>
                                <VideoPlayer 
                                    autoplay={true}
                                    src={this.state.media.src}
                                    title={this.state.media.title}
                                    />
                            </Modal>
                        </ModalContainer>
                    }
                </HomeLayout>
            </HandleError>
        )
    }
}

export default Home;