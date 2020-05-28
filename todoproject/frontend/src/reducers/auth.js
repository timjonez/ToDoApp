const initailState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    isLoading: false,
    user: null
};

export default function (state = initailState, action) {
    switch (action.type) {
        default:
            return state;
    }
}