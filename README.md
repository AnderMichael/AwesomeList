# This is Awesome List!

## Problema
Para desarrollar el presente proyecto se tomó en cuenta el problema de llamar lista hoy en día: "Las hojas con filas y columnas quedaron en el pasado, no solo para los procesos administrativos con los que cuentan la mayoría de los colegios, sino también para el manejo de la gestión de notas, registros y asistencia". El proyecto va dirigido al último punto, el cual se considera primordial para la inicialización a la digitalización, ya que es algo que se practica y hace todos los días. Esto último se explica en la solución del problema. 
El rasgo principal del problema surge con la tediosa experiencia de los maestros en épocas de pandemia, cuando les costó adaptarse a la interacción con las distintas plataformas. Esto se debía a que hasta antes de la pandemia la gente en general no tuvo una inicialización en la digitalización adecuada, por ende todo lo referente a virtualidad representaba un gran desafío.
Después de pasar por un acontecimiento tan marcado como lo fue la educación virtual, algunos colegios ya optan por incluir mucho de lo aprendido y sin embargo, no es lejana la posibilidad de que la ley obligue a incluir la virtualidad en las clases regulares y si no se tiene una buena capacitación podría volverse a los problemas del año 2020.

## Solución
El problema presentado anteriormente es muy grande y probablemente lleve tiempo adecuarse a la realidad del país. El objetivo principal del proyecto es brindar una alternativa para introducir a los maestros específicamente en la virtualidad académica, por lo que se pensó en dos objetos con los que la mayoría de los maestros cuentan: Un celular y un registro de asistencia. Maneras de registrar la asistencia de los estudiantes existen demasiadas, pero es un proceso simple que todos conocen y puede mejorarse haciendo uso de la red y los móviles propiamente. El desafío está en la manera de presentar e interactuar con esta nueva alternativa. En palabras más técnicas, todo depende del diseño de la pantalla y la respuesta rápida a las acciones del usuario (FrontEnd). La solución no aparenta resolver el problema de introducción a la digitalización, sin embargo, si las próximas funcionalidades se añaden en un orden progresivo para una aplicación que es utilizada por muchas personas, el manejo se hace menos complejo y más accesible.

## Pasos para instalar la aplicación:

1. Instalar React-Native en el ordenador: Antes de descargar el repositorio en el ordenador, primero se debe instalar el framework denominado **'React - Native'**

  `choco install -y nodejs-lts microsoft-openjdk11`  Debe contarse con el instalador de paquetería *Chocolatey* en el sistema operativo.
  
  Existen pasos posteriores con las variables de entorno, pero que se especifican mejor en la página oficial de React Native:
  
  https://reactnative.dev/docs/environment-setup

2. Instalar un buen editor de texto como lo es *VS Code*:
    
   Continúe con el siguiente si ya cuenta con *VS Code*.
   
   https://code.visualstudio.com/

3. Una vez instalado todo esto, también debe contar con el sistema de control de versiones denominado *Git* y ejecutar el siguiente comando, para inicializar y contar con un repositorio local en el ordenador:

    `git clone [<URL del proyecto>](https://github.com/AnderMichael/AwesomeList.git)`
    
    Continúe con el siguiente link si no ceunta con *Git*:
    
    https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
    
4. Abra la ubicación del repositorio con *VS Code* y ejecute el siguiente comando en la terminal de VS, no sin antes conectar su móvil al ordenador por medio USB y con la depuración USB activada en los ajustes del celular:
  
  `npx react-native run-android`

## Dificultades
La aplicación debía contar con un servicio web de base de datos denominado Cloud Firestore tanto para la autenticación como para el almacenamiento de los nuevos datos, sin embargo, la base de datos de Firestore es NoSQL y se requería una base de tipo SQL preferiblemente, por lo que para el entregable se hizo un artificio en el código para simular la tabla principal de una base de datos SQL.
## Conclusiones
El proyecto luce simple y ordinario, pero es una propuesta para luchar contra la inadaptabilidad tecnológica. Como primer entregable se tiene lo mostrado en el demo, se cumple con la funcionalidad básica y principal propuesta a lo largo de todo este informe. Los usuarios deberían responder muy bien con la interacción programada y a largo plazo, se pensaría en enviar las primeras actualizaciones añadiendo más características tales como un botón de atraso, una vista de la tabla en tiempo real y otros funciones que faciliten los datos generados al docente. El fin es constituir la primera libreta digital escolar boliviana y con AwesomeList podría alcanzarse esta meta.
