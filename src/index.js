import configureStore from "./store/configureStore";

import { loadBugs, assingBugToUser } from "./store/bugs";

const store = configureStore();
//UI Layer
store.dispatch(loadBugs());

setTimeout(() => store.dispatch(assingBugToUser(1, 4)), 2000);
