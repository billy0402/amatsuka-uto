import { FieldConfig } from '@components/Form';

export const contactFieldConfigs: FieldConfig[] = [
  {
    name: 'company',
    type: 'text',
    label: 'CONTACT.FORM.COMPANY',
    required: true,
  },
  {
    name: 'name',
    type: 'text',
    label: 'CONTACT.FORM.NAME',
    required: true,
  },
  {
    name: 'email',
    type: 'text',
    label: 'CONTACT.FORM.EMAIL',
    required: true,
  },
  {
    name: 'title',
    type: 'text',
    label: 'CONTACT.FORM.TITLE',
    required: true,
  },
  {
    name: 'content',
    type: 'textarea',
    label: 'CONTACT.FORM.CONTENT',
    required: true,
  },
];
