// import directives
import copy from './modules/copy'
import debounce from './modules/debounce'
import longpress from "./modules/longpress";


const directivesList: any = {
	copy,
	debounce,
	longpress
}

const directives = {
	install: function (app: any) {
		Object.keys(directivesList).forEach(key => {
			app.directive(key, directivesList[key])
		})
	}
}


export default directives
