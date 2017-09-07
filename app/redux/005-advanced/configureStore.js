
import { createStore, applyMiddleware } from 'redux';
import debounce from 'lodash/debounce';
import log from '../../../react/webpack/logw';
import todoApp from './reducers';
import { createLogger } from 'redux-logger';
import promisify from 'redux-promise';

const logger = store => next => {

    if (!console || !console.group) {

        return next;
    }

    return action => {
        console.group(action.type);
            log('%c action', 'color:blue', action);
            log('%c prev', 'color:gray', store.getState());
            const returnValue = next(action);
            log('%c next', 'color: green', store.getState())
        console.groupEnd(action.type);
        return returnValue;
    }
};

const wrapDispatchWithMiddlewares = (store, middlewares) => {
    middlewares.forEach(middleware => store.dispatch = middleware(store)(store.dispatch))
};

const configureStore = () => {

    const middlewares = [promisify];

    if (process.env.NODE_ENV !== 'production') {

        middlewares.push(createLogger())
    }

    return createStore(
        todoApp,
        applyMiddleware(...middlewares) // applyMiddleware returns an redux enhancer
    );
};

export default configureStore;