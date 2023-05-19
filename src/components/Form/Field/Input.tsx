import { useTranslation } from 'next-export-i18n';

import { InnerProps } from '.';

const Input = ({
  register,
  formState: { errors },
  fieldConfig: {
    name,
    type,
    label,
    placeholder,
    required,
    disabled,
    defaultValue,
  },
}: InnerProps) => {
  const { t } = useTranslation();

  return (
    <section className='form__input'>
      {/* <label htmlFor={name}>{label}</label> */}
      <input
        {...register(name, {
          required: required && `${label}${t('FORM.IS_REQUIRED')}`,
        })}
        id={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        defaultValue={defaultValue}
      />
      {errors[name]?.message && (
        <span className='form__error-message'>
          {errors[name]?.message?.toString()}
        </span>
      )}
    </section>
  );
};

export default Input;
