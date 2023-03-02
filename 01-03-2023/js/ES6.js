class Consultorio {
    constructor(nombre) {
      this._nombre = nombre;
      this._pacientes = [];
    }
  
    get nombre() {
      return this._nombre;
    }
  
    set nombre(nombre) {
      this._nombre = nombre;
    }
  
    get pacientes() {
      return this._pacientes;
    }
  
    agregarPaciente(paciente) {
      this._pacientes.push(paciente);
    }
  
    buscarPaciente(nombre) {
      return this._pacientes.find(paciente => paciente.nombre === nombre);
    }
  }
  
  class Paciente {
    constructor(nombre, edad, rut, diagnostico) {
      this._nombre = nombre;
      this._edad = edad;
      this._rut = rut;
      this._diagnostico = diagnostico;
    }
  
    get nombre() {
      return this._nombre;
    }
  
    set nombre(nombre) {
      this._nombre = nombre;
    }
  
    get edad() {
      return this._edad;
    }
  
    set edad(edad) {
      this._edad = edad;
    }
  
    get rut() {
      return this._rut;
    }
  
    set rut(rut) {
      this._rut = rut;
    }
  
    get diagnostico() {
      return this._diagnostico;
    }
  
    set diagnostico(diagnostico) {
      this._diagnostico = diagnostico;
    }
  }
  
  // Creando objeto de clase Consultorio
  const consultorio = new Consultorio('Mi Consultorio');
  //Creando objetos de pacientes
  const paciente1 = new Paciente('Nicolas Bustaamnte', 28, '18549737-2', 'Gripe');
  const paciente2 = new Paciente('Dusan Matulic', 41, '9659082-2', 'Dolor de cabeza');
  const paciente3 = new Paciente('Gabriela Tonko', 25, '19633409-2', 'Fractura');
  
  consultorio.agregarPaciente(paciente1);
  consultorio.agregarPaciente(paciente2);
  consultorio.agregarPaciente(paciente3);
  
  // Muestra todos los pacientes
  console.log(consultorio.pacientes); 
  // Muestra los datos del paciente encontrado
  const pacienteEncontrado = consultorio.buscarPaciente('Gabriela Tonko');
  console.log(pacienteEncontrado); 
  