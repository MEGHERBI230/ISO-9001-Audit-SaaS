import { ISO_9001_2015 } from './iso9001';
import { ISO_37000_2021 } from './iso37000';
import { ISO_37301_2021 } from './iso37301';
import { ISO_31000_2018 } from './iso31000';
import { ISO_26000_2010 } from './iso26000';
import { ISO_56002_2019 } from './iso56002';
import { ISO_19011_2018 } from './iso19011';
import { Clause } from '../../types';

export interface Standard {
  id: string;
  name: string;
  description: string;
  structure: Clause[];
}

export const STANDARDS: Standard[] = [
  {
    id: 'iso9001',
    name: 'ISO 9001:2015',
    description: 'Systèmes de management de la qualité',
    structure: ISO_9001_2015
  },
  {
    id: 'iso37000',
    name: 'ISO 37000:2021',
    description: 'Gouvernance des organismes',
    structure: ISO_37000_2021
  },
  {
    id: 'iso37301',
    name: 'ISO 37301:2021',
    description: 'Systèmes de management de la conformité',
    structure: ISO_37301_2021
  },
  {
    id: 'iso31000',
    name: 'ISO 31000:2018',
    description: 'Management du risque',
    structure: ISO_31000_2018
  },
  {
    id: 'iso26000',
    name: 'ISO 26000:2010',
    description: 'Responsabilité sociétale',
    structure: ISO_26000_2010
  },
  {
    id: 'iso56002',
    name: 'ISO 56002:2019',
    description: 'Management de l’innovation',
    structure: ISO_56002_2019
  },
  {
    id: 'iso19011',
    name: 'ISO 19011:2018',
    description: 'Lignes directrices pour l’audit',
    structure: ISO_19011_2018
  }
];
