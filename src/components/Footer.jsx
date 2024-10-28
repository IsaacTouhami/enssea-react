
function Footer() {
  return (
    <footer>
    <div className="contact"> 
        <span><i className="fa-solid fa-location-dot"></i> Pôle Universitaire de Koléa, Tipaza</span>
        <span><i className="fa-solid fa-phone"></i> +213 (0) 24 38 00 24</span>
    </div>
    <div className="social">
        <a href="#" ><i className="fa-brands fa-facebook"></i></a>
        <a href="#" ><i className="fa-brands fa-linkedin"></i></a>
        <a href="#"><i className="fa-brands fa-instagram"></i></a>
    </div>
    <h6>© 2024 Ecole Nationale Supérieure de Statistique et d'Economie Appliquée.</h6>
    {/* a button with arrow pointing above to go above by header id */}
    <a href="#header" className="goTop"><i className="fa-solid fa-arrow-up"></i></a>
</footer>
  );
}

export default Footer;