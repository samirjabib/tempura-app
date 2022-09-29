import { compose, applyMiddleware} from 'redux';
import { persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist';
import { legacy_createStore as createStore } from 'redux';
import { rootReducer } from './root-reducer';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key:'root',
    storage,
    whitelist:['']
}



const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
    process.env.NODE_ENV !== 'production' && logger,
    sagaMiddleware,
  ].filter(boolean);

const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;


const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares))


export const store = createStore ( 
    persistReducer,
    undefined,
    
)