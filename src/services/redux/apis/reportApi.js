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
  }),
});

export const { useGetReportQuery, useGetOrderQuery } = reportApi;
