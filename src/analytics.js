import ReactGA from "react-ga4";

const TRACKING_ID = "G-YRR8VZ2TQ1"; // Replace with your Measurement ID
ReactGA.initialize(TRACKING_ID);

export const trackPageView = (path) => {
    ReactGA.send({ hitType: "pageview", page: path });
};
