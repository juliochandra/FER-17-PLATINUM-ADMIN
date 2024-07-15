import apiSlice from "./apiSlice";

const reportApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getReport: builder.query({
      query: ({ startDate, endDate }) =>
        `/order/reports?from=${startDate}&until=${endDate}`,
      providesTags: ["Report"],
    }),
    getOrder: builder.query({
      query: () => `/v2/order?sort=created_at%3Adesc&page=1&pageSize=10`,
      providesTags: ["Order"],
    }),
  }),
});

export const { useGetReportQuery, useGetOrderQuery } = reportApi;
