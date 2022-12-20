import React from 'react'

const ProtectedRoute = ({isAdmin,component: Component,...rest}) => {

    const { isAuthenticated, loading, user } = useSelector(state => state.auth)
    
  return (
    <Fragment>
    {loading === false && (
        <Route
            {...rest}
            render={props => {
                if (isAuthenticated === false) {
                    return <Redirect to='/login' />
                }

                if (isAdmin === true && user.role !== 'admin') {
                    return <Redirect to="/" />
                }

                return <Component {...props} />
            }}
        />
    )}
</Fragment>
  )
}

export default ProtectedRoute
