function Consultorio(nombre) {
    this._nombre = nombre;
    this._pacientes = [];
  
    Object.defineProperty(this, 'nombre', {
      get: function() {
        return this._nombre;
      },
      set: function(nombre) {
        this._nombre = nombre;
      }
    });
  
    Object.defineProperty(this, 'pacientes', {
      get: function() {
        return this._pacientes;
      }
    });
  }
  
  Consultorio.prototype.agregarPaciente = function(paciente) {
    this._pacientes.push(paciente);
  };
  
  Consultorio.prototype.buscarPaciente = function(nombre) {
    return this._pacientes.find(function(paciente) {
      return paciente.nombre === nombre;
    });
  };
  
  function Paciente(nombre, edad, rut, diagnostico) {
    this._nombre = nombre;
    this._edad = edad;
    this._rut = rut;
    this._diagnostico = diagnostico;
  
    Object.defineProperty(this, 'nombre', {
      get: function() {
        return this._nombre;
      },
      set: function(nombre) {
        this._nombre = nombre;
      }
    });
  
    Object.defineProperty(this, 'edad', {
      get: function() {
        return this._edad;
      },
      set: function(edad) {
        this._edad = edad;
      }
    });
  
    Object.defineProperty(this, 'rut', {
      get: function() {
        return this._rut;
      },
      set: function(rut) {
        this._rut = rut;
      }
    });
  
    Object.defineProperty(this, 'diagnostico', {
      get: function() {
        return this._diagnostico;
      },
      set: function(diagnostico) {
        this._diagnostico = diagnostico;
      }
    });
  }
  
  // Ejemplo de uso
  var consultorio = new Consultorio('Mi Consultorio');
  
  var paciente1 = new Paciente('Nicolas Bustaamnte', 28, '18549737-2', 'Gripe');
  var paciente2 = new Paciente('Dusan Matulic', 41, '9659082-2', 'Dolor de cabeza');
  var paciente3 = new Paciente('Gabriela Tonko', 25, '19633409-2', 'Fractura');
  
  consultorio.agregarPaciente(paciente1);
  consultorio.agregarPaciente(paciente2);
  consultorio.agregarPaciente(paciente3);
  
  console.log(consultorio.pacientes); // Muestra todos los pacientes
  
  var pacienteEncontrado = consultorio.buscarPaciente('Gabriela Tonko');
  console.log(pacienteEncontrado); // Muestra los datos del paciente encontrado
  