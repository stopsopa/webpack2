
import React from 'react';

import GlobalLoaderVisible from './GlobalLoaderVisible';

import ContainerVisible from './ContainerVisible';

import LoginFormVisible from './LoginFormVisible';

import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import configPublic from '../public.config';

import {
    Button,
    Checkbox,
    Form,
    Header,
    Input,
    Message,
    Icon
} from 'semantic-ui-react'

const LoginForm = () => ([
    <LoginFormVisible>
        <Redirect to={configPublic.jwt.redirectAfterAuthenticated} />
    </LoginFormVisible>
]);

export const RootRenderArray = () => ([
    <div className="one" />,
    <div className="two" />
]);

const Root = () => ([
    <GlobalLoaderVisible/>,
    <Switch>
        <Route path="/login" component={LoginForm} />
        <Route component={ContainerVisible} />
    </Switch>,
    <RootRenderArray />
]);

export default Root;
