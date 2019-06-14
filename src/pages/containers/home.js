import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories'
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal'
// import Playlist from './src/components/playlist/playlist';

class Home extends Component {
    // Estados
    state = {
        modalVisible: false,
    }

    handleOpenModal = (event) =>{
        this.setState({
            modalVisible: true,
        })
    }

    handleCloseModal = (event) => {
        this.setState({
            modalVisible: false,
        })
    }

    render() {
        return (
            <HomeLayout>
                <Related />
                <Categories 
                    categories={this.props.data.categories}
                    handleOpenModal = {this.handleOpenModal}
                />
                {/* Buena práctica para colocar condicionales */}
                { this.state.modalVisible &&
                    <ModalContainer>
                        <Modal handleClick={this.handleCloseModal}>
                            <h1> ESTO ES UN PORTAL </h1>
                        </Modal>
                    </ModalContainer>
                }
            </HomeLayout>
        )
    }
}

export default Home;