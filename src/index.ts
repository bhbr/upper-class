
/*******************************************

*******************************************/

export function isInstanceOf(obj: object, cls: string): boolean {
	return ancestry(obj).includes(cls)
}

export function ancestry(obj: object): Array<string> {
	return prototypes(obj).map((x) => x.constructor.name)
}

function prototypes(obj: object): Array<object> {
// A list of the class's prototype object, from object to the class itself
	let ret: Array<object> = []
	var obj2 = Object.getPrototypeOf(obj)
	while (obj2 != null) {
		ret.push(obj2)
		obj2 = Object.getPrototypeOf(obj2)
	}
	return ret.reverse()
}
