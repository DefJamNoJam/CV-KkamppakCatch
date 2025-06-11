import { useMemo, useState } from 'react';
import { UseLanguage } from '@hooks/UseLanguage';
import { ContactData } from '@constants/ContactData';
import * as CS from '@styles/home/ContactStyles';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const { lang } = UseLanguage();

  const { header, labels, placeholders, button, toastMessage } = useMemo(
    () => ContactData.translations[lang],
    [lang]
  );

  const [form, setForm] = useState({
    lastName: '',
    firstName: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setForm({ lastName: '', firstName: '', email: '', message: '' });

    toast.success(toastMessage, {
      position: 'top-right',
      autoClose: 1500,
    });
  };

  return (
    <>
      <CS.ToastCon />
      <CS.ContactContainer>
        <CS.Header>
          <CS.Title>{header.title}</CS.Title>
          <CS.Description>{header.description}</CS.Description>
        </CS.Header>

        <CS.Form onSubmit={handleSubmit}>
          <CS.Row>
            <CS.FormGroup>
              <CS.Label>
                {labels.lastName} <CS.Required>*</CS.Required>
              </CS.Label>
              <CS.Input
                name="lastName"
                placeholder={placeholders.lastName}
                value={form.lastName}
                onChange={handleChange}
                required
              />
            </CS.FormGroup>

            <CS.FormGroup>
              <CS.Label>
                {labels.firstName} <CS.Required>*</CS.Required>
              </CS.Label>
              <CS.Input
                name="firstName"
                placeholder={placeholders.firstName}
                value={form.firstName}
                onChange={handleChange}
                required
              />
            </CS.FormGroup>
          </CS.Row>

          <CS.FormGroup fullWidth>
            <CS.Label>
              {labels.email} <CS.Required>*</CS.Required>
            </CS.Label>
            <CS.Input
              name="email"
              type="email"
              placeholder={placeholders.email}
              value={form.email}
              onChange={handleChange}
              required
            />
          </CS.FormGroup>

          <CS.FormGroup fullWidth>
            <CS.Label>{labels.message}</CS.Label>
            <CS.Textarea
              name="message"
              placeholder={placeholders.message}
              rows={5}
              value={form.message}
              onChange={handleChange}
            />
          </CS.FormGroup>

          <CS.SubmitButton type="submit">{button}</CS.SubmitButton>
        </CS.Form>
      </CS.ContactContainer>
    </>
  );
}
