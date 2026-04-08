/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { STANDARDS } from './data/standards';

export { STANDARDS };

export const RATING_LEGEND = [
  { code: 'C', label: 'Conforme', color: 'bg-green-500' },
  { code: 'OA', label: "Opportunité d'amélioration", color: 'bg-yellow-400' },
  { code: 'OBS', label: 'Observation', color: 'bg-orange-400' },
  { code: 'NCm', label: 'Non-conformité mineure', color: 'bg-red-400' },
  { code: 'NCM', label: 'Non-conformité majeure', color: 'bg-red-600' },
  { code: 'NA', label: 'Non applicable', color: 'bg-gray-400' }
];
