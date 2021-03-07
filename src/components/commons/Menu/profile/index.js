import React from 'react';
import Image from 'next/image';

const ProfileImage = () => (
  <Image
    width={200}
    height={200}
    alt="Foto de Adriele Rodrigues"
    src="/images/profile.png"
  />
);

export default ProfileImage;
