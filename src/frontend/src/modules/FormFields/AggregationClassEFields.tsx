'use client';

import { Grid, Paper, Typography } from '@mui/material';

import ControlTextField from '@/components/TextField';

interface AggregationClassEFieldsProps {
  /**
   * Флаг формы создания.
   * @default false
   */
  isNew?: boolean;
}

const AggregationClassEFields = ({ isNew = false }: AggregationClassEFieldsProps) => {
  return (
    <>
      <Paper sx={{ px: 3.75, py: 2.5, mt: 2 }}>
        <Grid
          container
          spacing={1.5}
          alignItems="flex-end"
        >
          <Grid size={{ xs: 12, md: 6, lg: 6 }}>
            <ControlTextField
              id="aggregationAtr"
              name="aggregationAtr"
              label="AggregationAtr"
            />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default AggregationClassEFields;
