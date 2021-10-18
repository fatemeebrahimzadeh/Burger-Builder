import React from "react";
import { Component } from "react";
import Modal from '../../components/UI/Modal/Modal';
import Aux from "../AUXs/Auxs";

const withErroHandler = (WrappedComponent, axios) => {
    return (
        class extends Component {

            state = {
                error: null
            }

            componentWillMount() {
                axios.interceptors.request.use(request => {
                    this.setState({ error: null })
                });

                axios.interceptors.response.use(response => response, error => {
                    this.setState({ error: error });
                    // console.log('[withErrorHandler]', error)
                });
            }

            errorConfirmedHandler = () => {
                this.setState({ error: null });
            }

            render() {
                // console.log('[withErrorHandler]')
                return (
                    <Aux>
                        <Modal
                            show={this.state.error}
                            modelClosed={this.errorConfirmedHandler}>
                            {this.state.error ? this.state.error.message : null}
                        </Modal>
                        <WrappedComponent {...this.props} />
                    </Aux>
                );
            };
        }
    );
}

export default withErroHandler;