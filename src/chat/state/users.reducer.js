import * as fromActions from './actions';

const users = (state = [], action) => {
    switch (action.type) {
        case fromActions.ADD_USER:
            return state.concat([{ name: action.name, id: action.id }])
        case fromActions.USERS_LIST:
            return action.users;
        default:
            return state
    }
};

export default users;