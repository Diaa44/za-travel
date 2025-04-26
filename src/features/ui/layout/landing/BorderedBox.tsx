// src/features/ui/layout/landing/BorderedBox.tsx
import React, { ReactNode } from 'react';

import { Box, SxProps, Theme } from '@mui/material';

interface BorderedBoxProps {
  children: ReactNode;
  width?: string | number | { [key: string]: string | number };
  maxWidth?: number | string;
  topBorder?: boolean;
  bottomBorder?: boolean;
  sx?: SxProps<Theme>;
}

const BorderedBox: React.FC<BorderedBoxProps> = ({
  children,
  width = 625,
  maxWidth = '75rem',
  topBorder = true,
  bottomBorder = false,
  sx,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        p: 3,
        mt: 14,
        ml: 10,
        gap: 3,
        width,
        maxWidth,
        position: 'relative',
        borderTop: topBorder ? '1px solid' : 'none',
        borderBottom: bottomBorder ? '1px solid' : 'none',
        borderColor: 'grey.200',
        '&::before': topBorder
          ? {
              content: '""',
              position: 'absolute',
              width: 8,
              height: 8,
              backgroundColor: 'grey.200',
              borderRadius: '50%',
              top: '-5px',
              left: 0,
              transform: 'translateX(6%)',
            }
          : {},
        '&::after': topBorder
          ? {
              content: '""',
              position: 'absolute',
              width: 8,
              height: 8,
              backgroundColor: 'grey.200',
              borderRadius: '50%',
              top: '-5px',
              right: 0,
              transform: 'translateX(6px)',
            }
          : {},
        '& .bottom-left': bottomBorder
          ? {
              content: '""',
              position: 'absolute',
              width: 8,
              height: 8,
              backgroundColor: 'grey.200',
              borderRadius: '50%',
              bottom: '-5px',
              left: 0,
              transform: 'translateY(0px)',
            }
          : {},
        '& .bottom-right': bottomBorder
          ? {
              content: '""',
              position: 'absolute',
              width: 8,
              height: 8,
              backgroundColor: 'grey.200',
              borderRadius: '50%',
              bottom: '-5px',
              right: 0,
              transform: 'translateX(6px)',
            }
          : {},
        ...sx, // Spread sx prop here to merge with incoming styles
      }}
    >
      {children}
      {bottomBorder && <Box className="bottom-left" />}
      {bottomBorder && <Box className="bottom-right" />}
    </Box>
  );
};

export default BorderedBox;
