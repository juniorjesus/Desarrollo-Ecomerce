<<<<<<< HEAD
# Reto Final: Desarrollo Ecommerce

1. Index: Esta es la primera página donde en cada una de las páginas tendrá un menú con las opciones: Home, Productos (1), y un ícono que refleja las
cantidades de ítems agregados al carrito con un enlace al detalle del carrito de compras (2) (Imagen 2). Agregamos una imagen de Bienvenida (3) que 
se cargará desde una URL referente al tipo de productos que se venderán en la tienda. Agregamos dos Banners (4,5) referentes a las categorías de productos
de la tienda, en este ejemplo, tiene categorías: Hombre y Mujer, lo cuál podría ser aplicable a una tienda de ropa, por ejemplo, cada banner debe tener un
enlace a la página de productos (Imagen 3), pero cargando los productos pertenecientes a esta categoría. Por último, creamos un Footer (6) que al igual que
la sección de menú, se compartirá en todas las vistas del sitio.

![img1](https://res.cloudinary.com/db9wh5uvt/image/upload/v1628096453/icommerce1_hruue6.png)<br/>
Imagen 1. Index


2. Carrito de Compras: En esta página se listan los productos que se han agregado al carrito, donde se muestra el nombre del producto, imagen, cantidad, 
precio unitario y subtotal equivalente a el costo de ese ítem multiplicado por la cantidad. Al dar clic en el botón pagar nos lleva al formulario de datos 
de “Información de Pago” (Imagen 5).

![img2](https://res.cloudinary.com/db9wh5uvt/image/upload/v1628096453/icommerce2_phgqza.png)<br/>
Imagen 2. Detalle carrito de compras

3. Página de Productos: Acá se listan los productos según la categoría seleccionada, esta recibe el id de la misma por parámetro y carga la categoría deseada,
y por ende los productos que pertenecen a la categoría seleccionada, cada producto tiene enlace a una página de detalle (Imagen 4).


![img3](https://res.cloudinary.com/db9wh5uvt/image/upload/v1628096452/icommerce3_s4meom.png)<br/>
Imagen 3: Mosaico de productos, donde cada producto tiene un enlace al detalle de este. (Imagen 4).


4. Detalle del producto: Acá se muestra el producto deseado, según el id que viene por parámetro, mostrando la imagen, el título, el precio, la descripción, 
un input para escribir la cantidad y un botón para agregarlo al carrito de compras de la sesión actual.

![img4](https://res.cloudinary.com/db9wh5uvt/image/upload/v1628096454/icommerce4_izhfdm.png)<br/>
Imagen 4: Detalle del producto.


5. Información de Pago: Formulario que captura los datos personales y de pago del usuario, estos datos se deben guardar junto con la relación de los productos 
agregados al carrito, teniendo en cuenta: productos, cantidad, precio, y subtotal.

![img5](https://res.cloudinary.com/db9wh5uvt/image/upload/v1628096453/icommerce5_ldswvl.png)<br/>
Imagen 5: Formulario de pago

## ESPECIFICACIONES TÉCNICAS
### Creación del frontend

Teniendo en cuenta la estructura y mockups planteados, creamos las 5 interfaces que requerimos para el ecommerce, es necesario conservar la distribución
planteada en los mockups, pero se puede utilizar como referencia el diseño deseado.

### Creación del Carrito de Compras

Creamos una clase JavaScript llamada Carrito, la cuál instanciaremos en el frontend y almacenaremos su estado de manera local, que tendrá los métodos necesarios para:

Adicionar producto al carrito
Sumar el valor de todos los productos Listar los productos en el carrito Eliminar un producto, y vaciar el carrito.

Para lograr almacenar la información del carrito en la sesión, podemos usar localStorage, donde se pueden guardar los objetos JSON referentes a la información 
de la compra y la información del formulario de pago.

Una vez el usuario haga clic en PAGAR se debe almacenar los datos del carrito y la compra en un archivo JSON y remover los valores almacenados en el 
localStorage para que el carrito quede nuevamente vacío.


Para realizar la entrega de esta actividad debe realizar los siguientes pasos:

    1. Crear un Issues llamado Entrega-Modulo-3-Tarea-04-Ecommerce
    2. Al Issues adicionar un pantallazo con el enunciado de la tarea
    3. Luego debes agregar la descripción de los pasos que ejecutaste para dar solución a la tarea y 
       adjuntar las imágenes de evidencia.  
    4. Etiquetar al formador a cargo “@JohnFlorez25” el cual revisará su ejercicio y dará las respectivas observaciones  



=======
# Entrenamiento Academia Geek

<h3 align="center"><strong>!Bienvenidos a nuestro Campo de Entrenamiento Geek 🤖,  estamos muy a gusto en que seas parte de nuestra comunidad y poder apoyarte en tu crecimiento profesional en el maravilloso mundo del desarrollo del software!</strong></h3>

En este campo de entrenamiento, encontraras un conjunto de lecciones y videos que te guiaran en tu proceso de formación para adquirir los conocimientos esenciales en las tres tecnologías esenciales (HTML, CSS, JavaScript) para convertirte en un desarrollador web. El curso está construido para ser desarrollado por módulos, cada uno de los módulos tiene   **Lecciones** -   📓   y    **Videos**  -   📺   sobre el contenido que vas a aprender.<br><br>

## Objetivo del curso:

Adquirir los conocimientos esenciales para realizar aplicaciones web dinámicas haciendo uso de HTML, CSS y Javascript. Con este curso se pretende que los beneficiarios tengan los conceptos esenciales que se requieren para introducirse en el camino de formación como desarrolladores web y sirva como elementos de línea base de las tecnologías necesarias para su proceso de formación mediante una metodología orientada a realizar entregables (proyectos y retos) cercanos a la exigencia de un entorno laboral.

## Contenido del curso:
Módulo 0. Conceptos Esenciales<br><br>
Módulo 1. HTML y CSS<br><br>
Módulo 2. Fundamentos de JavaScript<br><br>
Módulo 3. Integraciones HTML, CSS y JavaScript<br><br>

## Entregables de Seguimiento

Durante la ejecución del campo de entrenamiento irán encontrando una serie de ejercicios que fortalecerán los conocimientos básicos de cada una de las sesiones asignadas en los módulos 0 al 2. Estos ejercicios son solo de práctica y profundización.<br><br>

## Entregas evaluativas

El módulo tres está compuesto por ejercicios evaluativos que deben realizar con el fin de sustentar los conocimientos esenciales en HTML, CSS Y JS. Cada ejercicio tiene un nivel de dificultad diferente que daran a conocer sus habilidades adquiridas con el campo de entrenamiento.<br><br>

## Como crear `Issues` para realizar tus entregas

Para la mayoría de sus asignaciones (entregas) , creará `Issues` en GitHub.

Para crear un Issue, debe ubicarse en la pestaña marcada como `Issues`:

![](https://res.cloudinary.com/duzf4vfki/image/upload/v1628031867/ClassroomGitHub/imgIssues1_iqi3fy.png)

Una vez que haga clic en esa pestaña, verá todos los problemas actuales en este repositorio. En este punto, no se han creado `Issues`. Creemos un nuevo problema haciendo clic en `New issue`

![](https://res.cloudinary.com/duzf4vfki/image/upload/v1628032254/ClassroomGitHub/imgIssues2_nf8vzv.png)

Una vez que haya creado un nuevo problema, será recibido por la pantalla a continuación. Aquí proporcionarás
* Un título para su problema (cada título debe ser el nombre de la tarea, por ejemplo según el caso en cada entrega de un módulo es "Entrega-Modulo-3-Tarea-01-Divisas)
* Un cuerpo para tu `Issue` para escribir una respuesta o subir una captura de pantalla.
* Un botón de envío

![](https://res.cloudinary.com/duzf4vfki/image/upload/v1628032906/ClassroomGitHub/imgIssues3_tz17bn.png)


 > IMPORTANTE: Los `Issues` deben dejarse en estado abierto `Open`, de esta manera cada vez que usted crea un `Issue` una persona de nuestro equipo de mentores pasará a revisar si su entrega corresponde a los requerimientos solicitados en la asignación, tarea o entrega y es quien cambia el estado de un `Issue`, el cual puede ser cerrado `Close` o generarse una etiqueta `Label` en relacióna a una corrección o adición que usted deba realizar para que sea válida la entrega realizada y estar su actividad `Issue` cerrada `Close`.




 
>>>>>>> fbf37a8f97c3915b408da65973e1731a6ae05549
