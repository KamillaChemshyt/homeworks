export const SHOW_MODAL = 'SHOW_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';


export const showModal = (id) => {
    return {
        type: SHOW_MODAL,
        editItemId: id,
    }
}


export const closeModal = () => {
    return {
        type: CLOSE_MODAL,
    }
}