globalThis.process ??= {}; globalThis.process.env ??= {};
const dashboard = new Proxy({"src":"/_astro/dashboard.Iww7Nv4Z.png","width":1899,"height":835,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "E:/workSpace/ali_image/src/assets/images/dashboard.png";
							}
							
							return target[name];
						}
					});

export { dashboard as default };
