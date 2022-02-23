const selectUser = select => select.user;
export const selectCurrentUser = select => selectUser(select).currentUser