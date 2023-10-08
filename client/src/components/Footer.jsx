import React from 'react';
import IV from '../assets/images/IV.png';
import CQlove from '../assets/images/CQlove.png';
import ronin from '../assets/images/ronin.png';
import ceres from '../assets/images/ceres.png';
import github from '../assets/images/github.png';

const styles = {
    footer: {
        color: "#22668D",
        backgroundColor:"#FFCC70",
        flexShrink:"none"
    },
    icon: {
        height: 20,
        width: 20,
        marginLeft: 5
    }
}

const Footer = () => (
    <footer
        id="sticky-footer"
        className="py-4"
        style={styles.footer}>
        
        <div className="container text-center justify-content-center">
            <h5> Designed, Coded, and Cultivated 🌱 by TEAM ONE</h5>
            
            <a
                href="https://github.com/orgs/Team-ONE-OSU/repositories"
                rel="noreferrer"
                target="_blank">
                
                <img
                    src={github}
                    alt="TEAM ONE"
                    style={styles.icon} />
            </a>

            <a
                href="https://ceresmarkley.github.io/ceres-react-portfolio/"
                rel="noreferrer"
                target="_blank">
                
                <img
                    src={ceres}
                    alt="ceres"
                    style={styles.icon} />
            </a>

            <a
                href="https://kaichen.biz/"
                rel="noreferrer"
                target="_blank">
                
                <img
                    src={ronin}
                    alt="ronin"
                    style={styles.icon} />
            </a>

            <a
                href="https://portfolio-jianxiong.netlify.app/"
                rel="noreferrer"
                target="_blank">
                
                <img
                    src={CQlove}
                    alt="cqlove"
                    style={styles.icon} />
            </a>

            <a
                href="https://ornate-faloodeh-6a725d.netlify.app/"
                rel="noreferrer"
                target="_blank">
                
                <img
                    src={IV}
                    alt="IV"
                    style={styles.icon} />
            </a>

            <br />

            <small>
                Copyright &copy; TEAM ONE
            </small>

        </div>
    </footer>
    
        
);

export default Footer;