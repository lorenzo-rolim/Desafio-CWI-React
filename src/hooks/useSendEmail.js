import emailjs from 'emailjs-com';
import { useState } from 'react';

export const useSendEmail = () => {
  const [error, setError] = useState(false);

  async function Email(e, req, setInputValue) {
    e.preventDefault();
    await emailjs
      .sendForm(
        'gmailMessage',
        'template_f0d7bqv',
        req.current,
        'Kb8b-Y3kYj7avQ0Vc',
      )
      .then(
        (result) => {
          setInputValue('');
        },
        (error) => {
          setError(true);
          setInputValue('');
        },
      );
  }

  return { Email, error };
};
