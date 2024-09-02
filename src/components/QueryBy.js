

const QueryBy = ()=>{

    let login = true;

    return(
        <>
        <h3>QueryBy & queryAllBy</h3>
        {/* hidden Elements */}
       {login ? <button>Logout</button> : <button>Login</button>}
        
        </>
    )
}
export default QueryBy;