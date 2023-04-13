import FormMessage from '../common/formMessage/FormMessage';
import LinksList from '../LinksList';
//<a href="https://ibb.co/YjGxsgh"><img src="https://i.ibb.co/2KBT4Jd/jossid-factory-blue-yellow.png" alt="jossid-factory-blue-yellow" border="0"></a>
const Main = () => {
  return (
    <div className='row bg-black'>
      <div className=' col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center'>
        <LinksList />
      </div>
      <div className='col-sm-12 col-md-6 col-lg-4 bg-black d-flex align-items-center'>
        <div className='col-sm-12 d-flex flex-column align-items-center'>
          <img
            src={
              /* 'https://i.ibb.co/PY19Pj6/jossid-Factory-White.png' */ 'https://i.ibb.co/2KBT4Jd/jossid-factory-blue-yellow.png'
            }
            alt='logo'
          />
          <h1 className='text-primary text-center'>Full Stack Web Development</h1>
        </div>
      </div>
      <div className='col-sm-12 col-md-6 col-lg-4 bg-black d-flex justify-content-center'>
        <FormMessage />
      </div>
    </div>
  );
};

export default Main;
