const Header = () => {
  return (
    <div className='row bg-danger bg-gradient h-25' style={{position: "sticky", top: '0', zIndex: '9'}}>
      <div className='col-md-2' />
      <div className='col-md-8 d-flex align-center'>
        <img src='https://i.ibb.co/PY19Pj6/jossid-Factory-White.png' alt='logo' />
      </div>
      <div className='col-md-2' />
    </div>
  );
};

export default Header;
