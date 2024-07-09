import { http, HttpResponse } from "msw";

const BASE_URL = "http://localhost:5173";

// TODO add types for responses here

export const handlers = [
  http.get(`${BASE_URL}/user`, () => {
    return HttpResponse.json({
      id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d",
      firstName: "Taylor",
      lastName: "Smith",
      billCount: 6,
      totalDue: 600.0,
    });
  }),

  http.post(`${BASE_URL}/pay`, () => {
    return HttpResponse.json({
      message: "Payment successful",
    });
  }),
];
