// Packages
import * as firebase from 'firebase/app'

// Firebase Modules
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

/**
 * @file Firebase configuration
 * @module api/firebase
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 * @see {@link https://firebase.google.com/docs/web/setup}
 */

/**
 * @property {object} config - Firebase web config
 * @property {string} config.apiKey - API key
 * @property {string} config.authDomain - Auth domain
 * @property {string} config.databaseURL - Default database url
 * @property {string} config.projectId - Project id
 * @property {string} config.storageBucket - Storage bucket url
 * @property {string} config.messagingSenderId - Messaging id
 * @property {string} config.appId - App id
 */
const config = {
  apiKey: 'AIzaSyDbXuBJTUnFsX61sm7iC_9B1wZeBhxNfBA',
  authDomain: 'dbkyearinreview.firebaseapp.com',
  databaseURL: 'https://dbkyearinreview.firebaseio.com',
  projectId: 'dbkyearinreview',
  storageBucket: 'dbkyearinreview.appspot.com',
  messagingSenderId: '123743389869',
  appId: '1:123743389869:web:40b38b62673cde7b'
}

const api = firebase.initializeApp(config)
const database = firebase.database()
const storage = firebase.storage()

export { api, database, storage }
