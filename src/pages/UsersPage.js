import {useDispatch, useSelector} from "react-redux";
import {addUser, changeInput, clear, deleteAll} from "../store/usersSlice";
import User from "../components/User";

export default function UsersPage () {
    const dispatch = useDispatch();
    const {users, inputValue} = useSelector(state => state.usersReducer)

    const changeInputFunc = (e) => {
        dispatch(changeInput(e.target.value))
    }

    const addUserFunc = () => {
        dispatch(addUser(inputValue))
    }

    const clearFunc = () => {
        dispatch(clear())
    }

    const deleteAllFunc = () => {
        dispatch(deleteAll())
    }

    return (
        <>
            <div>
                <input type="text" onChange={changeInputFunc} value={inputValue}/>
                <button onClick={addUserFunc}>add user</button>

                {users.map(user =>
                    <User name={user}/>
                )}
            </div>

            <div>
                <button onClick={clearFunc}>clear</button>
                <button onClick={deleteAllFunc}>delete all</button>
            </div>
        </>
    )
}