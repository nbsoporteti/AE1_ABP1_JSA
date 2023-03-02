// Constructor de la clase Paciente
function Paciente(nombre, edad, rut, diagnostico) {
    this.nombre = nombre;
    this.edad = edad;
    this.rut = rut;
    this.diagnostico = diagnostico;
  }
  
  // Getters y setters de la clase Paciente
  Paciente.prototype.getNombre = function() {
    return this.nombre;
  }
  
  Paciente.prototype.getEdad = function() {
    return this.edad;
  }
  
  Paciente.prototype.getRut = function() {
    return this.rut;
  }
  
  Paciente.prototype.getDiagnostico = function() {
    return this.diagnostico;
  }
  
  Paciente.prototype.setNombre = function(nombre) {
    this.nombre = nombre;
  }
  
  Paciente.prototype.setEdad = function(edad) {
    this.edad = edad;
  }
  
  Paciente.prototype.setRut = function(rut) {
    this.rut = rut;
  }
  
  Paciente.prototype.setDiagnostico = function(diagnostico) {
    this.diagnostico = diagnostico;
  }
  
  // Constructor de la clase Consultorio
  function Consultorio(nombre) {
    this.nombre = nombre;
    this.pacientes = [];
  }
  
  // Métodos de la clase Consultorio
  Consultorio.prototype.agregarPaciente = function(paciente) {
    this.pacientes.push(paciente);
  }
  
  Consultorio.prototype.buscarPaciente = function(nombre) {
    return this.pacientes.find(paciente => paciente.getNombre() === nombre);
  }
  
  Consultorio.prototype.mostrarPacientes = function() {
    console.log(`Pacientes del consultorio "${this.nombre}":`);
    this.pacientes.forEach(paciente => {
      console.log(`- Nombre: ${paciente.getNombre()}, Edad: ${paciente.getEdad()}, Rut: ${paciente.getRut()}, Diagnóstico: ${paciente.getDiagnostico()}`);
    });
  }
  
  // Ejemplo de uso
  const consultorio = new Consultorio("Mi Consultorio");
  
  const paciente1 = new Paciente('Nicolas Bustaamnte', 28, '18549737-2', 'Gripe');
  const paciente2 = new Paciente('Dusan Matulic', 41, '9659082-2', 'Dolor de cabeza');
  const paciente3 = new Paciente('Gabriela Tonko', 25, '19633409-2', 'Fractura');
  
  
  consultorio.agregarPaciente(paciente1);
  consultorio.agregarPaciente(paciente2);
  consultorio.agregarPaciente(paciente3);
  
  consultorio.mostrarPacientes(); 
  // muestra todos los pacientes
  const pacienteEncontrado = consultorio.buscarPaciente("Gabriela Tonko");
  console.log(`Paciente encontrado: ${pacienteEncontrado.getNombre()}`); 
  