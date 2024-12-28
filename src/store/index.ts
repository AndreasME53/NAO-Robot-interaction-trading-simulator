import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagaMonitor from '@redux-saga/simple-saga-monitor';
import rootSaga from 'store/sagas';
import rootReducer from 'store/reducers';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
  const composeEnhancer: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer, {}, composeEnhancer(applyMiddleware(sagaMiddleware)));

  sagaMiddleware.run(rootSaga);
  return store;
}
