import { InputHTMLAttributes } from 'react';

import { FormProvider, useForm } from 'react-hook-form';

import Field from './Field';

type FieldConfig = InputHTMLAttributes<HTMLInputElement | HTMLSelectElement> & {
  name: string; // override InputHTMLAttributes
  type: string; // override InputHTMLAttributes
  label: string;
};

type Props = {
  fieldConfigs: FieldConfig[];
  onSubmit: (data: unknown) => void;
  children?: React.ReactNode;
};

const Form = ({ fieldConfigs, onSubmit, children }: Props) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form className='form' onSubmit={methods.handleSubmit(onSubmit)}>
        {fieldConfigs.map((fieldConfig) => (
          <Field key={fieldConfig.name} fieldConfig={fieldConfig} />
        ))}
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
export type { FieldConfig };
