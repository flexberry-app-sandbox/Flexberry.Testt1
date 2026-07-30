'use client';

import React, { useState } from 'react';
import { Box } from '@mui/material';
import { useRouter, useSearchParams } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';
import { AxiosError } from 'axios';

import AssosiationClassEFields from '@/modules/FormFields/AssosiationClassEFields';
import useCreateAssosiationClass from '@/hooks/AssosiationClass/useCreateAssosiationClass';
import { useNotification } from '@/components/Notification';
import EditFormToolbar from '@/components/EditFormToolbar';
import { ROUTES_CONFIG } from '@/config/routes.config';
import { getQueryParamStateId } from '@/utils/getQueryParamStateId';
import { createUuid } from '@/utils/guidUtils';
import { IAssosiationE } from '@/types/AssosiationClass.types';

export default function AssosiationClassPageNew() {
  const viewName: string = 'AssosiationE';

  const searchParams = useSearchParams();
  const router = useRouter();
  const [closeAfter, setCloseAfter] = useState(false);
  const { showError, showSuccess } = useNotification();

  const methods = useForm<IAssosiationE>({
    defaultValues: {
      id: createUuid(),
      assosiationName: '',
    },
  });

  const handleSuccess = (newRecord: IAssosiationE) => {
    showSuccess('Изменения успешно сохранены');
    if (closeAfter) {
      handleTransition();
    } else {
      router.push(`${ROUTES_CONFIG.ASSOSIATION_CLASS_L}/${newRecord.id}${getQueryParamStateId(searchParams)}`);
    }
  };

  const handleError = (error: AxiosError | Error) => {
    showError(`Ошибка при сохранении: ${error.message}`);
  };

  const { createAssosiationClassAsync } = useCreateAssosiationClass<IAssosiationE>(handleSuccess, handleError);

  const handleTransition = () => {
    router.push(`${ROUTES_CONFIG.ASSOSIATION_CLASS_L}${getQueryParamStateId(searchParams)}`);
  };

  return (
    <FormProvider {...methods}>
      <Box component="form">
        <EditFormToolbar
          title="AssosiationClassE"
          onSave={async (newValue: IAssosiationE, close: boolean) => {
            setCloseAfter(close);
            await createAssosiationClassAsync({ assosiationClass: newValue, viewName: viewName });
          }}
          onTransition={handleTransition}
        />
        <AssosiationClassEFields isNew />
      </Box>
    </FormProvider>
  );
}
