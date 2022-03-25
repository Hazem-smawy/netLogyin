import layoutStyles from "../styles/layout.module.css";



const Layout = ({children}) => {
  return (
    <div className={layoutStyles.container}>
      {children}
    </div>
  );
};

export default Layout;
