import { pushState } from 'redux-router';

const prefix = (address, schoolType) => `/filter/${address}/${schoolType}`;
export const select = dispatch => (school, address, schoolType) => dispatch(pushState(null, `${prefix(address, schoolType)}/preview/${school._id}`));
export const unselect = dispatch => (school, address, schoolType) => dispatch(pushState(null, `${prefix(address, schoolType)}`));
