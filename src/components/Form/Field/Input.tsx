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
    col,
  },
}: InnerProps) => {
  const { t } = useTranslation();

  return (
    <section className={`row__col row__col--${col}`}>
      <label className='form__input' htmlFor={name}>
        {/* <b>
          {required && '* '}
          {label}
        </b> */}
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
      </label>
    </section>
  );
};

export default Input;
