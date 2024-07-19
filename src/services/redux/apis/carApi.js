import apiSlice from "./apiSlice";

const carApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCar: builder.query({
      query: (params) => ({
        url: "/v2/car",
        method: "GET",
        params: {
          ...params,
        },
      }),

      providesTags: ["Car"],
    }),
    getCarById: builder.query({
      query: (id) => `/car/${id}`,
      providesTags: ["Car"],
    }),
    addCar: builder.mutation({
      query: (data) => ({
        url: "/car",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Car"],
    }),
    updateCar: builder.mutation({
      query: ({ id, data }) => ({
        url: `/car/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Car"],
    }),
    deleteCar: builder.mutation({
      query: (id) => ({
        url: `/car/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Car"],
    }),
  }),
});

export const {
  useGetCarQuery,
  useGetCarByIdQuery,
  useAddCarMutation,
  useUpdateCarMutation,
  useDeleteCarMutation,
} = carApi;
