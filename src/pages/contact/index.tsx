import { useEffect, useState } from 'react';

import type { NextPage } from 'next';

import { useTranslation } from 'next-export-i18n';

import Form, { FieldConfig } from '@components/Form';
import { contactFieldConfigs } from '@fixtures/field-configs/contact';

const ContactPage: NextPage = () => {
  const [fieldConfigs, setFieldConfigs] = useState<FieldConfig[]>([]);

  const { t } = useTranslation();

  useEffect(() => {
    setFieldConfigs(contactFieldConfigs);
  }, []);

  const onSubmit = (data: unknown) => {
    console.log(data);
  };

  return (
    <article className='article contact'>
      <h1 className='article__title'>Contact Form</h1>
      <Form fieldConfigs={fieldConfigs} onSubmit={onSubmit}>
        <section className='contact__actions'>
          <button className='btn' type='submit'>
            {t('CONTACT.CONFIRM')}
          </button>
        </section>
      </Form>
      <section className='contact__warning'>
        <p>
          返信は天使うと本人が致します。
          ご連絡を頂いてもすべてにご返信ができない場合がございます。
          お急ぎの際は、返信の期限を記載の上、ご連絡をお願いいたします。
          ３～５日返信がない場合はお手数ですが、もう一度ご連絡をお願いいたします。
          お仕事以外のご連絡はお控えください。
        </p>
      </section>
    </article>
  );
};

export default ContactPage;
