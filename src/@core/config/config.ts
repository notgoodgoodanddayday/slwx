import {ConfigMain} from './main';
import {environment} from "environments/environment";

export const Config = Object.assign(ConfigMain, environment);