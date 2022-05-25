import React, { createContext } from "react";
import User from "./user/index";

//overall styles
import "./app.css";
import "line-awesome/dist/line-awesome/css/line-awesome.css";

import app_user from "./app.config";

// const screen_width = window.screen.availWidth;

// const UserContext = createContext({ user: app_user, screen_width });

export default () => <User />;
