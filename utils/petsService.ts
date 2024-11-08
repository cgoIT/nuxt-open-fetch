import { type PetsResponse } from '#open-fetch'
import type {AsyncData} from "#app";

export type Pet = PetsResponse<'getPetById'>;

export const useGetPetById = (id: number): AsyncData<Pet, any> => {
  return usePets('/pet/{petId}', {
    path: {
      petId: id
    }
  });
}