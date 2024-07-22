import apiSlice from "./apiSlice";

const reportApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getReport: builder.query({
      query: ({ startDate, endDate }) =>
        `/order/reports?from=${startDate}&until=${endDate}`,
      providesTags: ["Report"],
    }),
    getOrder: builder.query({
      query: (params) => ({
        url: `/v2/order`,
        method: "GET",
        params: {
          ...params,
        },
      }),
      providesTags: ["Order"],
    }),
    patchOrderbyId: builder.mutation({
      query: ({ id, data }) => ({
        url: `/order/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Order"],
    }),
  }),
});

export const {
  useGetReportQuery,
  useGetOrderQuery,
  usePatchOrderbyIdMutation,
} = reportApi;
