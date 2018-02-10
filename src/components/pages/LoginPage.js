import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import LoginForm from '../forms/LoginForm';
import LoginHeader from '../sections/LoginHeader';
import TopBalanceUsers from '../sections/TopBalanceUsers';
import './styles/LoginPage.css';
import RegisterForm from '../forms/RegisterForm';
import BasicBtn from '../buttons/BasicBtn';

import { connect } from 'react-redux';
import { login } from './../../reducers/authenticationReducer';
import { toggleRegisterVisibility } from './../../reducers/registerReducer';

class LoginPage extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
    };

    render() {
        return (
            <div className="loginPage">
                <Grid fluid>
                    <Row>
                        <Col xs>
                            <LoginHeader />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={3}>
                            { !this.props.registerVisible &&
                            <LoginForm
                                handleSubmit={this.handleSubmit}
                                shadow={true}
                                authenticate={this.props.login}
                                login={this.props.login}
                            />
                            }
                            { this.props.registerVisible &&
                                <RegisterForm
                                    handleSubmit={this.handleSubmit}
                                    shadow={true}
                                    authenticate={this.props.login}
                                    login={this.props.login}
                                />
                            }
                        </Col>
                        <Col xs={9} style={{ textAlign: 'center' }}>
                            <TopBalanceUsers />
                        </Col>
                        <Col xs={3}>
                            <BasicBtn
                                hover
                                onClick={() => 
                                    this.props.toggleRegisterVisibility()
                                }>
                                Register 
                            </BasicBtn>
                        </Col> 
                    </Row>
                </Grid>
            </div>
        );
    }
}

const mapDispatchToProps = {
    login,
    toggleRegisterVisibility
};

const mapStateToProps = state => {
    return {
        registerVisible: state.register.registerVisible
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
