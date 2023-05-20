import { useTranslation } from 'next-export-i18n';

import { InnerProps } from '.';

const Textarea = ({
  register,
  formState: { errors },
  fieldConfig: { name, label, placeholder, required, defaultValue, col },
}: InnerProps) => {
  const { t } = useTranslation();

  return (
    <section className={`row__col row__col--${col}`}>
      <label className='form__input' htmlFor={name}>
        {/* <b>
          {required && '* '}
          {label}
        </b> */}
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
        {errors[name]?.message && (
          <span className='form__error-message'>
            {errors[name]?.message?.toString()}
          </span>
        )}
      </label>
    </section>
  );
};

export default Textarea;
