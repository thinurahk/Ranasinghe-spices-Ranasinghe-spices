'use client';

import * as React from 'react';

import { RadialIntro } from '@/components/animate-ui/components/community/radial-intro';

const ITEMS = [
  {
    id: 1,
    name: 'Cardamom',
    src: '/SpinningCircle/cardamom_1.jpg',
  },
  {
    id: 2,
    name: 'Black Pepper',
    src: '/SpinningCircle/ceylon-black-pepper_1.jpg',
  },
  {
    id: 3,
    name: 'Cinnamon Powder',
    src: '/SpinningCircle/ceylon-cinnamon-powder_1.jpg',
  },
  {
    id: 4,
    name: 'Pepper Powder',
    src: '/SpinningCircle/ceylon-pepper-powder_1.jpg',
  },
  {
    id: 5,
    name: 'White Pepper',
    src: '/SpinningCircle/ceylon-white-pepper_1.jpg',
  },
  {
    id: 6,
    name: 'Cloves',
    src: '/SpinningCircle/cloves_1.jpg',
  },
  {
    id: 7,
    name: 'Mustard',
    src: '/SpinningCircle/mustard_1.jpg',
  },
  {
    id: 8,
    name: 'Turmeric',
    src: '/SpinningCircle/turmeric_1.jpg',
  },
  {
    id: 9,
    name: 'Vanilla',
    src: '/SpinningCircle/vanilla_1.jpg',
  },
];

export const RadialIntroDemo = ({ className }: { className?: string }) => (
  <div className={`flex items-center justify-center overflow-hidden ${className || ''}`}>
    <RadialIntro 
      orbitItems={ITEMS} 
      stageSize={600} 
      imageSize={140} 
    />
  </div>
);
