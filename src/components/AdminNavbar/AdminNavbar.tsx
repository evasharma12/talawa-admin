import React from 'react';
import styles from './AdminNavbar.module.css';
import Navbar from 'react-bootstrap/Navbar';
import Logo from 'assets/talawa-logo-200x200.png';
import Row from 'react-bootstrap/Row';
interface NavbarProps {
  targets: { url: string; name: string }[];
}

function AdminNavbar({ targets }: NavbarProps): JSX.Element {
  return (
    <>
      <Navbar className={styles.navbarbg}>
        <Navbar.Brand>
          <Row className={styles.navallitem}>
            <a className={styles.logo}>
              <img src={Logo} />
              <strong>Talawa Portal</strong>
            </a>
            <div className={styles.navitems}>
              <a href="/orgdash">Dashboard</a>

              <a href="/orgpeople">People</a>
              <a>Events</a>
              <a>Contributions</a>
              <a>Posts</a>
            </div>
          </Row>
        </Navbar.Brand>
      </Navbar>
    </>
  );
}

export default AdminNavbar;