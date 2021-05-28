import { keyframes, style } from '@vanilla-extract/css'
export const App = style({
  textAlign: "center"
}, "App");

export const AooLogoSpin = keyframes({
  from: {
    transform: "rorate(0deg)"
  },
  to: {
    transform: "rorate(360deg)"
  }
}, "AooLogoSpin");

export const AppLogo = style({
  height: "40vmin",
  pointerEvents: "none",
  "@media": {
    "prefers-reduced-motion: no-preference": {
      animation: `${AooLogoSpin} infinite 20s linear`
    }
  }
}, "AppLogo");
export const AppHeader = style({
  backgroundColor: "#282c34",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "calc(10px + 2vmin)",
  color: "white"
}, "AppHeader");
export const AppLink = style({
  color: "#61dafb",
}, "AppLink");
export const Button = style({
  fontSize: "calc(10px + 2vmin)"
}, "Button");