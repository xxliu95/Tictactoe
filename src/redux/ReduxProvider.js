import { PLAYERX, VALUES } from "../constants/constants";
import { Provider } from 'react-redux';
import GlobalState from './reducer';
import { createStore } from 'redux';

import React from 'react';
import App from '../components/App';

export default class ReduxProvider extends React.Component {
    constructor(props) {
        super(props);
        this.initialState = {values: VALUES, turn: PLAYERX};
        this.store = createStore(GlobalState, this.initialState);
    }

    render() {
        return (
            <Provider store={ this.store }>
                <div style={{ height: '100%' }}>
                    <App store={ this.store }></App>
                </div>
            </Provider>
        );
    }
}
