import { useFormContext, UseFormReturn } from 'react-hook-form';

import { useTranslation } from 'next-export-i18n';

import { FieldConfig } from '..';
import Input from './Input';
import Textarea from './Textarea';

type Props = {
  fieldConfig: FieldConfig;
};

export type InnerProps = UseFormReturn & {
  fieldConfig: FieldConfig;
};

const Field = ({ fieldConfig }: Props) => {
  const methods = useFormContext();
  const { t } = useTranslation();

  const getFieldName = (
    fieldConfig: FieldConfig,
    options: { prefix: string } = { prefix: '' },
  ): string => options.prefix + (t(fieldConfig.label) || fieldConfig.label);

  const updatedFieldConfig = {
    ...fieldConfig,
    label: getFieldName(fieldConfig, {
      prefix: fieldConfig.required ? '* ' : '',
    }),
    placeholder: getFieldName(fieldConfig),
  };

  switch (fieldConfig.type) {
    case 'textarea':
      return <Textarea {...methods} fieldConfig={updatedFieldConfig} />;
    default:
      return <Input {...methods} fieldConfig={updatedFieldConfig} />;
  }
};

export default Field;
