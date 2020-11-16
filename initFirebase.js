import firebase from 'firebase/app';
import 'firebase/auth';
import { FIREBASE_API_KEY } from 'root/keys';

const projectId = 'playground2712';

export default firebase.initializeApp({
  apiKey: FIREBASE_API_KEY,
  authDomain: `${projectId}.web.app`,
  databaseURL: `https://${projectId}.firebaseio.com`,
  projectId,
});
