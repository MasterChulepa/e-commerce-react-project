import {createSelector} from 'reselect'
const selectUser = select => select.user;
export const selectCurrentUser = createSelector(
    [selectUser], 
    user => user.currentUser
    )