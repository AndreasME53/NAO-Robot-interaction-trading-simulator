import React from 'react';

import { useFormContext } from 'react-hook-form';

import hookForms from 'utils/hookForms';

export default function RegisterFormContext({ name }) {
  const methods = useFormContext();
  hookForms.addForm(name, methods);
  return <></>;
}
