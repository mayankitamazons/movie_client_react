import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Logo from "../../assets/poll-logo.png";
import ThunderIcon from "../../assets/thunder.png";
import WhitePollIcon from "../../assets/WhitePollIcon.png";


const Header = () => {
  

  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="navWrapper">
            <Link to="/" style={{ textDecoration: "none" }}>
              <div className="navContent">
                <img src={Logo} alt="Logo" className="logo" />
                <img src={WhitePollIcon} alt="Logo" className="mobLogo" />

                <h2>Movie App</h2>
              </div>
            </Link>

            <div className="navContent">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="createPool"
              >
                Submit Review
                <img src={ThunderIcon} alt="Thunder" />
              </motion.button>
            </div>

            {/* <div className="navContent">
            <img src={SearchIcon} alt="Search" style={{ cursor: "pointer" }} />
            <button className="login">Login</button>
          </div> */}
          </div>
        </div>
      </div>

    
    </>
  );
};

export default Header;
