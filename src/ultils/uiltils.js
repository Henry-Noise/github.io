export const CURRENT_ID = localStorage.getItem('ID');
export const SET_CURRENTID = (props)=> {
   return localStorage.setItem('ID', props)
};
export const REMOVE_CURRENT_ID = (props)=> {
   return localStorage.removeItem(props)
};
export const SET_LANGUAGE = (lang)=> {
   return localStorage.setItem('LANGUAGE', lang)
}

export const GET_LANGUAGE = ()=> {
   return localStorage.getItem('LANGUAGE')
}