import * as loginActions from './login';
import * as registerActions from './register';
import * as userActions from './user';
import * as residentActions from './resident';
import * as visitorActions from './visitors';

export const doLogin = loginActions.doLogin,
    doRegister = registerActions.doRegister,
    getCurrentUser = userActions.loggedInUser,
    fetchUsers = userActions.fetchUsers,
    logout = userActions.logout,
    residentForm = residentActions.residentForm,
    visitorForm = visitorActions.visitorsForm