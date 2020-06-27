import React, { useEffect } from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-grids'
import { useSelector, useDispatch } from 'react-redux'
import User from './User';
import Data from '../redux/user/Constatnt'

function UserContainer() {

    /** Below are state value variables */
    const loading = useSelector(state => state.user.loading);
    const users = useSelector(state => state.user.users);
    const error = useSelector(state => state.user.error);
    const showGrid = useSelector(state => state.user.showGrid);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: Data.Get_USERS });
    }, [])

    return (loading) ? (<h2>Loading...</h2>)
        : (error) ? (<h2>{error}</h2>) : (
            <div>
                {showGrid ? (
                    <div>
                        <h2>User List</h2>
                        <GridComponent dataSource={users}>
                            <ColumnsDirective>
                                <ColumnDirective field='id' headerText='User ID' isPrimaryKey={true}></ColumnDirective>
                                <ColumnDirective field='name' headerText='User Name'></ColumnDirective>
                                <ColumnDirective field='email' headerText='Email' ></ColumnDirective>
                                <ColumnDirective field='phone' headerText='Phone' ></ColumnDirective>
                            </ColumnsDirective>
                        </GridComponent>
                        <div>
                            <button onClick={() => { dispatch({ type: 'DISPLAY_USER_PAGE', payload: false }) }}>Add User</button>
                        </div>
                    </div>
                ) : null}
                {showGrid && !loading ? null : (
                    <div>
                        <User dispatch={dispatch} />
                    </div>
                )}
            </div>
        )
}

export default UserContainer
