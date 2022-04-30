import { useTranslation } from 'next-export-i18n';

import { InnerProps } from '.';

const Textarea = ({
  register,
  formState: { errors },
  fieldConfig: { name, label, placeholder, required, defaultValue },
}: InnerProps) => {
  const { t } = useTranslation();

  return (
    <section className='form__input'>
      {/* <label htmlFor={name}>{label}</label> */}
      <textarea
        {...register(name, {
          required: required && `${label}${t('FORM.IS_REQUIRED')}`,
        })}
        id={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        cols={30}
        rows={10}
      />
      {errors[name] && (
        <span className='form__error-message'>{errors[name].message}</span>
      )}
    </section>
  );
};

export default Textarea;
