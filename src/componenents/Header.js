const Header =()=> {
    return(
        <>  
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-1">
                            <img src="./media/troll.jpg" alt="troll image" className="img-fluid header-img"/>
                        </div>
                        <div className="col-md-8">
                            <h1 className="text-capitalize">meme generator</h1>
                        </div>
                        <div className="col-md-3">
                            <h2 className="subheading text-capitalize">react course - project 3</h2>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header