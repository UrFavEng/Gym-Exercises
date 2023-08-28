import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const exercisesApi = createApi({
  reducerPath: "exercises",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://exercisedb.p.rapidapi.com/",
    prepareHeaders(headers) {
      headers.set("Accept", "application/vnd.api+json");
      headers.set("X-BingApis-SDK", "application/vnd.api+json");
      headers.set(
        "X-RapidAPI-Key",
        "26edb38ce3msh506f4b75823babap14934ajsn72c5faac6090"
      );
      headers.set("X-RapidAPI-Host", "exercisedb.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    bodyParts: builder.query({
      query: () => `exercises/bodyPartList`,
    }),
    allExercises: builder.query({
      query: () => `exercises`,
    }),
    getExercisesByCat: builder.query({
      query: (cat) => `exercises/bodyPart/${cat}`,
    }),
    getExerciseByID: builder.query({
      query: (id) => `exercises/exercise/${id}`,
    }),
    ListByTargetMuscle: builder.query({
      query: (target) => `exercises/target/${target}`,
    }),
    ListByEquipment: builder.query({
      query: (equipment) => `exercises/equipment/${equipment}`,
    }),
    ListByName: builder.query({
      query: (name) => `exercises/name/${name}`,
    }),
  }),
});

export const {
  useBodyPartsQuery,
  useAllExercisesQuery,
  useGetExercisesByCatQuery,
  useGetExerciseByIDQuery,
  useListByTargetMuscleQuery,
  useListByEquipmentQuery,
  useListByNameQuery,
} = exercisesApi;
