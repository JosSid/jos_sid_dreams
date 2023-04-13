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
      className='col-sm-12 col-lg-12 p-2 p-md-4 p-lg-5  d-flex flex-column align-items-center text-primary bg-black text-center'
    
    >
      <h2>Contact with me</h2>

      <p>
      Send me a message telling me what you need and I will contact you by mail... Or if you prefer, fill in the telephone field and I will contact you by WhatsApp
      </p>
      <Input
        className='col-md-12 col-lg-12 mb-2'
        type='text'
        name='name'
        label={'Name'}
        required
        onChange={handleFormData}
        value={formData.name}
        placeholder='REQUIRED'
      />
      <Input
        className='col-md-12 col-lg-12 mb-2'
        type='email'
        name='mail'
        label={'EMail'}
        required
        onChange={handleFormData}
        value={formData.mail}
        placeholder='REQUIRED'
      />
      <Input
        className='col-md-12 col-lg-12 mb-5'
        type='phone'
        name='phone'
        label={'Phone'}
        onChange={handleFormData}
        value={formData.phone}
      />
      <TextArea
        className='col-md-12 col-lg-12 mb-5'
        label={'Message'}
        value={formData.comments}
        onChange={handleFormData}
        name='comments'
        placeholder='REQUIRED'
        required
      />
      <Button
        type='submit'
        className='btn btn-secondary mx-3 my-3 text-primary'
        classNameContainer='col-md-12 align-right'
      >
        Send message
      </Button>
      
      <Toaster position="top-center" richColors />
      
    </form>
  );
};

export default FormMessage;
