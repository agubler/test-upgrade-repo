import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v } from '@dojo/framework/widget-core/d';
import uuid from '@dojo/framework/core/uuid';
import request from '@dojo/framework/core/request';
import { Outlet } from '@dojo/framework/routing/Outlet';

import * as css from './styles/helloWorld.m.css';

const logo = require('./../img/logo.svg');

/**
 * A "Hello World" widget that renders a spinning Dojo 2 logo and the text "Hello, Dojo 2 World!".
 *
 * Refer to the creating widgets tutorial for help: https://dojo.io/tutorials/003_creating_widgets/
 */
export class HelloWorld extends WidgetBase {
	onAttach() {
		request('https://foo.com');
	}
	protected render() {
		return v('div', { classes: css.root }, [
			v('img', { src: logo, classes: css.logo }),
			v('div', { classes: css.label }, ['Hello, Dojo World!', uuid()])
		]);
	}
}

export const a = Outlet(HelloWorld, 'state', { mapParams: () => ({}) });

export default HelloWorld;
