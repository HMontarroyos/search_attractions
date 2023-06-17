import { lazy } from "react";

import Globo from "./Globo";
const Header = lazy(async () => await import("./Header"));
const Loading = lazy(async () => await import("./Loading"));

export { Globo, Loading, Header };
