import { Avatar, AvatarGroup } from '@mui/material';

import { LANDING_AVATAR_IMAGES } from '@features/trip/data';

export default function AvatarSection() {
  return (
    <AvatarGroup max={4}>
      {LANDING_AVATAR_IMAGES.map((image, index) => (
        <Avatar
          key={image.id}
          alt={image.alt}
          src={image.src}
          sx={{
            width: '3.4375rem',
            height: '3.4375rem',
            borderWidth: 2,
            borderStyle: 'solid',
            borderColor: 'grey.200',
            position: 'relative',
            mr: -2, // Creates the overlapping effect
            zIndex: index + 1, // Ensures the last image is on top
          }}
        />
      ))}
    </AvatarGroup>
  );
}
