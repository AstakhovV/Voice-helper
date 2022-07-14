import React from 'react';
import Navbar from '../atoms/Navbar/Navbar';
import SideBar from '../atoms/Sidebar/SideBar';
import styles from './Layout.module.scss';
import Footer from '../atoms/Footer/Footer';

interface Props {
  content: () => JSX.Element;
}

const Layout = (props: Props) => (
  <div className={styles.layout}>
    <header className={styles.header}>
      <Navbar />
    </header>
    <aside className={styles.sidebar}>
      <SideBar />
    </aside>
    <main className={styles.main}>{props.content()}</main>
    <footer className={styles.footer}>
      <Footer />
    </footer>
  </div>
);

export default Layout;
