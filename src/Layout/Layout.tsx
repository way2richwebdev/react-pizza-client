import { Layout } from './types.ts';
import Header from './Header/Header.tsx';

const Layout = ({ children }: Layout) => {
  return (
    <div className='layout'>
      <Header/>
      <div className="wrapper">
        <div className="container">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout