import { useState } from 'react';
import Input from '../input/Input';
import TextArea from '../textarea/Textarea';
import Button from '../button/Button';
import { createMessage } from './formService';
import { Toaster, toast } from 'sonner';

const initialState = {
  name: '',
  mail: '',
  phone: '',
  comments: '',
};

const FormMessage = () => {
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState(null);

  const handleFormData = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handelSubmit = async (event) => {
    event.preventDefault();
    try {
      await createMessage(formData);
      setFormData(initialState);
      toast.success('Mensaje enviado, en breve te contestaremos, gracias!');
    } catch (error) {
      console.log(error.message);
      toast.error(error.message)
    }
  };

  return (
    <form
      onSubmit={handelSubmit}
      className='col-sm-12 col-lg-12 p-2 p-md-4 p-lg-5 m-3 d-flex flex-column align-items-center text-light bg-success bg-gradient text-center'
      style={{ maxWidth: '300px' }}
    >
      <h2>Contactanos</h2>

      <p>
        Dejanos tu nombre y tu mail, cuentanos que solucion necesitas y nos
        pondremos en contacto contigo
      </p>
      <Input
        className='col-md-12 col-lg-12 mb-5'
        type='text'
        name='name'
        label={'Nombre'}
        required
        onChange={handleFormData}
        value={formData.name}
        placeholder='REQUIRED'
      />
      <Input
        className='col-md-12 col-lg-12 mb-5'
        type='mail'
        name='mail'
        label={'Mail'}
        required
        onChange={handleFormData}
        value={formData.mail}
        placeholder='REQUIRED'
      />
      <Input
        className='col-md-12 col-lg-12 mb-5'
        type='phone'
        name='phone'
        label={'Telefono'}
        onChange={handleFormData}
        value={formData.phone}
      />
      <TextArea
        className='col-md-12 col-lg-12 mb-5'
        label={'Comentarios'}
        value={formData.comments}
        onChange={handleFormData}
        name='comments'
        placeholder='REQUIRED'
      />
      <Button
        type='submit'
        className='btn btn-secondary mx-3 my-3 bg-warning bg-gradient'
        classNameContainer='col-md-12 align-right'
        style={{ color: 'white' }}
      >
        Enviar
      </Button>
      
      <Toaster position="top-center" richColors />
      
    </form>
  );
};

export default FormMessage;
