import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import {
  getFirebase,
  actionTypes as rrfActionTypes
} from 'react-redux-firebase'
import { constants as rfConstants, firestoreReducer, reduxFirestore, getFirestore } from 'redux-firestore'
import testReducer from '../components/tests/testsSlice'
import {firebaseConfig} from '../fbConfig'

const extraArgument = {
  getFirebase, 
  getFirestore
}

const middleware = [
  ...getDefaultMiddleware({
        serializableCheck: {
      ignoredActions: [
        // just ignore every redux-firebase and react-redux-firebase action type
        ...Object.keys(rfConstants.actionTypes).map(
          type => `${rfConstants.actionsPrefix}/${type}`
        ),
        ...Object.keys(rrfActionTypes).map(
          type => `@@reactReduxFirebase/${type}`
        )
      ],
      ignoredPaths: ['firebase', 'firestore']
    },
    thunk: {
      extraArgument
    }
  })
]

const store = configureStore({
  reducer: {
    tests: testReducer,
    firestore: firestoreReducer,
  },
  middleware,
  enhancers: [reduxFirestore(firebaseConfig)]
})

export default store