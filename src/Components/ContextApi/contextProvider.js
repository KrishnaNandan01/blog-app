import BlogContext from "./context"

const ContextProviderDetails = (props)=>{
    return(
    <BlogContext.Provider value={{value:"hello"}}>
        {props.children}
    </BlogContext.Provider>
    )
};

export default ContextProviderDetails;