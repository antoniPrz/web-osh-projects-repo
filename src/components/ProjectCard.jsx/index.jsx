export  function Projectcard() {
    return ( <div className="border-2 border-sky-900 ">
        {/* header */}
        <div className="flex">
            <img src="https://github.com/alisha17.png" alt=""  className="h-10 rounded-full"/>
            <span className="">Nopmbre de usuario</span>
        </div>
        {/* Hero */}
        <div className="h-32 w-80 ">
            <img src="https://images.unsplash.com/photo-1631378297854-185cff6b0986?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80" alt=""  className="object-cover "/>
            <button className=""></button>
        </div>
        <footer className="">
            <span className="">Robot Inteligente</span>
        </footer>
    </div> );
}
