import React from 'react';
import Navbar from '../atoms/Navbar/Navbar';
import SideBar from '../atoms/Sidebar/SideBar';
import styles from './Layout.module.scss';
import clsx from 'clsx';

interface Props {
  content: () => JSX.Element;
}

const Layout = (props: Props) => (
  <div className={styles.layout}>
    <header className={clsx(styles.header, 'bg-slate-600 flex justify-center')}>
      <Navbar />
    </header>
    <aside className={clsx(styles.sidebar, 'bg-slate-600 rounded')}>
      <SideBar />
    </aside>
    <main className={clsx(styles.main, 'bg-slate-600 rounded')}>
      {props.content()}
    </main>
  </div>
);

export default Layout;
