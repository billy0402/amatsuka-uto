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

  const updatedFieldConfig = {
    ...fieldConfig,
    label: t(fieldConfig.label),
    placeholder: fieldConfig.placeholder ?? t(fieldConfig.label),
    col: fieldConfig.col ?? 12,
  };

  switch (fieldConfig.type) {
    case 'textarea':
      return <Textarea {...methods} fieldConfig={updatedFieldConfig} />;
    default:
      return <Input {...methods} fieldConfig={updatedFieldConfig} />;
  }
};

export default Field;
