
function Header({handleBurger, burgerMenu, darkLight, handleDarkLight}) {


    return (
        <header>
        <div className="Logo"><img src="/src/img/logo_enssea_oval-light.png" alt=""/>ENSSEA Site Officiel</div>
        <div className="utilities">
            <div className="english"><img src="/src/img/en_gb.gif" alt="" /></div>
            <div className="french"><img src="/src/img/fr_fr.gif" alt=""/></div>
            <div className="darkLight">
                {!darkLight ? <button className="dark" onClick={handleDarkLight}><i className="fa-solid fa-moon"></i></button>: <button className="light" onClick={handleDarkLight}><i className="fa-solid fa-sun"></i></button>}
            </div>
        
            <div onClick={handleBurger} className={`burgerMenu ${burgerMenu ? "active": ""}`} >
                <div className="line" ></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </div>
        
        </header>
    )
}

export default Header