import { ADD, DELETE, UPDATE } from "../Actions/actionTypes";

let allUsers = JSON.parse(localStorage.getItem('users') || '[]');

// allUsers = [{} , {}];

const crudReducer = (state = allUsers, action) => {
    switch (action.type) {
        case ADD:
            // Insert
            console.log("User Add Data", action.payload);

            state.push(action.payload);
            localStorage.setItem('users', JSON.stringify(state));

            return state;

        case DELETE:
            let deleteUserData = state.filter((data, index) => index != action.payload);

            localStorage.setItem('users', JSON.stringify(deleteUserData));

            return deleteUserData;

        case UPDATE :
            const updateUser = state.map((user, index) => {
                if(user.id == action.payload.id) {
                    return {
                        id : action.payload.id,
                        username : action.payload.username,
                        password : action.payload.password,
                    }
                }else {
                    return user;
                }
            })

            localStorage.setItem('users',JSON.stringify(updateUser));

            return updateUser;
        default:
            return state;
    }
}

export default crudReducer;