import dayjs from 'dayjs/esm';

import { IBloodPressure, NewBloodPressure } from './blood-pressure.model';

export const sampleWithRequiredData: IBloodPressure = {
  id: 82246,
  timestamp: dayjs('2023-06-20T03:28'),
  systolic: 50366,
  diastolic: 28757,
};

export const sampleWithPartialData: IBloodPressure = {
  id: 37469,
  timestamp: dayjs('2023-06-20T02:19'),
  systolic: 94935,
  diastolic: 2497,
};

export const sampleWithFullData: IBloodPressure = {
  id: 74963,
  timestamp: dayjs('2023-06-20T03:55'),
  systolic: 81126,
  diastolic: 83758,
};

export const sampleWithNewData: NewBloodPressure = {
  timestamp: dayjs('2023-06-19T09:09'),
  systolic: 64105,
  diastolic: 1733,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
