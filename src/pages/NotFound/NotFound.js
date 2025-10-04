import { Link } from 'react-router-dom';
import Footer from '../../components/Shared/Footer';

const NotFound = () => {
  return (
    <>
      <div className='pt-120 pb-120'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-8 offset-xl-2'>
              <div className='error-404 not-found mb-20'>
                <div className='error-404-content text-center'>
                  <h1 className='error-404-title'> 404 </h1>
                  <h2 className='error-title'>Page Not Found</h2>
                  <p className='err-text'>Ups! Halaman yang Anda cari tidak ada. Mungkin telah dipindahkan atau dihapus. </p>
                  <Link to="/" className="btn-primary">Back To Home</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default NotFound;