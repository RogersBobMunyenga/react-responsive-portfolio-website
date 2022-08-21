import "./navbar.css";

const Navbar = () => {
  return (
      <div className="n-wrapper">
          <div className="n-left">
              <div className="n-name">Rotshi</div>
              <span>toggle</span>
          </div>
          <div className="n-right">
              <div className="n-list">
                  <ul>
                      <li>Home</li>
                      <li>Services</li>
                      <li>Experience</li>
                      <li>Portfolio</li>
                      <li>Testimonial</li>
                  </ul>
              </div>
              <div className="button n-button">
                  Contac us
              </div>
          </div>
    </div>
  )
}

export default Navbar