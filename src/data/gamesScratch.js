/*
iframe: https://scratch.mit.edu/projects/{scratchId}/embed
name: https://api.scratch.mit.edu/projects/{scratchId}

https://uploads.scratch.mit.edu/get_image/project/315972535_480x360.png
https://uploads.scratch.mit.edu/get_image/project/315985236_480x360.png
https://uploads.scratch.mit.edu/get_image/project/315971400_480x360.png

img: https://uploads.scratch.mit.edu/get_image/project/{scratchId}_480x360.png
200x150
282x218
350x500
480x360

<iframe
	src="https://scratch.mit.edu/projects/1157790735/embed"
	width="723"
	height="600"
></iframe>
*/

const gamesScratchCategories = {
	'banner': 'banner',
  '6': '6°',
  '7': '7°',
  '8': '8°',
  '9': '9°',
  '10': '10°',
  '11': '11°',
}

/*
1158053446, // Vectores
1157790735, // El gato y el ratón - ¡Atrápalo con coordenadas!

1158052992, // Tensión

*/

const gamesScratch = [
	// 6
	{ id: '323188197', name: 'Sesión 1. Medidas de tendencia central', categories: ['6.1', '7.1', '8.1', '9.1'] },
	{ id: '494299137', name: 'Sesión 2. Tablas de frecuencia', categories: ['6.2', '7.2', '8.2', '9.2'] },
	{ id: '256539458', name: 'Sesión 3. Áreas y Perímetros', categories: ['6.3', '7.3'] },
	{ id: '377458163', name: 'Sesión 4. Suma y resta de enteros', categories: ['6.4'] },
	{ id: '388955854', name: 'Sesión 5. Situaciones aditivas', categories: ['6.5'] },
	// Sesión 6. Situaciones Multiplicativas - https://phet.colorado.edu/sims/html/arithmetic/latest/arithmetic_en.html
	{ id: '315971400', name: 'El Gato Y El Ratón', categories: ['7.1', '6.6', 'banner'] },
	{ id: '411459450', name: 'Sesión 7. Fracciones', categories: ['6.7'] },
	{ id: '381448659', name: 'Sesión 8. Ecuaciones', categories: ['6.8', '7.8'] },

	// 7
	{ id: '381020377', name: 'Sesión 4. Multiplicación y división de enteros', categories: ['7.4'] },
	{ id: '386762410', name: 'Sesión 5. Ecuaciones con enteros', categories: ['7.5'] },
	{ id: '404552856', name: 'Sesión 6. Razones y Proporciones', categories: ['7.6'] },
	{ id: '411458142', name: 'Sesión 7. Porcipostres - Fracciones', categories: ['7.7', 'banner'] },

	// 8
	{ id: '235827480', name: 'Sesión 3. Ecuaciones lineales', categories: ['8.3', 'banner'] },
	{ id: '381468933', name: 'Sesión 4. Suma y resta de polinomios', categories: ['8.4'] },
	{ id: '370397274', name: 'Sesión 5. Multiplicación de Polinomios', categories: ['8.5'] },
	{ id: '556062570', name: 'Sesión 6. Factorización de Polinomios', categories: ['8.6', '9.6'] },
	// Sesión 7. Función - https://miguelhurtado3e.github.io/matematicas/courses/8/7.html
	// Sesión 8. Cocientes Notables - https://miguelhurtado3e.github.io/matematicas/courses/8/8.html

	// 9
	{ id: '382947679', name: 'Sesión 4. Sistemas de ecuaciones', categories: ['9.4', 'banner'] },
	{ id: '409273327', name: 'Sesión 5. Ecuación de la recta', categories: ['9.5'] },
	{ id: '575958234', name: 'Sesión 7. Función exponencial', categories: ['9.7', 'banner'] },
	// https://miguelhurtado3e.github.io/matematicas/courses/9/8.html - Sesión 8. Función Logaritmo

	// 10
	{ id: '323286090', name: 'Sesión 1. Medidas estadísticas', categories: ['10.1', '11.1'] },
	{ id: '315985236', name: 'Tensión Icfes', categories: ['11.1', '10.2', 'banner'] },
	{ id: '383295156', name: 'Sesión 3. Teorema de Pitágoras', categories: ['10.3'] },
	{ id: '530643883', name: 'Sesión 4. Razones trigonométricas', categories: ['10.4', 'banner'] },
	// Sesión 5. Leyes del seno, coseno y tangente - https://miguelhurtado3e.github.io/matematicas/courses/10/5.html
	{ id: '560469536', name: 'Sesión 6. Funciones trigonométricas', categories: ['10.6', 'banner'] },
	{ id: '587085191', name: 'Sesión 7. Ecuaciones trigonométricas', categories: ['10.7'] },
	// Sesión 8. Identidades trigonométricas - https://miguelhurtado3e.github.io/matematicas/courses/10/8.html
	{ id: '315972535', name: 'Vectores', categories: ['11.6', '10.2', 'banner'] },

	// 11
	{ id: '379638031', name: 'Sesión 3. Dominio y codominio de una función', categories: ['11.3'] },
	{ id: '384453243', name: 'Sesión 4. Características de una función', categories: ['11.4', 'banner'] },
	// Sesión 5. Deducción de una función desde su gráfica - https://miguelhurtado3e.github.io/matematicas/courses/11/5.html
	{ id: '405175272', name: 'Sesión 6. Límites', categories: ['11.6', 'banner'] },
	// Sesión 7. Derivada - https://miguelhurtado3e.github.io/matematicas/courses/11/7.html
	// Sesión 8. Variación y razón de cambio - https://miguelhurtado3e.github.io/matematicas/courses/11/8.html	
]

export {
	gamesScratch as default,
	gamesScratchCategories
}
