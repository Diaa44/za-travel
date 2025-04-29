import PlacesForm from '@features/trip/components/PlacesForm';
import { useAppDispatch, useAppSelector } from '@store/index';

import type { Trip } from '../../../types';
import {
  nextStep,
  selectWizardTrip,
  setPlaces,
} from '../../store/tripWizardSlice';
import Pagination from '../Navigation/Pagination';

export default function Places() {
  const { places, onSubmit } = usePlacesForm();

  return (
    <PlacesForm
      defaultPlaces={places}
      onSubmit={onSubmit}
      SubmitComponent={<Pagination />}
      autoFocus
    />
  );
}

function usePlacesForm() {
  const dispatch = useAppDispatch();
  const trip = useAppSelector(selectWizardTrip);

  const onSubmit = (places: Trip['places']) => {
    dispatch(setPlaces(places));
    dispatch(nextStep());
  };

  return {
    onSubmit,
    places: trip.places,
  };
}
